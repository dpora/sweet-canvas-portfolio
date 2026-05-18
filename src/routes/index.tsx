import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Instagram, Mail, Send } from "lucide-react";
import heroImg from "@/assets/hero-dessert.jpg";
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
          "Portfolio of Élise Moreau, pastry chef and graduate of the Culinary Institute of America. Plated desserts, viennoiserie, and celebration cakes.",
      },
    ],
  }),
});

function Index() {
  const [active, setActive] = useState<Project | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#top" className="text-sm tracking-[0.25em] uppercase font-medium">
            Élise<span className="text-accent">.</span>Moreau
          </a>
          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em]">
            <button onClick={() => scrollTo("work")} className="hover:text-accent transition-colors">Work</button>
            <button onClick={() => scrollTo("about")} className="hover:text-accent transition-colors">About</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-accent transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-end bg-foreground text-background overflow-hidden">
        <img
          src={heroImg}
          alt="Signature chocolate dome with gold leaf"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-foreground/30" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-20 pt-32">
          <div className="max-w-4xl animate-fade-up">
            <p className="eyebrow text-accent mb-8">Pastry Chef · Portfolio 2024</p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] mb-8">
              The quiet<br />
              architecture<br />
              <em className="text-accent not-italic">of dessert.</em>
            </h1>
            <p className="text-base md:text-lg max-w-xl text-background/80 leading-relaxed mb-10">
              Élise Moreau — a pastry chef trained at the Culinary Institute of America,
              composing plated desserts and viennoiserie with restraint, precision, and seasonal ingredient.
            </p>
            <button
              onClick={() => scrollTo("work")}
              className="group inline-flex items-center gap-4 bg-background text-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-accent hover:text-foreground transition-colors"
            >
              View My Work
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={headshotImg}
                alt="Portrait of Élise Moreau"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-accent mb-6">About</p>
            <h2 className="text-4xl md:text-6xl leading-tight mb-8">
              Discipline of the
              <br />
              <em className="not-italic text-muted-foreground">sweet course.</em>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-xl">
              <p>
                I am a pastry chef based between New York and Paris. My work begins with
                a single ingredient — a peak-season fruit, a particular cocoa, a wild
                honey — and is built outward with the precision the craft demands.
              </p>
              <p>
                I graduated from the <span className="text-foreground">Culinary Institute of America</span> in
                2019 and have since worked across Michelin-starred kitchens in
                Brooklyn, Copenhagen, and the 7e arrondissement, focusing on plated
                desserts and contemporary viennoiserie.
              </p>
              <p>
                The portfolio that follows is a selection of recent projects — private
                commissions, restaurant menus, and personal studies.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-display">07</p>
                <p className="eyebrow text-muted-foreground mt-2">Years</p>
              </div>
              <div>
                <p className="text-3xl font-display">48</p>
                <p className="eyebrow text-muted-foreground mt-2">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-display">12</p>
                <p className="eyebrow text-muted-foreground mt-2">Kitchens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-24 md:py-32 bg-secondary">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16 md:mb-20 gap-8 flex-wrap">
            <div>
              <p className="eyebrow text-accent mb-4">Selected Work</p>
              <h2 className="text-4xl md:text-6xl leading-tight max-w-2xl">
                A catalogue of recent compositions.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Each piece is a study in balance — texture, temperature, and seasonality.
              Select any project for detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className="group relative aspect-square overflow-hidden bg-foreground text-left"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-foreground/90 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="eyebrow text-background/70 mb-2">
                    {String(i + 1).padStart(2, "0")} — {p.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl text-background mb-3">{p.title}</h3>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
                    View Project <ArrowRight className="size-3" />
                  </span>
                </div>
                <div className="absolute top-4 left-4 size-8 flex items-center justify-center bg-background/0 text-background/0 group-hover:bg-accent group-hover:text-foreground transition-all duration-500 text-xs font-medium">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-foreground text-background pt-24 md:pt-32 pb-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 pb-20 border-b border-background/10">
            <div className="lg:col-span-5">
              <p className="eyebrow text-accent mb-6">Contact</p>
              <h2 className="text-4xl md:text-6xl leading-tight mb-8">
                Commission a<br />project.
              </h2>
              <p className="text-background/70 leading-relaxed mb-10 max-w-md">
                Currently accepting select commissions for private events, restaurant
                menu development, and editorial collaborations.
              </p>
              <a
                href="mailto:hello@elisemoreau.com"
                className="inline-flex items-center gap-3 text-lg border-b border-background/30 pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                <Mail className="size-4" />
                hello@elisemoreau.com
              </a>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. I will be in touch shortly.");
              }}
              className="lg:col-span-6 lg:col-start-7 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Subject" name="subject" />
              <div>
                <label className="eyebrow text-background/50 mb-3 block">Message</label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={4}
                  className="w-full bg-transparent border-b border-background/20 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-4 bg-background text-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-accent transition-colors"
              >
                Send Inquiry
                <Send className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-10 text-xs uppercase tracking-[0.2em] text-background/50">
            <p>© 2024 Élise Moreau — All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram className="size-4" /></a>
              <a href="mailto:hello@elisemoreau.com" aria-label="Email" className="hover:text-accent transition-colors"><Mail className="size-4" /></a>
            </div>
          </div>
        </div>
      </footer>

      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow text-background/50 mb-3 block">{label}</label>
      <input
        name={name}
        type={type}
        required
        maxLength={255}
        className="w-full bg-transparent border-b border-background/20 py-3 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
