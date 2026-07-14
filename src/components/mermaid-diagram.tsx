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
            primaryColor: '#171725',
            primaryTextColor: '#f2f2f7',
            primaryBorderColor: '#7c6bff',
            lineColor: '#83839a',
            secondaryColor: '#10101a',
            tertiaryColor: '#0a0a11',
            fontSize: '14px',
            noteBkgColor: '#171725',
            noteTextColor: '#c3c3d1',
            noteBorderColor: '#22222f',
            actorBkg: '#171725',
            actorBorder: '#7c6bff',
            actorTextColor: '#f2f2f7',
            signalColor: '#83839a',
            signalTextColor: '#c3c3d1',
            labelBoxBkgColor: '#10101a',
            labelBoxBorderColor: '#22222f',
            labelTextColor: '#f2f2f7',
            loopTextColor: '#7c6bff',
            sequenceNumberColor: '#050508',
            clusterBkg: 'rgba(124, 107, 255, 0.04)',
            clusterBorder: '#22222f',
            edgeLabelBackground: '#10101a',
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
