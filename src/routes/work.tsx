import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialReels } from "@/components/SocialReels";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — danny.vfx | Danny Dal Cortivo" },
      {
        name: "description",
        content:
          "Tutti i progetti video di Danny Dal Cortivo: music video, contenuti YouTube, social e progetti personali.",
      },
      { property: "og:title", content: "Work — danny.vfx" },
      {
        property: "og:description",
        content: "L'archivio dei progetti video.",
      },
    ],
  }),
  component: WorkPage,
});

const categories = [
  "All",
  "Music Video",
  "Entertainment",
  "Social",
  "Short Film",
  "Commercial",
] as const;

function WorkPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="relative">
      {/* Header */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Archivio · {projects.length} progetti
        </p>
        <h1 className="font-display text-7xl md:text-[10rem] leading-[0.9] tracking-tight">
          The <span className="text-grad italic">work</span>.
        </h1>
        <p className="max-w-2xl mt-8 text-lg text-muted-foreground leading-relaxed">
          Una selezione di progetti recenti — ogni pezzo è il risultato di
          settimane di pre-produzione, riprese e post.
        </p>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-background/80 backdrop-blur-xl border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-4 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`shrink-0 px-4 py-2 rounded-full border text-sm transition-all ${
                filter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {filtered.map((p, i) => (
            <div
              key={p.slug}
              className={i % 3 === 1 ? "md:mt-16" : ""}
            >
              <ProjectCard project={p} index={i} size="md" />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            Nessun progetto in questa categoria.
          </p>
        )}
      </section>

      {/* Social Reels Section */}
      <SocialReels />
    </div>
  );
}
