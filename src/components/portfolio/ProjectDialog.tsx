import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import type { Project } from "./projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: Props) {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    if (project) {
      setImageIndex(0);
    }
  }, [project]);

  const allImages = project ? [project.image, ...(project.gallery || [])] : [];

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="max-w-6xl w-[95vw] max-h-[92vh] overflow-y-auto lg:overflow-hidden p-0 bg-background border-0 rounded-none [&>button]:hidden"
      >
        {project && (
          <>
            <VisuallyHidden><DialogTitle>{project.title}</DialogTitle></VisuallyHidden>
            <div className="absolute right-4 top-4 z-50">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="size-10 flex items-center justify-center bg-background/80 backdrop-blur rounded-full hover:bg-foreground hover:text-background transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="grid lg:grid-cols-5 gap-0 lg:h-[92vh]">
              <div className="lg:col-span-3 bg-muted lg:h-full relative group lg:min-h-0">
                <div className="w-full aspect-square lg:absolute lg:inset-0 lg:h-full lg:w-full lg:aspect-auto">
                  <img
                    src={allImages[imageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover lg:absolute lg:inset-0"
                  />
                </div>
                
                {/* Image Navigation Arrows */}
                {project.gallery && project.gallery.length > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setImageIndex(prev => (prev === 0 ? allImages.length - 1 : prev - 1));
                      }}
                      className="absolute bottom-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 left-4 z-10 size-10 flex items-center justify-center bg-background/80 backdrop-blur rounded-full hover:bg-foreground hover:text-background transition-colors shadow-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setImageIndex(prev => (prev === allImages.length - 1 ? 0 : prev + 1));
                      }}
                      className="absolute bottom-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 right-4 z-10 size-10 flex items-center justify-center bg-background/80 backdrop-blur rounded-full hover:bg-foreground hover:text-background transition-colors shadow-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  </>
                )}
              </div>
              <div className="lg:col-span-2 p-8 md:p-12 flex flex-col gap-8 lg:overflow-y-auto lg:h-full lg:max-h-[92vh]">
                <div>
                  <p className="eyebrow text-muted-foreground mb-4">{project.category}</p>
                  <h2 className="text-4xl md:text-5xl mb-6 leading-tight">{project.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {project.flavor && (
                  <div className="border-t border-border pt-6">
                    <p className="eyebrow text-muted-foreground mb-3">Flavor Profile</p>
                    <p className="text-sm leading-relaxed">{project.flavor}</p>
                  </div>
                )}

                {project.technique && (
                  <div className="border-t border-border pt-6">
                    <p className="eyebrow text-muted-foreground mb-3">Technique</p>
                    <p className="text-sm leading-relaxed">{project.technique}</p>
                  </div>
                )}

                {project.gallery && project.gallery.length > 0 && (
                  <div className="border-t border-border pt-6">
                    <p className="eyebrow text-muted-foreground mb-4">Gallery</p>
                    <div className="grid grid-cols-3 gap-2">
                      {allImages.map((src, i) => (
                        <button 
                          key={i} 
                          type="button"
                          onClick={() => setImageIndex(i)}
                          className={`aspect-square overflow-hidden bg-muted transition-all ${imageIndex === i ? "ring-2 ring-foreground" : "opacity-70 hover:opacity-100"}`}
                        >
                          <img
                            src={src}
                            alt={`${project.title} detail ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
