import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Danny Dal Cortivo | danny.vfx" },
      {
        name: "description",
        content:
          "Chi è Danny Dal Cortivo (danny.vfx): videomaker e storyteller indipendente tra Varese e Milano. Background, attrezzatura, approccio.",
      },
      { property: "og:title", content: "About — Danny Dal Cortivo" },
      {
        property: "og:description",
        content:
          "Videomaker e storyteller indipendente tra Varese e Milano.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    n: "01",
    title: "Storytelling first",
    desc: "Prima della tecnica viene la storia. Se non hai qualcosa da raccontare, le inquadratura migliori del mondo non bastano.",
  },
  {
    n: "02",
    title: "Una sola voce",
    desc: "Riprese, montaggio, color e sound design li seguo io: la coerenza visiva nasce quando il progetto attraversa una sola testa.",
  },
  {
    n: "03",
    title: "Cura del frame",
    desc: "Ogni inquadratura è una decisione. Niente è casuale: la luce, la lente, il movimento, il ritmo.",
  },
];

function AboutPage() {
  return (
    <div className="relative">
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-32 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            About / danny.vfx
          </p>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.9] tracking-tight">
            Racconto storie
            <br />
            <span className="text-grad italic">attraverso</span>
            <br />
            l'immagine.
          </h1>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-24 md:mt-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Bio
          </p>
          <p className="font-display text-3xl tracking-tight">
            Danny Dal Cortivo
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-2">
            Videomaker · Varese / Milano
          </p>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            Sono un videomaker indipendente. Lavoro tra <span className="text-foreground">Varese</span> e
            <span className="text-foreground"> Milano</span>, su progetti che vanno dal
            music video al contenuto long-form per YouTube, fino ai social e
            ai progetti personali.
          </p>
          <p>
            Mi piace pensare al video come a un piccolo film, anche quando
            dura due minuti: la stessa attenzione a inquadratura, ritmo e
            colore, indipendentemente dal formato.
          </p>
          <p>
            Per ogni progetto curo riprese, montaggio e color — perché la
            coerenza visiva nasce quando una sola voce attraversa l'intero
            processo.
          </p>
        </div>
      </section>

      {/* Principi */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-24 md:mt-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
          Come lavoro
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {principles.map((p) => (
            <div
              key={p.n}
              className="bg-background p-8 md:p-10 hover:bg-surface transition-colors"
            >
              <p className="font-mono text-sm text-primary mb-4">{p.n}</p>
              <h3 className="font-display text-3xl tracking-tight mb-4">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gear */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-24 md:mt-32 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Setup
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Strumenti del mestiere.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 grid sm:grid-cols-2 gap-6">
          {[
            { k: "Camera", v: "Mirrorless full-frame · iPhone 17 Pro Max" },
            { k: "Stabilizzazione", v: "Gimbal & shoulder rig" },
            { k: "Lighting", v: "Set lighting LED" },
            { k: "Audio", v: "Lavalier & shotgun" },
            { k: "Post", v: "Premiere Pro · AI Tools" },
            { k: "VFX / Motion", v: "After Effects" },
          ].map((g) => (
            <div key={g.k} className="border-t border-border pt-4">
              <p className="font-mono text-xs text-muted-foreground">{g.k}</p>
              <p className="mt-1">{g.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-24">
        <Link
          to="/contact"
          className="block text-center font-display text-5xl md:text-8xl tracking-tight hover:text-grad transition-colors py-12"
        >
          Lavoriamo insieme →
        </Link>
      </section>
    </div>
  );
}
