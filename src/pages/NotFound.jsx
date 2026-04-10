import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      <div className="absolute w-64 h-64 rounded-full border border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-96 h-96 rounded-full border border-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="text-center z-10 space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/70 font-medium">
          — Lost in Space —
        </p>
        <h1 className="text-[120px] md:text-[160px] font-bold leading-none text-gradient opacity-20 select-none">
          404
        </h1>
        <div className="-mt-8 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
            Looks like this page drifted too far into deep space. 
            It's out there somewhere, but we can't reach it.
          </p>
        </div>

        <a
          href="/"
          className="cosmic-button inline-flex items-center gap-2 mt-4"
        >
          <ArrowLeft size={16} />
          Back to Earth
        </a>
      </div>
    </div>
  );
};