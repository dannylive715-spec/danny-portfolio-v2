import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-grad px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[10rem] leading-none text-grad">404</h1>
        <h2 className="mt-4 font-display text-3xl">Frame non trovato</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Questa pagina non è stata girata. Torna in studio.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            ← Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "danny.vfx — Danny Dal Cortivo | Videomaker & Storyteller" },
      {
        name: "description",
        content:
          "danny.vfx — Danny Dal Cortivo. Racconto storie attraverso l'immagine. Videomaker tra Varese e Milano: music video, contenuti YouTube, social e progetti personali.",
      },
      { name: "author", content: "Danny Dal Cortivo" },
      { property: "og:title", content: "danny.vfx — Danny Dal Cortivo | Videomaker & Storyteller" },
      {
        property: "og:description",
        content:
          "Racconto storie attraverso l'immagine. Music video, YouTube e progetti personali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "danny.vfx — Danny Dal Cortivo | Videomaker & Storyteller" },
      { name: "description", content: "My Video Showcase is a portfolio app for video editors and makers to display their work." },
      { property: "og:description", content: "My Video Showcase is a portfolio app for video editors and makers to display their work." },
      { name: "twitter:description", content: "My Video Showcase is a portfolio app for video editors and makers to display their work." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/999345cf-e9ff-4d9a-a66f-b17bb1964a37/id-preview-77f76c9b--8627ec2e-0896-48c1-ae38-69010976425f.lovable.app-1776691868876.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/999345cf-e9ff-4d9a-a66f-b17bb1964a37/id-preview-77f76c9b--8627ec2e-0896-48c1-ae38-69010976425f.lovable.app-1776691868876.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="grain-fixed">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
