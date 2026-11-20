import { translateFor } from "@openbot/i18n";
import type { JSX } from "@solidjs/web";
import { createRootRoute, createRoute, createRouter, RouterContextProvider } from "@tanstack/solid-router";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../../styles.css";
import { siteText } from "../../lib/site-text";
import { SiteTextProvider } from "../landing/SiteText";
import { PricingPage } from "./PricingPage";
import { pricingPageText } from "./pricing-page-text";

const rootRoute = createRootRoute();
rootRoute.addChildren(
  [
    "/",
    "/news",
    "/guides",
    "/marketplace",
    "/marketplace/apps",
    "/download",
    "/changelog",
    "/compare",
    "/compare/$slug",
    "/providers",
    "/providers/$slug",
    "/teams",
    "/pricing",
    "/contact",
    "/app",
    "/privacy",
    "/terms",
  ].map((path) => createRoute({ getParentRoute: () => rootRoute, path })),
);
const router = createRouter({ routeTree: rootRoute });

function WithRouter(props: { children: () => JSX.Element }) {
  return (
    <RouterContextProvider router={router}>
      {() => (
        <SiteTextProvider chrome={{ lang: "en", dir: "ltr", locale: "en", text: siteText(translateFor("en")) }}>
          {props.children()}
        </SiteTextProvider>
      )}
    </RouterContextProvider>
  );
}

const meta = {
  title: "Site/Pricing page",
  component: PricingPage,
  args: {
    text: pricingPageText(translateFor("en")),
    lang: "en",
  },
  parameters: { layout: "fullscreen", a11y: { test: "error" } },
  render: (args) => <WithRouter>{() => <PricingPage {...args} />}</WithRouter>,
} satisfies Meta<typeof PricingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

/** The company deployment notice does not offer a hosted plan or a commercial license. */
export const DeploymentNotice: Story = {};
