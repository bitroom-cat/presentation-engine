import { DeckDefinition } from "@/engine/types";
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Timeline } from "./slides/Slide02Timeline";
import { Slide03Portfolio } from "./slides/Slide03Portfolio";
import { Slide04TiesverseBackend } from "./slides/Slide04TiesverseBackend";
import { Slide05EdgeSecuritySeo } from "./slides/Slide05EdgeSecuritySeo";
import { Slide06FounderTool } from "./slides/Slide06FounderTool";
import { Slide07PortalProblem } from "./slides/Slide07PortalProblem";
import { Slide08PortalArchitecture } from "./slides/Slide08PortalArchitecture";
import { Slide09RbacScopeExplorer } from "./slides/Slide09RbacScopeExplorer";
import { Slide10OrmCode } from "./slides/Slide10OrmCode";
import { Slide11PortalModules } from "./slides/Slide11PortalModules";
import { Slide12TechMatrix } from "./slides/Slide12TechMatrix";
import { Slide13Challenges } from "./slides/Slide13Challenges";
import { Slide14Outcomes } from "./slides/Slide14Outcomes";
import { Slide15Limitations } from "./slides/Slide15Limitations";
import { Slide16Conclusion } from "./slides/Slide16Conclusion";

const vivaNotes: Record<number, { bullets: string[]; q: string; a: string }> = {
        1: {
          bullets: [
            "Greet the panel, HOD & Internal Guide Dr. Pawan Thakur, and introduce your 6-week Industrial Training report (CSEE-713P) at Tiesverse Foundation, Bhopal.",
            "Highlight that rather than working on a single toy exercise, you shipped three production software systems under Tech Lead Mr. Ashutosh Patra.",
            "Preview the three pillars right on the cover: the tiesverse.com & Webinar backend, founder-web-tool.vercel.app, and the flagship Multi-Site RBAC Admin Portal."
          ],
          q: "Your certificate mentions 3 months while the report focuses on 6 weeks—why?",
          a: "The B.Tech CSEE-713P curriculum requires a 6-week industrial training logbook and evaluation window (10 June to 25 July 2026), which is the exact audited period documented in this report."
        },
        2: {
          bullets: [
            "Introduce Tiesverse Foundation (TIES): a youth-led Research, Media & Technology organisation in Bhopal with 90+ members operating multiple public web platforms.",
            "Trace the Gantt chart cleanly across all 6 weeks—showing progression from a standalone founder tool, to security research, to live server deployments, culminating in the Multi-Site Admin Portal.",
            "Emphasize accountability: daily tasks were logged and signed by your Industry Mentor, concluding in a full code walk-through on 24 July."
          ],
          q: "Why did you start with a research report on CAPTCHA before deploying the Webinar website?",
          a: "Public registration forms are prime targets for automated spam; researching Turnstile vs. legacy CAPTCHA first let us bake edge bot-filtering into the Webinar backend from day one."
        },
        3: {
          bullets: [
            "Give the panel a high-level architectural map of your three core builds before diving into each one.",
            "Project 1 covers live Linux/Nginx/Gunicorn hosting, Webinar APIs, Cloudflare WAF/Turnstile, and Technical SEO.",
            "Project 2 is founder-web-tool.vercel.app—a live decoupled decision tool for early-stage startup tech stacks.",
            "Project 3 is the flagship Multi-Site Admin Portal uniting 4 web properties under two-tier RBAC and ORM isolation."
          ],
          q: "Which of the three projects was technically hardest and why?",
          a: "The Multi-Site Admin Portal, because integrating 4 heterogeneous web properties while closing Django's default staff-permission leakage required enforcing isolation directly at the ORM and ModelAdmin layers."
        },
        4: {
          bullets: [
            "Walk left-to-right across the production architecture SVG: public traffic hits Cloudflare first, then Nginx with Let's Encrypt TLS, then Gunicorn WSGI workers running Django, backed by ACID PostgreSQL.",
            "Explain your role on tiesverse.com (server provisioning, production DB, fixing live Nginx route mappings) and the Webinar platform (relational schemas, registration APIs, live debugging).",
            "Highlight why separating static serving (Nginx) from Python execution (Gunicorn) matters under concurrent registration traffic."
          ],
          q: "Why do we need both Nginx and Gunicorn in front of Django? Can't Gunicorn face the internet directly?",
          a: "Gunicorn is a Python WSGI app server optimized for running Django workers, not handling slow client sockets, TLS termination, or static media; Nginx buffers slow connections, terminates SSL, serves static files rapidly, and proxies only clean dynamic requests to Gunicorn."
        },
        5: {
          bullets: [
            "Explain the security half first: your 18–23 June research showed traditional visual CAPTCHAs hurt registration conversion, leading to Cloudflare Turnstile.",
            "Walk through the 3-step server-side validation: client gets a Turnstile token, Django verifies it directly against Cloudflare's API, and bot payloads are dropped before touching PostgreSQL.",
            "Switch to the Technical SEO half: XML sitemaps, robots.txt, Schema.org JSON-LD, dynamic OpenGraph tags, compressed assets, and verified Google Search Console / Analytics tracking."
          ],
          q: "Why isn't client-side Turnstile verification alone enough to stop bots?",
          a: "An attacker can bypass the browser UI and POST directly to the registration endpoint; server-side token validation in Django guarantees every payload carries a fresh, single-use token verified by Cloudflare."
        },
        6: {
          bullets: [
            "Introduce Project 2—live at founder-web-tool.vercel.app—built during Week 1 (11–17 June) to help early-stage founders avoid over-engineering their initial stack.",
            "Highlight the key software engineering decision: decoupling the rule-based recommendation logic from the frontend UI so scoring rules can be validated and maintained independently.",
            "Live viva tip: click through the 3 interactive presets right on this slide ('Bootstrapped MVP', 'Seed SaaS', 'AI / Data-Heavy') to demonstrate how input constraints dynamically reshape the recommended architecture."
          ],
          q: "How does founder-web-tool.vercel.app separate recommendation rules from the UI, and why use rules instead of an LLM?",
          a: "The UI only collects validated constraints and renders the returned blueprint JSON, while a deterministic rule layer evaluates stage, budget, team size, and sector—giving instant, repeatable, zero-hallucination recommendations with zero per-query LLM API cost."
        },
        7: {
          bullets: [
            "Pivot to your flagship project: the Multi-Site Admin Portal built over two intensive weeks (9–23 July).",
            "Frame the dual business problem clearly: 4 separate admin panels caused operational fragmentation, while giving staff global Django admin access caused dangerous privilege creep.",
            "State the four architectural pillars: unified 4-site control, two-tier RBAC, data-layer ORM isolation, and centralized logging."
          ],
          q: "Why not just create four separate Django projects with four separate databases?",
          a: "Separate projects would multiply hosting overhead, duplicate user authentication and password management, and prevent leadership from getting a centralized operations overview and audit log."
        },
        8: {
          bullets: [
            "Walk vertically down the Figure 5.1 architecture diagram: Superusers and Scoped Staff enter through Cloudflare Edge and the Nginx/Gunicorn Linux host into the unified Django MVT portal.",
            "Trace the 6-stage request lifecycle on the right: Central Auth → Role ID → Site-Aware abstract base model → Query Interception → ModelAdmin Enforcement → Centralized Logging.",
            "Emphasize that every record in PostgreSQL/SQLite is tagged with its owning site_identifier."
          ],
          q: "What happens if a developer adds a new model to one of the four sites—how does it stay isolated?",
          a: "By inheriting from the abstract SiteAwareModel base class and registering it with SiteScopedAdmin, every new model automatically gets the indexed site_identifier column and scoped queryset manager."
        },
        9: {
          bullets: [
            "Contrast the two RBAC tiers cleanly: Superusers hold global governance across all 4 properties; Staff are restricted strictly to their assigned department and site_identifier.",
            "Live viva demo: click the three role tabs ('Superuser', 'Events Staff', 'Newsroom Staff') to show how the 5 portal modules switch between FULL ACCESS, SCOPED, and ISOLATED/HIDDEN.",
            "Point to the dark bar at the bottom showing the exact ORM/SQL WHERE clause enforced behind the scenes for each role."
          ],
          q: "Why is DB-layer ORM isolation better than simply hiding sidebar menu links in the frontend?",
          a: "Hiding UI links is security through obscurity—a staff user could still guess a URL or object ID and edit another department's record; filtering at the ORM queryset and object-permission layer blocks unauthorized reads and writes even on direct HTTP requests."
        },
        10: {
          bullets: [
            "Walk through the exact Appendix A Python/Django code snippet on the left—this is the heart of the portal's security.",
            "Point out db_index=True on site_identifier so multi-tenant WHERE filters remain fast as PostgreSQL tables grow.",
            "Explain all three overrides in SiteScopedAdmin: get_queryset() filters list views, has_module_permission() hides unauthorized apps, and has_change_permission() checks obj.site_identifier on single-object edits."
          ],
          q: "In has_change_permission, why did you add the `if obj is None` check before comparing `obj.site_identifier`?",
          a: "Django calls has_change_permission twice: first with obj=None to check general model-level permission when rendering admin menus/changelists, and again with the actual model instance when opening or saving a specific record."
        },
        11: {
          bullets: [
            "Walk the panel through the four operational views delivered in production (documented in Appendix D).",
            "Highlight how the dashboard unifies Applicants, Upcoming Events, Webinars, and Newsroom content alongside 7-day traffic insights and recent activity.",
            "Note that the portal went live on 22 July 2026 and was handed over with complete operating documentation and a user manual on 23 July."
          ],
          q: "Were the analytics metrics on Figure D.2 live telemetry or illustrative placeholders?",
          a: "Being transparent—as noted directly on the Analytics screen in Appendix D, those initial traffic widgets used illustrative data ready to be wired to live Plausible or Cloudflare Analytics APIs in the next phase."
        },
        12: {
          bullets: [
            "Summarize the complete 5-layer technology matrix across all three projects.",
            "Highlight how Python/Django and PostgreSQL formed the consistent backend backbone, while Nginx, Gunicorn, Let's Encrypt, Cloudflare, and Vercel handled production delivery and edge security.",
            "Point out the practical value of using SQLite locally for fast iteration and ACID-compliant PostgreSQL in production."
          ],
          q: "Why use PostgreSQL in production instead of sticking with Django's default SQLite?",
          a: "SQLite uses file-level write locking that bottlenecks under concurrent Gunicorn workers and simultaneous webinar registrations, whereas PostgreSQL provides true concurrent MVCC transactions, strict typing, and reliable indexing."
        },
        13: {
          bullets: [
            "Walk through the five concrete production challenges you encountered and how you systematically fixed each one.",
            "Emphasize Challenge 1 (Django default permission leakage) and Challenge 2 (bot spam on public Webinar forms) as high-impact security wins.",
            "Mention Challenge 3 (live Nginx/Gunicorn routing errors) as the moment that taught you the real difference between localhost and production ops."
          ],
          q: "How did you debug the hosting and route-mapping errors on tiesverse.com?",
          a: "By inspecting Nginx access/error logs and Gunicorn systemd logs side by side to isolate mismatched upstream socket paths, missing ALLOWED_HOSTS/env variables, and static-root alias directives."
        },
        14: {
          bullets: [
            "Share the verified outcomes: 49/50 score rated Outstanding by Tech Lead Mr. Ashutosh Patra, 5 completed deliverables, and 4 web properties unified.",
            "Connect technical growth (Django internals, ORM isolation, Linux DevOps, Edge WAF, SEO) with professional habits (daily diary discipline, security auditing, documentation).",
            "Quote the mentor's validation while acknowledging his constructive advice to expand large-scale architecture docs and explore multi-agent systems."
          ],
          q: "What single habit from this internship changed how you write code the most?",
          a: "Designing security and access boundaries into the database schema from day one—plus testing and documenting every deliverable before calling it done."
        },
        15: {
          bullets: [
            "Show engineering maturity by clearly stating the four current limitations of the portal: permanent access grants, manual log triage, unwired live analytics widgets, and reliance on periodic audits.",
            "Map each limitation directly to the 5-step future roadmap: AI-driven log triage, live telemetry widgets, time-bound RBAC expiry, multi-agent ops automation, and cloud scale docs."
          ],
          q: "How would you practically implement time-bound RBAC provisioning in Django?",
          a: "Add an `expires_at` DateTimeField to the staff role/site assignment table, check `expires_at > timezone.now()` inside our custom authentication/ModelAdmin guards, and run a periodic cleanup task to revoke expired tokens."
        },
        16: {
          bullets: [
            "Recap the three connected pillars one final time: live production backend & edge security, founder-web-tool.vercel.app, and the Multi-Site RBAC Admin Portal.",
            "Gesture to the technical references grounding all standards used during training.",
            "Thank Dr. Pawan Thakur, faculty evaluators, and Mr. Ashutosh Patra, and open the floor for questions."
          ],
          q: "Ready for open Q&A?",
          a: "Press 'G' to open the 16-slide overview grid and jump instantly to the architecture diagram (Slide 8), RBAC simulator (Slide 9), or Appendix A code (Slide 10)."
        }
      };

