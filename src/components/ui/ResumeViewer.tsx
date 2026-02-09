import { useState } from "react";
import { X, FileText, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

const ResumeViewer = ({ isOpen, onClose, pdfUrl = "/AshitoshIngale.pdf" }: ResumeViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-background/80 backdrop-blur-sm",
          "animate-fade-in"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative z-10 bg-card border border-border rounded-2xl overflow-hidden",
          "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]",
          "animate-scale-in",
          "transition-all duration-500 ease-out",
          isFullscreen
            ? "fixed inset-4 md:inset-8 w-auto h-auto"
            : "w-[95vw] max-w-4xl h-[85vh]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Ashitosh Krishna Ingale - Resume</h3>
              <p className="text-xs text-muted-foreground">View Only</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={cn(
                "p-2 rounded-lg text-muted-foreground",
                "transition-all duration-300",
                "hover:bg-muted hover:text-foreground"
              )}
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button
              onClick={onClose}
              className={cn(
                "p-2 rounded-lg text-muted-foreground",
                "transition-all duration-300",
                "hover:bg-destructive/10 hover:text-destructive"
              )}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative h-[calc(100%-73px)] bg-muted/20">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
