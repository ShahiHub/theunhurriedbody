import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#expert", label: "Expert in sitting" },
  { href: "#relations", label: "5 relations" },
  { href: "#emotions", label: "Emotions" },
  { href: "#about", label: "About" },
  { href: "#sessions", label: "Sessions" },
  { href: "#story", label: "Your story" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2",
        "max-w-[min(1120px,98vw)]",
        isScrolled && "bg-background/80 backdrop-blur-sm rounded-full border border-border/30"
      )}
    >
      <div className="flex gap-6 text-xs tracking-[0.14em] uppercase overflow-x-auto whitespace-nowrap px-5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-soft relative pb-0.5 hover:text-foreground transition-colors group"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-px rounded-full gradient-border transition-all duration-200 group-hover:w-full" />
          </a>
        ))}
      </div>
    </nav>
  );
}
