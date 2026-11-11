import { WORDMARK_STACKED_PATHS, WORDMARK_STACKED_VIEWBOX } from "./wordmark-shape";

export interface WordmarkProps {
  class?: string;
}

/** Approved outlined type. The parent supplies the accessible product name. */
export function Wordmark(props: WordmarkProps) {
  const className = () => ["app-wordmark", props.class].filter(Boolean).join(" ");

  return (
    <svg class={className()} viewBox={WORDMARK_STACKED_VIEWBOX} aria-hidden="true">
      <path d={WORDMARK_STACKED_PATHS.name} />
      <path class="app-wordmark-descriptor" d={WORDMARK_STACKED_PATHS.descriptor} />
    </svg>
  );
}
