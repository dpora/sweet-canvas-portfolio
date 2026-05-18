import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, Send } from "lucide-react";
import headshotImg from "@/assets/headshot.jpg";
import { projects, type Project } from "@/components/portfolio/projects";
import { ProjectDialog } from "@/components/portfolio/ProjectDialog";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Élise Moreau — Pastry Chef Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Élise Moreau, pastry chef. Plated desserts, viennoiserie, and celebration cakes.",
      },
    ],
  }),
});

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="h-screen w-screen overflow-hidden bg-secondary text-foreground p-3 md:p-4 flex flex-col">
      <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-3 md:gap-4 min-h-0">
        {/* Profile card */}
        <section className="col-span-12 md:col-span-3 row-span-2 md:row-span-3 bg-background rounded-2xl p-4 md:p-5 flex flex-col gap-3 shadow-sm">
          <div className="flex-1 min-h-0 overflow-hidden rounded-xl bg-muted">
            <img
              src={headshotImg}
              alt="Élise Moreau"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-1">Pastry Chef</p>
            <h1 className="text-xl md:text-2xl font-display leading-tight">
              Élise Moreau
            </h1>
          </div>
        </section>

        {/* Info section */}
        <section className="col-span-12 md:col-span-3 row-span-2 md:row-span-3 bg-background rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-sm overflow-hidden">
          <p className="eyebrow text-accent">About</p>
          <h2 className="text-lg md:text-xl font-display leading-snug">
            The quiet architecture of dessert.
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed overflow-hidden">
            CIA graduate, 2019. Trained across Michelin kitchens in Brooklyn,
            Copenhagen, and Paris. Plated desserts and contemporary
            viennoiserie, built around peak-season ingredients.
          </p>
          <div className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-3">
            <Stat n="07" l="Years" />
            <Stat n="48" l="Projects" />
            <Stat n="12" l="Kitchens" />
          </div>
        </section>

        {/* Projects grid — the main focus */}
        <section className="col-span-12 md:col-span-9 row-span-4 md:row-span-6 md:col-start-4 md:row-start-1 bg-background rounded-2xl p-3 md:p-5 shadow-sm">
          <div className="h-full grid grid-cols-3 grid-rows-2 gap-3 md:gap-4">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className="group relative overflow-hidden rounded-xl bg-muted text-left"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="eyebrow text-background/70 mb-1 text-[10px]">
                    {String(i + 1).padStart(2, "0")} · {p.category}
                  </p>
                  <h3 className="text-sm md:text-base text-background font-display leading-tight">
                    {p.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Contact bar */}
        <section className="col-span-8 md:col-span-6 row-span-1 bg-background rounded-2xl px-5 py-3 md:py-4 shadow-sm flex items-center justify-between gap-4 md:col-start-1 md:row-start-7 hidden md:flex">
          <div className="min-w-0">
            <p className="eyebrow text-accent mb-0.5 text-[10px]">Contact</p>
            <a
              href="mailto:hello@elisemoreau.com"
              className="text-sm md:text-base font-display hover:text-accent transition-colors truncate block"
            >
              hello@elisemoreau.com
            </a>
          </div>
          <button
            onClick={() => setContactOpen(true)}
            className="shrink-0 inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-foreground transition-colors"
          >
            Inquire <Send className="size-3" />
          </button>
        </section>

        {/* Footer card */}
        <section className="col-span-4 md:col-span-3 row-span-1 bg-background rounded-2xl px-5 py-3 md:py-4 shadow-sm flex items-center justify-between md:col-start-10 md:row-start-7 hidden md:flex">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2024
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
              <Instagram className="size-4" />
            </a>
            <a href="mailto:hello@elisemoreau.com" aria-label="Email" className="hover:text-accent transition-colors">
              <Mail className="size-4" />
            </a>
          </div>
        </section>
      </div>

      <ProjectDialog project={active} onClose={() => setActive(null)} />

      {contactOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setContactOpen(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              setContactOpen(false);
            }}
            className="bg-background rounded-2xl p-6 md:p-8 w-full max-w-md space-y-4 shadow-xl"
          >
            <div>
              <p className="eyebrow text-accent mb-2">Contact</p>
              <h3 className="text-2xl font-display">Commission a project.</h3>
            </div>
            <input required name="name" placeholder="Name" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent text-sm" />
            <input required type="email" name="email" placeholder="Email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent text-sm" />
            <textarea required name="message" rows={3} placeholder="Message" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-accent resize-none text-sm" />
            <button type="submit" className="w-full bg-foreground text-background py-3 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-foreground transition-colors">
              Send Inquiry
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="text-lg md:text-xl font-display">{n}</p>
      <p className="eyebrow text-muted-foreground mt-0.5 text-[10px]">{l}</p>
    </div>
  );
}
