import { createFileRoute, Link } from "@tanstack/react-router";
import { useSeo } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { PageHero, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/support")({
  head: () => pageHead("Support Our Mission — NEW PDRS FOUNDATION", "Ways to support education and volunteer with the foundation."),
  component: Support,
});

function Support() {
  useSeo("support");
  return (
    <>
      <PageHero eyebrow="Support Us" title="Support Our Mission" text="Help widen access to learning in Vasai and beyond." image="asset:library" />
      <section className="container-x py-20">
        <SectionHead eyebrow="Why" title="Why Support Education?" text="Education opens opportunity, builds confidence and strengthens whole communities." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[["Share your time", "Volunteer as a mentor or session helper."], ["Share resources", "Books, notebooks and learning materials."], ["Share your skills", "Teach a workshop in your area of expertise."]].map(([t, d]) => (
            <div key={t} className="card-elev p-8"><h3 className="text-xl font-semibold text-navy">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>
          ))}
        </div>
        <p className="demo-badge mt-8">Online donations are not yet configured — demonstration content only</p>
      </section>
      <section id="volunteer" className="bg-surface py-20">
        <div className="container-x text-center">
          <SectionHead eyebrow="Volunteer" title="Volunteer With Us" text="Tell us how you'd like to help and we'll get in touch." center />
          <Link to="/contact" className="btn btn-primary mt-8">Contact for support</Link>
        </div>
      </section>
    </>
  );
}
