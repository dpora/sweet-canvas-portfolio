import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, Send, ChevronLeft, ChevronRight } from "lucide-react";
import headshotImg from "@/assets/headshot.jpg";
import { projects, type Project } from "@/components/portfolio/projects";
import { ProjectDialog } from "@/components/portfolio/ProjectDialog";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jennifer Whyte — Pastry Chef Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Jennifer Whyte, pastry chef. Plated desserts, viennoiserie, and celebration cakes.",
      },
    ],
  }),
});

const PAGE_SIZE = 6;

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const pageProjects = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <main className="md:h-screen w-screen md:overflow-hidden bg-secondary text-foreground p-3 md:p-4 flex flex-col min-h-screen">
      <div className="flex-1 grid grid-cols-12 md:grid-rows-[repeat(6,minmax(0,1fr))_auto] gap-3 md:gap-4 md:min-h-0">
        {/* Profile card */}
        <section className="col-span-12 md:col-span-3 md:row-span-3 bg-background rounded-2xl p-4 md:p-5 flex flex-col gap-3 shadow-lg">
          <div className="h-48 md:flex-1 md:h-auto min-h-0 overflow-hidden rounded-xl bg-muted">
            <img
              src={headshotImg}
              alt="Jennifer Whyte"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-muted-foreground mb-1">Pastry Chef</p>
            <h1 className="text-xl md:text-2xl font-display leading-tight">
              Jennifer Whyte
            </h1>
          </div>
        </section>

        {/* Info / About — now taller (4 rows) */}
        <section className="col-span-12 md:col-span-3 md:row-span-4 bg-background rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-lg min-h-0">
          <p className="eyebrow text-accent shrink-0">About</p>
          <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3">
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              CIA graduate, 2019. Trained across Michelin kitchens in Brooklyn,
              Copenhagen, and Paris. Plated desserts and contemporary
              viennoiserie, built around peak-season ingredients.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Current work focuses on the dialogue between technique and
              restraint — small menus, deep seasons, and a quiet visual
              grammar.
            </p>
          </div>
        </section>


        {/* Projects grid — main focus, with pagination */}
        <section className="col-span-12 md:col-span-9 md:row-span-6 md:col-start-4 md:row-start-1 bg-background rounded-2xl p-3 md:p-5 shadow-lg flex flex-col gap-3">
          <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-3 md:grid-rows-2 auto-rows-[150px] md:auto-rows-auto gap-3 md:gap-4">
            {pageProjects.map((p, i) => (
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
                    {String(page * PAGE_SIZE + i + 1).padStart(2, "0")} · {p.category}
                  </p>
                  <h3 className="text-sm md:text-base text-background font-display leading-tight">
                    {p.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between px-1 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            <p className="eyebrow text-accent text-[10px]">Selected Work</p>
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous projects"
                className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                <ChevronLeft className="size-5" />
              </button>
              <span className="text-base uppercase tracking-[0.22em] text-muted-foreground">
                {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                aria-label="Next projects"
                className="size-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div aria-hidden="true" className="hidden md:block" />
          </div>
        </section>

        {/* Contact bar — moved to right column */}
        <section className="col-span-12 md:col-span-6 md:row-span-1 bg-background rounded-2xl px-5 py-3 shadow-lg flex items-center justify-between gap-4 md:col-start-4 md:row-start-7">
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
            className="shrink-0 inline-flex items-center gap-2 bg-foreground text-background px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-foreground transition-colors"
          >
            Inquire <Send className="size-3" />
          </button>
        </section>

        {/* Footer card — moved to right column */}
        <section className="col-span-12 md:col-span-3 md:row-span-1 bg-background rounded-2xl px-5 py-3 shadow-lg flex items-center justify-between md:col-start-10 md:row-start-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2026
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
