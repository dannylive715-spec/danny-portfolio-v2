import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialReels } from "@/components/SocialReels";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { 
        title: "Danny Dal Cortivo | Videomaker & Storyteller | Music Video & Content Creator" 
      },
      {
        name: "description",
        content: "Danny Dal Cortivo - Videomaker specializzato in music video, brand content e storytelling visivo. Servizi di regia, montaggio e post-produzione per YouTube, Instagram e progetti personali. Basato tra Varese e Milano.",
      },
      { property: "og:title", content: "Danny Dal Cortivo | Videomaker & Storyteller" },
      {
        property: "og:description",
        content: "Creo contenuti video che raccontano storie memorabili. Music video, brand content, YouTube e progetti personali.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://i.ytimg.com/vi/_1UnpSTfaps/maxresdefault.jpg" },
      { property: "og:url", content: "https://danny.vfx" },
      { name: "keywords", content: "videomaker, music video, content creator, storytelling, YouTube, Instagram, regia video, montaggio video, post-produzione, Varese, Milano, Danny Dal Cortivo" },
      { name: "author", content: "Danny Dal Cortivo" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "it" },
      { name: "geo.region", content: "IT-25" },
      { name: "geo.placename", content: "Varese" },
      { name: "geo.position", content: "45.808;8.852" },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Music Videos",
  "YouTube",
  "Storytelling",
  "Social Content",
  "Editing",
  "Color Grading",
  "Motion",
];

function HomePage() {
  const featured = projects;
  // Use the most cinematic/long-form piece as the showreel
  const showreel = projects[0];

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-hero-grad noise">
        {/* Floating violet orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] float-slow" />
        <div
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[140px] float-slow"
          style={{ animationDelay: "-3s" }}
        />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20 z-10">
          <div className="flex items-center gap-3 mb-8 reveal-up">
            <span className="w-12 h-px bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Videomaker · Storyteller — Varese / Milano
            </span>
          </div>

          <h1
            className="font-display text-[14vw] md:text-[9vw] leading-[0.9] tracking-tight reveal-up"
            style={{ animationDelay: "0.1s" }}
          >
            Racconto storie
            <br />
            <span className="text-grad italic">attraverso</span>
            <br />
            l'immagine<span className="text-primary">.</span>
          </h1>

          <div
            className="mt-12 grid md:grid-cols-12 gap-6 items-end reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="md:col-span-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sono <span className="text-foreground">Danny Dal Cortivo</span>,
              videomaker specializzato in storytelling visivo. Dalla regia alla post-produzione,
              trasformo idee in contenuti che catturano l'attenzione - music video,
              brand content e progetti personali che raccontano storie memorabili.
            </p>
            <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center justify-between gap-4 rounded-full bg-violet-grad px-6 py-4 text-sm font-medium text-primary-foreground shadow-glow"
              >
                <span>Guarda i progetti</span>
                <span className="w-8 h-px bg-primary-foreground group-hover:w-12 transition-all" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-between gap-4 rounded-full border border-border px-6 py-4 text-sm font-medium hover:border-primary transition-colors"
              >
                <span>Lavoriamo insieme</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 -mt-16 md:-mt-24 z-20">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-surface shadow-glow border border-border">
          <iframe
            src={showreel.embedUrl}
            title={showreel.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="flex justify-between mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>FEATURED · {showreel.category.toUpperCase()}</span>
          <span>{showreel.title.toUpperCase().slice(0, 40)}</span>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative mt-32 md:mt-40 py-8 border-y border-border overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center font-display text-4xl md:text-6xl tracking-tight px-8 text-foreground/80"
            >
              {item}
              <span className="mx-8 text-primary">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Selected work
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              Recent work
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden md:inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            Vedi tutti i progetti
            <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {featured.map((p, i) => (
            <div key={p.slug} className={i === 1 ? "md:mt-16" : ""}>
              <ProjectCard project={p} index={i} size="md" />
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground font-mono">
          Altri progetti (social, personali, behind the scenes) in arrivo.
        </p>
      </section>

      {/* SOCIAL REELS */}
      <SocialReels />

      {/* APPROACH */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Ogni inquadratura è una storia.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              Per me un video funziona quando, anche senza audio, riesce a
              raccontare qualcosa. Lavoro per immagini che restino in testa
              dopo lo scroll.
            </p>
            <p>
              Seguo il progetto end-to-end — riprese, montaggio, color e suono
              — perché la coerenza visiva nasce quando una sola voce attraversa
              tutto il processo.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <span className="border-b border-foreground/40">Conosci di più</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
