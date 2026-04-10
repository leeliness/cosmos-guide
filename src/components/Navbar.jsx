import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Discoveries", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold flex items-center gap-1" href="#hero">
          <span className="text-primary">✦</span>
          <span className="text-glow text-foreground font-semibold"> Cosmos</span>
          <span className="text-muted-foreground font-light text-base ml-1">Guide</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm tracking-wide"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-primary" />
            ) : (
              <Moon className="h-4 w-4 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-primary" />
            ) : (
              <Moon className="h-4 w-4 text-primary" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/97 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};