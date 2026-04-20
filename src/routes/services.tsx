import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lumen | Direzione, Riprese, Editing, Color" },
      {
        name: "description",
        content:
          "Servizi video offerti da Lumen: direzione creativa, DOP, montaggio, color grading, motion design e produzione completa.",
      },
      { property: "og:title", content: "Services — Lumen" },
      {
        property: "og:description",
        content: "Cosa posso fare per il tuo prossimo progetto video.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Direzione",
    desc: "Dalla scrittura del concept allo storyboard, alla regia sul set. Costruisco il linguaggio del progetto insieme al cliente.",
    deliverables: ["Concept & treatment", "Storyboard", "Casting", "Regia sul set"],
  },
  {
    n: "02",
    title: "Riprese / DOP",
    desc: "Direttore della fotografia con set leggero o troupe completa. Scelta lente, luce, schema cromatico.",
    deliverables: ["Sony FX3 / FX6", "Set lighting", "Anamorphic optics", "Gimbal & jib"],
  },
  {
    n: "03",
    title: "Editing",
    desc: "Montaggio narrativo che rispetta il ritmo del soggetto. Davinci Resolve / Premiere Pro.",
    deliverables: ["Rough cut", "Fine cut", "Sound design", "Master delivery"],
  },
  {
    n: "04",
    title: "Color Grading",
    desc: "Color professionale in DaVinci Resolve. Look cinematografico, LUT custom, finishing in HDR.",
    deliverables: ["Primary & secondary", "LUT custom", "HDR / SDR", "Beauty pass"],
  },
  {
    n: "05",
    title: "Motion Design",
    desc: "Lower third, kinetic typography, transizioni e elementi grafici animati per il tuo video.",
    deliverables: ["After Effects", "Lower third", "Kinetic type", "Logo animation"],
  },
  {
    n: "06",
    title: "Full Production",
    desc: "Ti seguo dall'idea alla consegna finale, gestendo tutto: pre-produzione, riprese, post.",
    deliverables: ["Project management", "Crew booking", "Location scouting", "Final delivery"],
  },
];

function ServicesPage() {
  return (
    <div className="relative">
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Cosa offro
        </p>
        <h1 className="font-display text-7xl md:text-[10rem] leading-[0.9] tracking-tight">
          Services<span className="text-primary">.</span>
        </h1>
        <p className="max-w-2xl mt-8 text-lg text-muted-foreground leading-relaxed">
          Sei servizi, una sola voce visiva. Posso prendermi un singolo
          tassello del tuo progetto o seguire l'intera produzione end-to-end.
        </p>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="border-t border-border">
          {services.map((s) => (
            <div
              key={s.n}
              className="group grid md:grid-cols-12 gap-6 py-10 md:py-16 border-b border-border hover:bg-surface/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <div className="md:col-span-1 font-mono text-sm text-primary">
                {s.n}
              </div>
              <div className="md:col-span-4">
                <h2 className="font-display text-4xl md:text-6xl tracking-tight group-hover:text-grad transition-all">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-4 text-muted-foreground leading-relaxed">
                {s.desc}
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                {s.deliverables.map((d) => (
                  <span
                    key={d}
                    className="text-xs px-3 py-1 rounded-full border border-border bg-surface"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-10 mt-24 md:mt-32">
        <div className="relative rounded-2xl overflow-hidden bg-violet-grad p-10 md:p-20 text-center shadow-glow">
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground tracking-tight">
            Pronto a iniziare?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Scrivimi quattro righe sul tuo progetto, ti rispondo entro 24 ore con
            una prima idea.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-8 rounded-full bg-background text-foreground px-8 py-4 font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            Richiedi un preventivo
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
