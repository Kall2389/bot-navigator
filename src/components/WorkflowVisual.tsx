
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { bots } from '@/utils/botData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WorkflowVisualProps {
  className?: string;
}

const WorkflowVisual: React.FC<WorkflowVisualProps> = ({ className }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
      securityLevel: 'loose',
    });

    const renderDiagram = async () => {
      if (mermaidRef.current) {
        try {
          mermaidRef.current.innerHTML = "";
          const { svg } = await mermaid.render('mermaid-diagram', getMermaidDefinition());
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid rendering error:", error);
        }
      }
    };

    renderDiagram();
  }, []);

  const getMermaidDefinition = () => {
    return `
      flowchart LR
        subgraph "Federal Sales Process"
          direction LR
          A[Technical Need] --> B[Funding]
          B --> C[Procurement Strategy]
          C --> D[Acquisition Support]
          D --> E[Deal Execution]
        end
        
        style A fill:#f3f8ff,stroke:#4189e6,stroke-width:2px
        style B fill:#f3f8ff,stroke:#4189e6,stroke-width:2px
        style C fill:#f3f8ff,stroke:#4189e6,stroke-width:2px
        style D fill:#f3f8ff,stroke:#4189e6,stroke-width:2px
        style E fill:#f3f8ff,stroke:#4189e6,stroke-width:2px
    `;
  };

  return (
    <div className={className}>
      <CardHeader className="pb-0">
        <CardTitle className="text-xl font-semibold">Federal Sales Process Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white/90 rounded-xl shadow-sm p-6 border border-border/20">
          <div className="overflow-hidden" ref={mermaidRef}></div>
        </div>
      </CardContent>
    </div>
  );
};

export default WorkflowVisual;
