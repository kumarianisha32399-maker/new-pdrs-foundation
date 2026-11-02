import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore, useSeo } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { EmptyState, Img, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/initiatives")({
  head: () => pageHead("Our Initiatives — NEW PDRS FOUNDATION", "Education and community learning initiatives in Vasai and surrounding areas."),
  component: Initiatives,
});

function Initiatives() {
  useSeo("initiatives");
  const { data } = useStore();
  return (
    <>
      <PageHero eyebrow="Our Initiatives" title="Learning that reaches into the community" text="Initiatives the foundation is developing to make education more accessible." image="asset:community" />
      <section className="container-x space-y-24 py-24">
        {data.initiatives.length === 0 && <EmptyState title="No initiatives yet" />}
        {data.initiatives.map((it, i) => (
          <Reveal key={it.id} className="grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <Img src={it.image} alt={it.title} className="aspect-[4/3] w-full rounded-lg shadow-lift" loading="lazy" />
            </div>
            <div>
              <span className="font-display text-5xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">{it.title}</h2>
              <p className="mt-4 text-lg font-medium text-teal">{it.summary}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{it.details}</p>
              <Link to="/contact" className="btn btn-outline mt-7">Get involved</Link>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
