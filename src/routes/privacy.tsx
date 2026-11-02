import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("Privacy Policy — NEW PDRS FOUNDATION", "How NEW PDRS FOUNDATION handles information."),
  component: () => (
    <section className="container-x max-w-3xl py-20">
      <h1 className="text-4xl font-semibold text-navy">Privacy Policy</h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">This demonstration website stores contact form submissions only in your browser. A formal privacy policy will be published once the foundation finalises its data practices.</p>
    </section>
  ),
});
