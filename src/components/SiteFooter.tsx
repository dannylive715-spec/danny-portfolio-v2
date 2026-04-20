import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Let's create
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Hai un'idea?
              <br />
              <span className="text-grad italic">Parliamone.</span>
            </h2>
            <a
              href="mailto:gazellevisual@gmail.com"
              className="inline-flex items-center gap-3 mt-8 text-lg group"
            >
              <span className="border-b border-foreground/40 group-hover:border-primary transition-colors">
                gazellevisual@gmail.com
              </span>
              <span className="w-8 h-px bg-foreground/40 group-hover:bg-primary group-hover:w-12 transition-all" />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              <li><Link to="/work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Social
            </p>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com/@dannyvfx" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 font-mono text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Danny Dal Cortivo — danny.vfx</p>
          <p>Based in Varese · Milano · Working worldwide</p>
        </div>
      </div>
    </footer>
  );
}
