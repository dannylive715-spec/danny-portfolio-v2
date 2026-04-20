import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";
import { VideoPlayer } from "@/components/VideoPlayer";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Lumen` },
          { name: "description", content: loaderData.project.description },
          {
            property: "og:title",
            content: `${loaderData.project.title} — Lumen`,
          },
          {
            property: "og:description",
            content: loaderData.project.description,
          },
          { property: "og:image", content: loaderData.project.cover },
          { name: "twitter:image", content: loaderData.project.cover },
        ]
      : [],
  }),
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl mb-4">Progetto non trovato</h1>
        <Link to="/work" className="text-primary hover:underline">
          ← Torna ai progetti
        </Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: (typeof projects)[number] };

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-12 md:pt-20">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary mb-12 transition-colors"
        >
          ← All work
        </Link>

        <div className="grid md:grid-cols-12 gap-6 mb-12 items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              {project.category} · {project.year}
            </p>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Client
            </p>
            <p className="font-display text-2xl mt-1">{project.client}</p>
          </div>
        </div>

        <VideoPlayer project={project} />

        {project.externalUrl && (
          <div className="mt-4 flex justify-end">
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              Watch on YouTube ↗
            </a>
          </div>
        )}
      </section>

      {/* Body */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-20 md:mt-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            About the project
          </p>
          <p className="font-display text-3xl md:text-4xl leading-[1.2] tracking-tight">
            {project.description}
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-9 space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Role
            </p>
            <ul className="space-y-1">
              {project.role.map((r) => (
                <li key={r} className="text-lg">{r}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Credits
            </p>
            <dl className="space-y-3">
              {project.credits.map((c) => (
                <div key={c.label} className="flex justify-between border-b border-border pb-2">
                  <dt className="text-muted-foreground text-sm">{c.label}</dt>
                  <dd className="text-sm">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-32 md:mt-48">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group block relative aspect-[21/9] rounded-lg overflow-hidden bg-surface"
        >
          <img
            src={next.cover}
            alt={next.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Next project →
            </p>
            <h2 className="font-display text-5xl md:text-8xl tracking-tight">
              {next.title}
            </h2>
          </div>
        </Link>
      </section>
    </div>
  );
}
