import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useStore, useSeo } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { EmptyState, Img, PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/programs/")({
  head: () => pageHead("Our Programs — NEW PDRS FOUNDATION", "Educational awareness, learning support, digital learning and skill development programs."),
  component: Programs,
});

function Programs() {
  useSeo("programs");
  const { data } = useStore();
  const list = data.programs.filter((p) => p.published);
  const cats = ["All", ...Array.from(new Set(list.map((p) => p.category)))];
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? list : list.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Our Programs" title="Programs designed around the learner" text="Sample programs below are illustrative and will be refined as the foundation's work develops." image="asset:science" />
      <section className="container-x py-20">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`btn px-4 py-2 ${cat === c ? "btn-primary" : "btn-outline"}`}>{c}</button>
          ))}
        </div>
        {shown.length === 0 ? <div className="mt-12"><EmptyState title="No programs yet" text="Programs will appear here once published." /></div> : (
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <article className="card-elev group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative overflow-hidden">
                    <Img src={p.image} alt={p.title} className="aspect-[4/3] w-full transition duration-500 group-hover:scale-105" loading="lazy" />
                    <span className="absolute left-4 top-4 rounded-md bg-surface/95 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-teal">{p.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-semibold text-navy">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground/80">{p.details}</p>
                    <Link to="/programs/$id" params={{ id: p.id }} className="mt-auto pt-5 text-sm font-semibold text-blue inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">Learn More <ArrowRight size={15} /></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
