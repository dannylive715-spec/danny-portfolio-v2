import type { Project } from "@/data/projects";

export function VideoPlayer({ project }: { project: Project }) {
  if (project.embedUrl) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-surface shadow-glow">
        <iframe
          src={project.embedUrl}
          title={project.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  if (project.videoUrl) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden bg-surface shadow-glow">
        <video
          src={project.videoUrl}
          poster={project.cover}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  // Fallback: just the cover image
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-surface shadow-glow">
      <img
        src={project.cover}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
