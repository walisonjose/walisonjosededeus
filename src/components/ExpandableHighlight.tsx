import React from "react";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import '../assets/styles/ExpandableHighlight.scss';

export type HighlightProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  icon?: React.ReactNode;
  summaryLabel?: string;
  body: React.ReactNode;
  embedded?: boolean;
};

function ExpandableHighlight({
  id,
  eyebrow,
  title,
  subtitle,
  meta,
  icon,
  summaryLabel = "Ver detalhes",
  body,
  embedded = false,
}: HighlightProps) {
  const rootClass = `highlight${embedded ? ' highlight-embedded' : ''}`;

  return (
    <section className={rootClass} id={id}>
      <div className="highlight-header">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <div>
          <h1>{title}</h1>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="highlight-card">
        {meta && (
          <div className="highlight-meta">
            {icon && <div className="icon-badge">{icon}</div>}
            <div className="meta-text">{meta}</div>
          </div>
        )}

        <details>
          <summary>
            <span>{summaryLabel}</span>
            <ExpandMoreRoundedIcon className="chevron" fontSize="small" />
          </summary>
          <div className="highlight-body">
            {body}
          </div>
        </details>
      </div>
    </section>
  );
}

export default ExpandableHighlight;
