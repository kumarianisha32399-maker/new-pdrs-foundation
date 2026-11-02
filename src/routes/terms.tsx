import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => pageHead("Terms & Conditions — NEW PDRS FOUNDATION", "Terms of use for the NEW PDRS FOUNDATION website."),
  component: () => (
    <section className="container-x max-w-3xl py-20">
      <h1 className="text-4xl font-semibold text-navy">Terms &amp; Conditions</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">Content on this site is provided for general information. Sample programs, events and figures are illustrative until officially confirmed by the foundation.</p>
    </section>
  ),
});