export const industrialTrainingDeck: DeckDefinition = {
  slug: "industrial-training",
  title: "Industrial Training Presentation (CSEE-713P)",
  subtitle: "Full Stack Development & AI Engineering · Tiesverse Foundation, Bhopal",
  description:
    "Comprehensive 6-week industrial training viva report by Satyam Sharma at Tiesverse Foundation. Features 3 production builds: Linux/Django production server pipeline, interactive Startup Tech Stack Recommender, and multi-tenant RBAC admin portal.",
  author: "Satyam Sharma",
  role: "B.Tech CSE, Sem-VII (Roll: 23010603066)",
  date: "10 Jun – 25 Jul 2026",
  tags: ["Full Stack", "AI Engineering", "Django", "Next.js", "Cloudflare", "RBAC", "PostgreSQL", "Industrial Training"],
  theme: {
    bg: "#F7F6F2",
    card: "#FFFFFF",
    cardBorder: "#DFDDD5",
    primary: "#C65D3B", // Copper
    secondary: "#2D5F53", // Pine
    accent: "#9A6B27", // Ochre
    text: "#1C1F1E", // Ink
    textMuted: "#5D6360", // Muted
  },
  slides: [
    {
      id: "slide-01",
      title: "Cover · Full Stack & AI Engineering",
      category: "Introduction",
      component: Slide01Cover,
      notes: vivaNotes[1]?.bullets || [],
      qa: vivaNotes[1]
        ? [
            {
              question: vivaNotes[1].q,
              answer: vivaNotes[1].a,
            },
          ]
        : [],
    },
    {
      id: "slide-02",
      title: "Organisation Profile & 6-Week Training Timeline",
      category: "Organisation",
      component: Slide02Timeline,
      notes: vivaNotes[2]?.bullets || [],
      qa: vivaNotes[2]
        ? [
            {
              question: vivaNotes[2].q,
              answer: vivaNotes[2].a,
            },
          ]
        : [],
    },
    {
      id: "slide-03",
      title: "Portfolio Overview: Three Core Engineering Projects",
      category: "Overview",
      component: Slide03Portfolio,
      notes: vivaNotes[3]?.bullets || [],
      qa: vivaNotes[3]
        ? [
            {
              question: vivaNotes[3].q,
              answer: vivaNotes[3].a,
            },
          ]
        : [],
    },
    {
      id: "slide-04",
      title: "Original tiesverse.com & Webinar Platform Backend",
      category: "Project 01",
      component: Slide04TiesverseBackend,
      notes: vivaNotes[4]?.bullets || [],
      qa: vivaNotes[4]
        ? [
            {
              question: vivaNotes[4].q,
              answer: vivaNotes[4].a,
            },
          ]
        : [],
    },
    {
      id: "slide-05",
      title: "Edge Security (Cloudflare) & Technical SEO Stack",
      category: "Project 01",
      component: Slide05EdgeSecuritySeo,
      notes: vivaNotes[5]?.bullets || [],
      qa: vivaNotes[5]
        ? [
            {
              question: vivaNotes[5].q,
              answer: vivaNotes[5].a,
            },
          ]
        : [],
    },
    {
      id: "slide-06",
      title: "Startup Tech Stack Recommender",
      category: "Project 02",
      component: Slide06FounderTool,
      notes: vivaNotes[6]?.bullets || [],
      qa: vivaNotes[6]
        ? [
            {
              question: vivaNotes[6].q,
              answer: vivaNotes[6].a,
            },
          ]
        : [],
    },
    {
      id: "slide-07",
      title: "Multi-Site Admin Portal: Problem & Design Objectives",
      category: "Project 03",
      component: Slide07PortalProblem,
      notes: vivaNotes[7]?.bullets || [],
      qa: vivaNotes[7]
        ? [
            {
              question: vivaNotes[7].q,
              answer: vivaNotes[7].a,
            },
          ]
        : [],
    },
    {
      id: "slide-08",
      title: "Multi-Site Admin Portal: Architecture & 6-Stage Flow",
      category: "Project 03",
      component: Slide08PortalArchitecture,
      notes: vivaNotes[8]?.bullets || [],
      qa: vivaNotes[8]
        ? [
            {
              question: vivaNotes[8].q,
              answer: vivaNotes[8].a,
            },
          ]
        : [],
    },
    {
      id: "slide-09",
      title: "Two-Tier RBAC & Interactive Access Scope Explorer",
      category: "Project 03",
      component: Slide09RbacScopeExplorer,
      notes: vivaNotes[9]?.bullets || [],
      qa: vivaNotes[9]
        ? [
            {
              question: vivaNotes[9].q,
              answer: vivaNotes[9].a,
            },
          ]
        : [],
    },
    {
      id: "slide-10",
      title: "Site-Aware ORM & Permission Enforcement in Django",
      category: "Project 03",
      component: Slide10OrmCode,
      notes: vivaNotes[10]?.bullets || [],
      qa: vivaNotes[10]
        ? [
            {
              question: vivaNotes[10].q,
              answer: vivaNotes[10].a,
            },
          ]
        : [],
    },
    {
      id: "slide-11",
      title: "Multi-Site Portal Modules & Operational Views",
      category: "Project 03",
      component: Slide11PortalModules,
      notes: vivaNotes[11]?.bullets || [],
      qa: vivaNotes[11]
        ? [
            {
              question: vivaNotes[11].q,
              answer: vivaNotes[11].a,
            },
          ]
        : [],
    },
    {
      id: "slide-12",
      title: "Full-Stack Technology & Platform Matrix",
      category: "Architecture",
      component: Slide12TechMatrix,
      notes: vivaNotes[12]?.bullets || [],
      qa: vivaNotes[12]
        ? [
            {
              question: vivaNotes[12].q,
              answer: vivaNotes[12].a,
            },
          ]
        : [],
    },
    {
      id: "slide-13",
      title: "Production Challenges & Engineering Resolutions",
      category: "Troubleshooting",
      component: Slide13Challenges,
      notes: vivaNotes[13]?.bullets || [],
      qa: vivaNotes[13]
        ? [
            {
              question: vivaNotes[13].q,
              answer: vivaNotes[13].a,
            },
          ]
        : [],
    },
    {
      id: "slide-14",
      title: "Internship Outcomes, Learning & Performance Evaluation",
      category: "Evaluation",
      component: Slide14Outcomes,
      notes: vivaNotes[14]?.bullets || [],
      qa: vivaNotes[14]
        ? [
            {
              question: vivaNotes[14].q,
              answer: vivaNotes[14].a,
            },
          ]
        : [],
    },
    {
      id: "slide-15",
      title: "Current Limitations & Future Engineering Roadmap",
      category: "Roadmap",
      component: Slide15Limitations,
      notes: vivaNotes[15]?.bullets || [],
      qa: vivaNotes[15]
        ? [
            {
              question: vivaNotes[15].q,
              answer: vivaNotes[15].a,
            },
          ]
        : [],
    },
    {
      id: "slide-16",
      title: "Thank You · Questions & Discussion",
      category: "Conclusion",
      component: Slide16Conclusion,
      notes: vivaNotes[16]?.bullets || [],
      qa: vivaNotes[16]
        ? [
            {
              question: vivaNotes[16].q,
              answer: vivaNotes[16].a,
            },
          ]
        : [],
    },
  ],
};

export default industrialTrainingDeck;
