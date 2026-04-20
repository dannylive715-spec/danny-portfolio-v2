export type Project = {
  slug: string;
  title: string;
  client: string;
  category:
    | "Music Video"
    | "Commercial"
    | "Short Film"
    | "Documentary"
    | "Fashion"
    | "Entertainment"
    | "Social";
  year: number;
  cover: string;
  // Optional: external embed (YouTube/Vimeo). If absent, uses cover image only.
  embedUrl?: string;
  // Optional: external link to watch on the original platform
  externalUrl?: string;
  // Optional: local mp4 file in /public/videos
  videoUrl?: string;
  description: string;
  role: string[];
  credits: { label: string; value: string }[];
  comingSoon?: boolean;
};

export const projects: Project[] = [
  {
    slug: "stanza-segreta",
    title: "Costruisco una stanza segreta sotto casa",
    client: "danny.vfx",
    category: "Entertainment",
    year: 2026,
    cover: "https://i.ytimg.com/vi/_1UnpSTfaps/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/_1UnpSTfaps",
    externalUrl: "https://www.youtube.com/watch?v=_1UnpSTfaps",
    description:
      "Video YouTube long-form: la costruzione di una stanza segreta sotto casa, raccontata come un piccolo film. Riprese, montaggio e narrazione gestiti in solitaria.",
    role: ["Director", "DOP", "Editor", "Storyteller"],
    credits: [
      { label: "Anno", value: "2026" },
      { label: "Durata", value: "10:40" },
      { label: "Piattaforma", value: "YouTube" },
      { label: "Format", value: "16:9 · Long-form" },
    ],
  },
  {
    slug: "connected-with-you-lobojr",
    title: "Connected With You",
    client: "Lobojr",
    category: "Music Video",
    year: 2026,
    cover: "https://i.ytimg.com/vi/la3rsL40auE/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/la3rsL40auE",
    externalUrl: "https://www.youtube.com/watch?v=la3rsL40auE",
    description:
      "Music video per Lobojr — Connected With You. Direzione visiva, riprese e montaggio sincronizzati al ritmo del brano.",
    role: ["Director", "DOP", "Editor"],
    credits: [
      { label: "Anno", value: "2026" },
      { label: "Artista", value: "Lobojr" },
      { label: "Durata", value: "2:10" },
      { label: "Piattaforma", value: "YouTube" },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
