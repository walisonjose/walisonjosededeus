declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  interface VerticalTimelineProps {
    animate?: boolean;
    children?: React.ReactNode;
    className?: string;
    layout?: '1-column' | '1-column-left' | '1-column-right' | '2-columns';
    lineColor?: string;
  }

  interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    date?: string;
    dateClassName?: string;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    intersectionObserverProps?: object;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: React.CSSProperties;
    textClassName?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    visible?: boolean;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
