import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
  size = "md",
}: {
  project: Project;
  index: number;
  size?: "sm" | "md" | "lg";
}) {
  const aspect =
    size === "lg" ? "aspect-[16/10]" : size === "sm" ? "aspect-[4/5]" : "aspect-[4/3]";

  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div
        className={`relative overflow-hidden rounded-md bg-surface ${aspect}`}
      >
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur-md border border-primary/40 flex items-center justify-center shadow-glow">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-primary ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-foreground/70">
          {String(index + 1).padStart(2, "0")} / {project.category.toUpperCase()}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {project.client} — {project.year}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-foreground group-hover:stroke-primary" fill="none" strokeWidth="1.5">
                <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
