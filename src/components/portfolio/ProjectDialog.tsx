import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import type { Project } from "./projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: Props) {
  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-6xl w-[95vw] max-h-[92vh] overflow-y-auto p-0 bg-background border-0 rounded-none [&>button]:hidden"
      >
        {project && (
          <>
            <VisuallyHidden><DialogTitle>{project.title}</DialogTitle></VisuallyHidden>
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 size-10 flex items-center justify-center bg-background/80 backdrop-blur hover:bg-foreground hover:text-background transition-colors"
            >
              <X className="size-4" />
            </button>

            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-square lg:aspect-auto"
                />
              </div>
              <div className="lg:col-span-2 p-8 md:p-12 flex flex-col gap-8">
                <div>
                  <p className="eyebrow text-muted-foreground mb-4">{project.category}</p>
                  <h2 className="text-4xl md:text-5xl mb-6 leading-tight">{project.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="eyebrow text-muted-foreground mb-3">Flavor Profile</p>
                  <p className="text-sm leading-relaxed">{project.flavor}</p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="eyebrow text-muted-foreground mb-3">Technique</p>
                  <p className="text-sm leading-relaxed">{project.technique}</p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="eyebrow text-muted-foreground mb-4">Process</p>
                  <div className="grid grid-cols-3 gap-2">
                    {project.gallery.map((src, i) => (
                      <div key={i} className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={src}
                          alt={`${project.title} detail ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
