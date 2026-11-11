import { createFileRoute, Outlet, useMatch } from "@tanstack/solid-router";
import { Show } from "solid-js";
import { PricingPage } from "../components/pricing/PricingPage";

// The pricing page at `/pricing`, `/pl/pricing` and `/pt/pricing`. Each child route loads the text of its
// language, and this layout shows the page, so a change of language changes only the text.
export const Route = createFileRoute("/_pricing")({
  component: PricingLayout,
});

function PricingLayout() {
  const english = useMatch({ from: "/_pricing/pricing", shouldThrow: false, select: (match) => match.loaderData });
  const polish = useMatch({ from: "/_pricing/pl/pricing", shouldThrow: false, select: (match) => match.loaderData });
  const portuguese = useMatch({
    from: "/_pricing/pt/pricing",
    shouldThrow: false,
    select: (match) => match.loaderData,
  });
  const page = () => english() ?? polish() ?? portuguese();
  return (
    <>
      <Show when={page()}>{(data) => <PricingPage lang={data().lang} text={data().text} />}</Show>
      <Outlet />
    </>
  );
}
