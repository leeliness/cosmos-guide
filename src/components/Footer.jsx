import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border/50 flex flex-wrap justify-between items-center gap-4">
      <div className="text-left">
        <p className="text-sm font-semibold text-foreground">
          <span className="text-primary">✦</span> Cosmos Guide
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          &copy; {new Date().getFullYear()} — Made with stardust & curiosity
        </p>
      </div>
      <a
        href="#hero"
        className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
};