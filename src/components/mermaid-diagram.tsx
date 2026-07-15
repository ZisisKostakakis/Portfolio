'use client';

import { useEffect, useId, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const [svg, setSvg] = useState<string>('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          fontFamily: 'var(--font-jetbrains), monospace',
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
    <div
      className="mermaid-container overflow-x-auto rounded-xl border border-line-soft bg-void/50 p-4 sm:p-6"
      role="img"
      aria-label="Architecture diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
