import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-4">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Presentation Deck Not Found</h2>
      <p className="text-sm text-slate-400 max-w-md mb-6">
        The requested presentation slug does not exist in the registry or may have been renamed.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Presentation Hub</span>
      </Link>
    </div>
  );
}
