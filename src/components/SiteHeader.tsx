import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links: { to: "/" | "/work" | "/services" | "/about" | "/contact"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Index", exact: true },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-violet-grad blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full rounded-full bg-violet-grad" />
          </div>
          <span className="font-display text-xl tracking-tight">
            danny<span className="text-primary">.vfx</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative px-4 py-2 text-sm tracking-wide hover:text-foreground transition-colors"
            >
              <span className="font-mono text-[10px] mr-2 opacity-60">
                0{i + 1}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Disponibile
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menu"
        >
          <div className="w-6 h-px bg-foreground mb-1.5" />
          <div className="w-6 h-px bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.exact }}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-tight"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
