
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { bots } from '@/utils/botData';

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
      <h3 className="text-xl font-semibold mb-4">Federal Sales Process Flow</h3>
      <div className="glass-card p-4 rounded-xl">
        <div className="overflow-hidden" ref={mermaidRef}></div>
      </div>
    </div>
  );
};

export default WorkflowVisual;
