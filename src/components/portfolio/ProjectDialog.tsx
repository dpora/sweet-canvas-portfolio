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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setSelectedImage(project.image);
    }
  }, [project]);

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
              <div className="lg:col-span-3 bg-muted lg:h-full relative group">
                <img
                  src={selectedImage || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover aspect-square lg:aspect-auto"
                />
                
                {/* Mobile Image Navigation Arrows */}
                {project.gallery && project.gallery.length > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        const allImages = [project.image, ...(project.gallery || [])];
                        const currentIndex = allImages.indexOf(selectedImage || project.image);
                        const prevIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
                        setSelectedImage(allImages[prevIndex]);
                      }}
                      className="absolute bottom-4 left-4 z-10 size-10 flex items-center justify-center bg-background/80 backdrop-blur rounded-full hover:bg-foreground hover:text-background transition-colors lg:hidden shadow-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const allImages = [project.image, ...(project.gallery || [])];
                        const currentIndex = allImages.indexOf(selectedImage || project.image);
                        const nextIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
                        setSelectedImage(allImages[nextIndex]);
                      }}
                      className="absolute bottom-4 right-4 z-10 size-10 flex items-center justify-center bg-background/80 backdrop-blur rounded-full hover:bg-foreground hover:text-background transition-colors lg:hidden shadow-sm"
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
                      {[project.image, ...(project.gallery || [])].map((src, i) => (
                        <button 
                          key={i} 
                          type="button"
                          onClick={() => setSelectedImage(src)}
                          className={`aspect-square overflow-hidden bg-muted transition-all ${selectedImage === src ? "ring-2 ring-foreground" : "opacity-70 hover:opacity-100"}`}
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
