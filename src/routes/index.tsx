import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, ChevronLeft, ChevronRight, Linkedin, FileText } from "lucide-react";
import headshotImg from "@/assets/headshot.jpg";
import resumePdf from "@/assets/Jen_Whyte_Resume_QR.pdf";
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
  const [aboutExpanded, setAboutExpanded] = useState(false);

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
              suppressHydrationWarning
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
          <div className="flex-1 min-h-0 overflow-y-auto pr-1 flex flex-col">
            <div className={`space-y-3 ${!aboutExpanded ? 'line-clamp-2 md:line-clamp-none' : ''}`}>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Honors graduate of The Culinary Institute of America with a deep passion for creating exceptional pastries and confections. 
                Highly organized and self-driven, with experience ranging from high-volume Forbes 5-Star resorts to independently running a storefront bakery department. 
                I pride myself on executing recipes to exact specifications while continuously exploring new, creative flavor profiles.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden md:block">
                Relocating to Raleigh, NC, and excited to bring my dedication and foundational skills to a dynamic new kitchen.
              </p>
            </div>
            {!aboutExpanded && (
              <button 
                type="button"
                onClick={() => setAboutExpanded(true)}
                className="text-xs font-semibold text-foreground mt-2 md:hidden self-start"
              >
                Read more...
              </button>
            )}
            {aboutExpanded && (
              <>
                <p className="text-xs text-muted-foreground leading-relaxed mt-3 md:hidden">
                  Relocating to Raleigh, NC, and excited to bring my dedication and foundational skills to a dynamic new kitchen.
                </p>
                <button 
                  type="button"
                  onClick={() => setAboutExpanded(false)}
                  className="text-xs font-semibold text-foreground mt-2 md:hidden self-start"
                >
                  Show less
                </button>
              </>
            )}
          </div>
        </section>


        {/* Projects grid — main focus, with pagination */}
        <section className="col-span-12 md:col-span-9 md:row-span-6 md:col-start-4 md:row-start-1 bg-background rounded-2xl p-3 md:p-5 shadow-lg flex flex-col gap-3">
          <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-3 md:grid-rows-2 auto-rows-[150px] md:auto-rows-auto gap-3 md:gap-4">
            {pageProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p)}
                className="group relative overflow-hidden rounded-xl bg-muted text-left"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  suppressHydrationWarning
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
                type="button"
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
                type="button"
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
              href="mailto:jenwhyte03@outlook.com"
              className="text-sm md:text-base font-display hover:text-accent transition-colors truncate block"
            >
              jenwhyte03@outlook.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/jen-whyte/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="shrink-0 size-8 bg-muted text-foreground flex items-center justify-center rounded-full hover:bg-accent hover:text-foreground transition-colors"
            >
              <Linkedin className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="shrink-0 inline-flex items-center gap-2 bg-foreground text-background px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-foreground transition-colors"
            >
              Inquire <Send className="size-3" />
            </button>
          </div>
        </section>

        {/* Footer card — moved to right column */}
        <section className="col-span-12 md:col-span-3 md:row-span-1 bg-background rounded-2xl px-5 py-3 shadow-lg flex items-center justify-between md:col-start-10 md:row-start-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Made by <a href="https://danpora.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover:underline">dpora</a> © 2026
          </p>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-foreground text-background px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-foreground transition-colors"
          >
            Resume <FileText className="size-3" />
          </a>
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
