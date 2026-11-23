"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { DeckDefinition, PresentationThemeSettings } from "./types";
import { StageViewport } from "./StageViewport";
import { ControlBar } from "./ControlBar";
import { SpeakerNotesDrawer } from "./SpeakerNotesDrawer";
import { OverviewGridModal } from "./OverviewGridModal";
import { SettingsModal } from "./SettingsModal";

const DEFAULT_THEME_SETTINGS: PresentationThemeSettings = {
  mode: "dark",
  toneLevel: 50,
  showGrid: true,
  gridDensity: "standard",
  gridOpacity: 60,
  patternStyle: "crosshair",
  showStageGrid: false,
};

interface PresentationEngineProps {
  deck: DeckDefinition;
}

export function PresentationEngine({ deck }: PresentationEngineProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize slide from query param (?slide=1)
  const initialSlideParam = searchParams.get("slide");
  const parsedInitial = initialSlideParam ? parseInt(initialSlideParam, 10) - 1 : 0;
  const validInitial = isNaN(parsedInitial)
    ? 0
    : Math.max(0, Math.min(parsedInitial, deck.slides.length - 1));

  const [currentSlideIndex, setCurrentSlideIndex] = useState(validInitial);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [themeSettings, setThemeSettings] = useState<PresentationThemeSettings>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME_SETTINGS;
    try {
      const saved = localStorage.getItem("presentation_theme_settings");
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_THEME_SETTINGS;
  });

  const handleUpdateSettings = useCallback((newSettings: PresentationThemeSettings) => {
    setThemeSettings(newSettings);
    try {
      localStorage.setItem("presentation_theme_settings", JSON.stringify(newSettings));
    } catch {}
  }, []);

  const handleResetSettings = useCallback(() => {
    handleUpdateSettings(DEFAULT_THEME_SETTINGS);
  }, [handleUpdateSettings]);

  const channelRef = useRef<BroadcastChannel | null>(null);

  // Cross-Window Sync with Presenter View Console
  useEffect(() => {
    const channelName = `presentation_sync_${deck.slug}`;
    let channel: BroadcastChannel | null = null;

    if (typeof BroadcastChannel !== "undefined") {
      channel = new BroadcastChannel(channelName);
      channelRef.current = channel;

      channel.onmessage = (event) => {
        const { type, slideIndex: incomingIndex } = event.data || {};
        if (type === "SLIDE_CHANGE" && typeof incomingIndex === "number") {
          setCurrentSlideIndex((prev) => {
            if (prev !== incomingIndex) {
              const clamped = Math.max(0, Math.min(incomingIndex, deck.slides.length - 1));
              const params = new URLSearchParams(window.location.search);
              params.set("slide", String(clamped + 1));
              window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
              return clamped;
            }
            return prev;
          });
        } else if (type === "REQUEST_SYNC") {
          channel?.postMessage({
            type: "SYNC_STATE",
            slideIndex: currentSlideIndex,
          });
        }
      };

      channel.postMessage({ type: "PING" });
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === `presentation_slide_${deck.slug}` && e.newValue) {
        const idx = parseInt(e.newValue, 10);
        if (!isNaN(idx)) {
          setCurrentSlideIndex(idx);
          const params = new URLSearchParams(window.location.search);
          params.set("slide", String(idx + 1));
          window.history.replaceState(null, "", `${pathname}?${params.toString()}`);
        }
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      if (channel) channel.close();
      window.removeEventListener("storage", handleStorage);
    };
  }, [deck.slug, deck.slides.length, pathname, currentSlideIndex]);

  // Sync state to URL query parameter without re-rendering the whole page
  const updateSlideIndex = useCallback(
    (newIndex: number) => {
      const clampedIndex = Math.max(0, Math.min(newIndex, deck.slides.length - 1));
      setCurrentSlideIndex(clampedIndex);

      // Update URL query parameter
      const params = new URLSearchParams(window.location.search);
      params.set("slide", String(clampedIndex + 1));
      const newUrl = `${pathname}?${params.toString()}`;
      window.history.replaceState(null, "", newUrl);

      // Broadcast to Presenter View
      if (channelRef.current) {
        channelRef.current.postMessage({
          type: "SLIDE_CHANGE",
          slideIndex: clampedIndex,
        });
      }

      try {
        localStorage.setItem(`presentation_slide_${deck.slug}`, String(clampedIndex));
      } catch {
        // ignore
      }
    },
    [deck.slides.length, deck.slug, pathname]
  );

  const handleOpenPresenterView = useCallback(() => {
    const presenterUrl = `${pathname}?mode=presenter&slide=${currentSlideIndex + 1}`;
    window.open(presenterUrl, "presenter_window", "width=1280,height=820,menubar=no,toolbar=no");
  }, [pathname, currentSlideIndex]);

  // Next / Prev callbacks
  const handleNext = useCallback(() => {
    if (currentSlideIndex < deck.slides.length - 1) {
      updateSlideIndex(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, deck.slides.length, updateSlideIndex]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      updateSlideIndex(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, updateSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept typing in inputs or textareas
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
        case "Enter":
        case "l":
          e.preventDefault();
          handleNext();
          break;
        case "ArrowLeft":
        case "PageUp":
        case "Backspace":
        case "h":
          e.preventDefault();
          handlePrev();
          break;
        case "Home":
          e.preventDefault();
          updateSlideIndex(0);
          break;
        case "End":
          e.preventDefault();
          updateSlideIndex(deck.slides.length - 1);
          break;
        case "n":
        case "N":
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;
        case "g":
        case "G":
        case "o":
        case "O":
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "s":
        case "S":
          e.preventDefault();
          setIsSettingsOpen((prev) => !prev);
          break;
        case "w":
        case "W":
          e.preventDefault();
          handleOpenPresenterView();
          break;
        case "p":
        case "P":
          if (e.altKey) {
            e.preventDefault();
            handleOpenPresenterView();
          } else if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            handlePrint();
          }
          break;
        case "Escape":
          if (isNotesOpen) setIsNotesOpen(false);
          if (isOverviewOpen) setIsOverviewOpen(false);
          if (isSettingsOpen) setIsSettingsOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, updateSlideIndex, deck.slides.length, isNotesOpen, isOverviewOpen, handleOpenPresenterView]);

  // Touch Swipe Navigation
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    // Minimum swipe threshold 50px, predominantly horizontal
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Fullscreen Handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  // Print to PDF Handler
  const handlePrint = () => {
    window.print();
  };

  const currentSlide = deck.slides[currentSlideIndex];
  const CurrentSlideComponent = currentSlide.component;

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black flex flex-col justify-center items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Screen Mode: Dynamic Scaled Stage */}
      <div className="w-full h-full flex items-center justify-center print:hidden">
        <StageViewport theme={deck.theme} themeSettings={themeSettings}>
          <CurrentSlideComponent
            slideIndex={currentSlideIndex}
            totalSlides={deck.slides.length}
            deck={deck}
            isActive={true}
          />
        </StageViewport>
      </div>

      {/* Print Mode: Render all slides in full 1280x720 pages */}
      <div className="hidden print:block w-full">
        {deck.slides.map((slide, idx) => {
          const SlideComp = slide.component;
          return (
            <div
              key={slide.id}
              className="page-break w-[1280px] h-[720px] overflow-hidden relative m-0 p-0 block"
              style={{
                pageBreakAfter: "always",
                breakAfter: "page",
                width: "1280px",
                height: "720px",
              }}
            >
              <SlideComp
                slideIndex={idx}
                totalSlides={deck.slides.length}
                deck={deck}
                isActive={idx === currentSlideIndex}
              />
            </div>
          );
        })}
      </div>

      {/* Control Bar Dock */}
      <ControlBar
        currentSlideIndex={currentSlideIndex}
        totalSlides={deck.slides.length}
        deckTitle={deck.title}
        onPrev={handlePrev}
        onNext={handleNext}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        isNotesOpen={isNotesOpen}
        onToggleOverview={() => setIsOverviewOpen((prev) => !prev)}
        isOverviewOpen={isOverviewOpen}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onPrint={handlePrint}
        onOpenPresenterView={handleOpenPresenterView}
        onToggleSettings={() => setIsSettingsOpen((prev) => !prev)}
        isSettingsOpen={isSettingsOpen}
      />

      {/* Speaker Notes & Q&A Drawer */}
      <SpeakerNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlide}
        slideIndex={currentSlideIndex}
        totalSlides={deck.slides.length}
      />

      {/* Overview Grid Modal */}
      <OverviewGridModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        deck={deck}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={updateSlideIndex}
      />

      {/* Theme, Tone Range & Grid Pattern Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={themeSettings}
        onChangeSettings={handleUpdateSettings}
        onResetSettings={handleResetSettings}
      />
    </div>
  );
}
