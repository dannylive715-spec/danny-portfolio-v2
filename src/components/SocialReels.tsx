import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

// Reel per sezione ATTIVITÀ
const attivitaReels = [
  {
    id: 1,
    videoUrl: "/videos/reels/reel-1.mp4",
    title: "Behind the Scenes",
    platform: "Instagram",
    duration: "0:15",
    views: "12.3K"
  },
  {
    id: 2,
    videoUrl: "/videos/reels/reel-2.mp4",
    title: "Color Grading Process",
    platform: "TikTok",
    duration: "0:30",
    views: "45.7K"
  },
  {
    id: 3,
    videoUrl: "/videos/reels/reel-3.mp4",
    title: "Music Video Teaser",
    platform: "YouTube Shorts",
    duration: "0:20",
    views: "28.9K"
  },
  {
    id: 4,
    videoUrl: "/videos/reels/reel-4.mp4",
    title: "Setup Tour",
    platform: "Instagram",
    duration: "0:45",
    views: "67.2K"
  }
];

// Reel per sezione PERSONAL BRAND (amico)
const personalBrandReels = [
  {
    id: 5,
    videoUrl: "/videos/reels/personal-brand-1.mp4",
    title: "Personal Brand Reel",
    platform: "Instagram",
    duration: "0:25",
    views: "8.5K"
  }
];

// Componente helper per singolo reel
function ReelCard({ reel, showInfo = true }: { reel: any; showInfo?: boolean }) {
  const [hoveredReel, setHoveredReel] = useState<number | null>(null);

  const getPlatformDisplay = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'Instagram';
      case 'tiktok': return 'TikTok';
      case 'youtube': return 'YouTube Shorts';
      case 'twitter': return 'Twitter';
      default: return platform;
    }
  };

  return (
    <div
      key={reel.id}
      className="group relative aspect-[9/16] rounded-lg overflow-hidden bg-surface border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHoveredReel(reel.id)}
      onMouseLeave={() => setHoveredReel(null)}
      onClick={() => {
        // Apre il video in una nuova finestra
        window.open(reel.videoUrl, '_blank');
      }}
    >
      {/* Video preview frame */}
      <video
        src={reel.videoUrl}
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onMouseEnter={(e) => {
          const video = e.currentTarget;
          video.currentTime = 0.5;
          video.play();
        }}
        onMouseLeave={(e) => {
          const video = e.currentTarget;
          video.pause();
          video.currentTime = 0;
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Play className="w-6 h-6 text-black fill-black ml-1" />
        </div>
      </div>

      {showInfo && (
        <>
          {/* Content info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="font-medium text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                  {reel.title}
                </p>
                <p className="text-xs opacity-80">
                  {getPlatformDisplay(reel.platform)} · {reel.duration}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium">{reel.views}</p>
                <p className="text-xs opacity-80">views</p>
              </div>
            </div>
          </div>

          {/* Platform badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white font-medium">
              {getPlatformDisplay(reel.platform)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export function SocialReels() {
  return (
    <div className="relative">
      {/* SEZIONE ATTIVITÀ */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Social Content
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              Attività
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{attivitaReels.length} reels</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {attivitaReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} showInfo={false} />
          ))}
        </div>
      </section>

      {/* SEZIONE PERSONAL BRAND */}
      <section className="relative max-w-[1600px] mx-auto px-6 md:px-10 mt-32 md:mt-40">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Client Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight">
              Personal Brand
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{personalBrandReels.length} reel</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {personalBrandReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} showInfo={true} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>View all social content</span>
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
