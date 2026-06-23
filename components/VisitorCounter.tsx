"use client";

export default function VisitorCounter() {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
      
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center gap-4">
        
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
          👁
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
            Portfolio Views
          </p>

          <div className="mt-1">
            <img
              src="https://api.visitorbadge.io/api/visitors?path=gowtham-portfolio"
              alt="Portfolio Views"
              className="h-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}