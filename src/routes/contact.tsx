import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — danny.vfx | Danny Dal Cortivo" },
      {
        name: "description",
        content:
          "Contatta Danny Dal Cortivo (danny.vfx) per il tuo prossimo progetto video. Music video, contenuti YouTube, social. Risposta entro 24h.",
      },
      { property: "og:title", content: "Contact — danny.vfx" },
      {
        property: "og:description",
        content: "Parliamo del tuo prossimo progetto video.",
      },
    ],
  }),
  component: ContactPage,
});

const projectTypes = [
  "Music Video",
  "YouTube",
  "Social",
  "Short Film",
  "Commercial",
  "Altro",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<string>("Music Video");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative">
      <section className="max-w-[1600px] mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Contatto · Risposta entro 24h
        </p>
        <h1 className="font-display text-7xl md:text-[10rem] leading-[0.9] tracking-tight">
          Get in <span className="text-grad italic">touch</span>.
        </h1>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 mt-12">
        {/* Sidebar info */}
        <aside className="md:col-span-4 space-y-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Email
            </p>
            <a
              href="mailto:gazellevisual@gmail.com"
              className="text-2xl hover:text-primary transition-colors break-all"
            >
              gazellevisual@gmail.com
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              WhatsApp
            </p>
            <a
              href="https://wa.me/3780927725"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-2xl hover:text-primary transition-colors"
            >
              +378 092 7725
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Base
            </p>
            <p className="text-lg">
              Varese — Milano<br />
              Italy
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Social
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.instagram.com/dannyy.visual?igsh=Nm83a2YycDloZjVu&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm"
              >
                Instagram
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm"
              >
                YouTube
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm"
              >
                TikTok
              </a>
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="md:col-span-7 md:col-start-6">
          {submitted ? (
            <div className="rounded-lg border border-primary/40 bg-violet-glow/10 p-12 text-center shadow-glow">
              <div className="w-16 h-16 mx-auto rounded-full bg-violet-grad flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-primary-foreground" fill="none" strokeWidth="2.5">
                  <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-display text-4xl tracking-tight">Grazie.</h2>
              <p className="text-muted-foreground mt-3">
                Ho ricevuto il messaggio. Ti rispondo entro 24 ore.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-primary hover:underline"
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Tipo di progetto
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setType(t)}
                      className={`px-4 py-2 rounded-full border text-sm transition-all ${
                        type === t
                          ? "bg-foreground text-background border-foreground"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Nome" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>

              <Field label="Brand / Azienda" name="company" />
              <Field label="Budget orientativo" name="budget" placeholder="€5k – €15k" />

              <div>
                <label className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Raccontami il progetto
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg resize-none transition-colors"
                  placeholder="Idea, riferimenti, deadline..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-violet-grad px-8 py-4 font-medium text-primary-foreground shadow-glow"
              >
                Invia messaggio
                <span className="w-8 h-px bg-primary-foreground group-hover:w-12 transition-all" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg transition-colors"
      />
    </div>
  );
}
