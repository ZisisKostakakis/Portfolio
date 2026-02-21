'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            darkMode: true,
            background: '#0a0a0a',
            primaryColor: '#1e293b',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#334155',
            lineColor: '#64748b',
            secondaryColor: '#1e293b',
            tertiaryColor: '#0f172a',
            edgeLabelBackground: '#1e293b',
            clusterBkg: '#0f172a',
            clusterBorder: '#334155',
            titleColor: '#f8fafc',
            nodeTextColor: '#e2e8f0',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          },
          flowchart: { curve: 'basis', padding: 20 },
          sequence: { actorMargin: 50, messageMargin: 40 },
        });

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg: rendered } = await mermaid.render(id, chart);
        const scaled = rendered
          .replace(/width="[^"]*"/, 'width="100%"')
          .replace(/height="[^"]*"/, '')
          .replace(/style="[^"]*max-width:[^"]*"/, 'style="width:100%;height:auto"');
        if (!cancelled) setSvg(scaled);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  function openModal() {
    setScale(1);
    setOrigin({ x: 0, y: 0 });
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setOpen(false);
    document.body.style.overflow = '';
  }

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(8, Math.max(0.5, s - e.deltaY * 0.001)));
  }, []);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      dragStart.current = { mx: e.clientX, my: e.clientY, ox: origin.x, oy: origin.y };
      setDragging(true);
    },
    [origin]
  );

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragStart.current) return;
    setOrigin({
      x: dragStart.current.ox + (e.clientX - dragStart.current.mx),
      y: dragStart.current.oy + (e.clientY - dragStart.current.my),
    });
  }, []);

  const onMouseUp = useCallback(() => {
    dragStart.current = null;
    setDragging(false);
  }, []);

  if (error) return null;

  if (!svg) {
    return <div className="w-full h-32 bg-black/40 rounded-lg animate-pulse" />;
  }

  return (
    <>
      {/* Thumbnail — click to open */}
      <div
        className="relative w-full overflow-hidden rounded-lg bg-black/40 p-4 cursor-zoom-in group"
        onClick={openModal}
        title="Click to view fullscreen"
      >
        <div dangerouslySetInnerHTML={{ __html: svg }} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-lg">
          <span className="flex items-center gap-2 text-sm font-medium text-white bg-black/70 px-4 py-2 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            View fullscreen
          </span>
        </div>
      </div>

      {/* Fullscreen modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              className="bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setScale((s) => Math.min(8, s + 0.5));
              }}
            >
              +
            </button>
            <button
              className="bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setScale((s) => Math.max(0.5, s - 0.5));
              }}
            >
              −
            </button>
            <button
              className="bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setScale(1);
                setOrigin({ x: 0, y: 0 });
              }}
            >
              Reset
            </button>
            <button
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
            Scroll to zoom · Drag to pan · Esc to close
          </p>

          {/* Diagram canvas */}
          <div
            className="w-full h-full overflow-hidden"
            style={{ cursor: dragging ? 'grabbing' : 'grab' }}
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <div
              style={{
                transform: `translate(calc(-50% + ${origin.x}px), calc(-50% + ${origin.y}px)) scale(${scale})`,
                transformOrigin: 'center center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '90vw',
                maxWidth: '1400px',
                willChange: 'transform',
              }}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>
        </div>
      )}
    </>
  );
}
