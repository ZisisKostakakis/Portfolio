'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

function ExpandIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  );
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [svg, setSvg] = useState<string>('');
  const [failed, setFailed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          fontFamily: 'var(--font-jetbrains), monospace',
          // Render at natural size; the container scrolls instead of shrinking the SVG.
          flowchart: { useMaxWidth: false },
          sequence: { useMaxWidth: false },
          themeVariables: {
            darkMode: true,
            background: 'transparent',
            primaryColor: '#171b1f',
            primaryTextColor: '#eceff1',
            primaryBorderColor: '#2dd4bf',
            lineColor: '#8e969d',
            secondaryColor: '#111417',
            tertiaryColor: '#0b0d0e',
            fontSize: '14px',
            noteBkgColor: '#171b1f',
            noteTextColor: '#c3c9cd',
            noteBorderColor: '#1f2429',
            actorBkg: '#171b1f',
            actorBorder: '#2dd4bf',
            actorTextColor: '#eceff1',
            signalColor: '#8e969d',
            signalTextColor: '#c3c9cd',
            labelBoxBkgColor: '#111417',
            labelBoxBorderColor: '#1f2429',
            labelTextColor: '#eceff1',
            loopTextColor: '#2dd4bf',
            sequenceNumberColor: '#0b0d0e',
            clusterBkg: 'rgba(45, 212, 191, 0.04)',
            clusterBorder: '#1f2429',
            edgeLabelBackground: '#111417',
          },
        });
        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        if (!cancelled) setSvg(svg);
      } catch (e) {
        console.error('Mermaid render error:', e);
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  // Fullscreen behaviour: Escape closes, page scroll locks, focus moves to close.
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [expanded]);

  if (failed) {
    return (
      <pre className="overflow-x-auto rounded-xl border border-line-soft bg-void p-4 font-mono text-xs text-muted">
        {chart}
      </pre>
    );
  }

  if (!svg) {
    return (
      <div className="flex h-48 animate-pulse items-center justify-center rounded-xl border border-line-soft bg-void/50">
        <span className="font-mono text-xs text-faint">rendering diagram…</span>
      </div>
    );
  }

  return (
    <>
      <div className="group relative">
        <button
          onClick={() => setExpanded(true)}
          aria-label="Expand diagram"
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-raised/90 text-muted opacity-70 transition-all duration-200 group-hover:opacity-100 hover:border-accent/50 hover:text-accent"
        >
          <ExpandIcon className="h-4 w-4" />
        </button>
        <div
          className="mermaid-container cursor-zoom-in overflow-x-auto rounded-xl border border-line-soft bg-void/50 p-4 sm:p-6"
          role="img"
          aria-label="Architecture diagram"
          onClick={() => setExpanded(true)}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>

      {expanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Architecture diagram, expanded"
          className="fixed inset-0 z-[100] flex flex-col bg-void/95 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <div className="flex shrink-0 items-center justify-between px-5 py-4">
            <span className="font-mono text-xs text-muted">architecture diagram</span>
            <button
              ref={closeRef}
              onClick={() => setExpanded(false)}
              aria-label="Close expanded diagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-raised text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div
              className="mermaid-full flex min-h-full min-w-max items-center justify-center p-6"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>
        </div>
      )}
    </>
  );
}
