import { APP_LOGO_CORNER, APP_LOGO_EYE_POINTS, APP_LOGO_SIZE } from "@openbot/brand/app-logo-shape";

/** Original OpenBot mark, used only beside named upstream archive references. */
export function UpstreamLogo(props: { class?: string }) {
  return (
    <svg class={props.class} viewBox={`0 0 ${APP_LOGO_SIZE} ${APP_LOGO_SIZE}`} aria-hidden="true">
      <rect width={APP_LOGO_SIZE} height={APP_LOGO_SIZE} rx={APP_LOGO_CORNER} fill="#d6adf2" />
      <g fill="none" stroke="#040007" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points={APP_LOGO_EYE_POINTS.left} />
        <polyline points={APP_LOGO_EYE_POINTS.right} />
      </g>
    </svg>
  );
}
