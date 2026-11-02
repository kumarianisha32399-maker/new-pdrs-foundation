import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useStore } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { EmptyState, Img } from "@/components/site/ui";

export const Route = createFileRoute("/programs/$id")({
  head: () => pageHead("Program Details — NEW PDRS FOUNDATION", "Details of an education program by NEW PDRS FOUNDATION."),
  component: ProgramDetail,
});

function ProgramDetail() {
  const { id } = Route.useParams();
  const { data, ready } = useStore();
  const p = data.programs.find((x) => x.id === id && x.published);
  if (!p) return <div className="container-x py-24">{ready && <EmptyState title="Program not found" text="It may have been removed or unpublished." />}<div className="mt-6 text-center"><Link to="/programs" className="btn btn-outline">Back to programs</Link></div></div>;
  const others = data.programs.filter((x) => x.published && x.id !== id).slice(0, 3);
  return (
    <article className="container-x py-16">
      <Link to="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-blue"><ArrowLeft size={16} /> All programs</Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="eyebrow">{p.category}</span>
          <h1 className="mt-4 text-4xl font-semibold text-navy md:text-5xl">{p.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{p.short}</p>
          <Img src={p.image} alt={p.title} className="mt-8 aspect-[16/9] w-full rounded-lg shadow-lift" />
          <div className="mt-8 whitespace-pre-line text-lg leading-relaxed">{p.details}</div>
          <p className="demo-badge mt-6">Illustrative program content</p>
        </div>
        <aside className="space-y-6">
          <div className="card-elev p-8">
            <h2 className="text-xl font-semibold text-navy">Interested in this program?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Get in touch to learn more, participate or volunteer.</p>
            <Link to="/contact" className="btn btn-primary mt-5 w-full">Contact us</Link>
            <Link to="/support" className="btn btn-outline mt-3 w-full">Support this work</Link>
          </div>
          {others.length > 0 && <div className="card-elev p-6">
            <h3 className="mb-4 font-semibold text-navy">Other programs</h3>
            {others.map((o) => (
              <Link key={o.id} to="/programs/$id" params={{ id: o.id }} className="flex items-center gap-3 border-t border-border py-3 first:border-0 hover:text-blue">
                <Img src={o.image} alt={o.title} className="h-14 w-16 rounded-md" loading="lazy" />
                <span className="text-sm font-medium">{o.title}</span>
              </Link>
            ))}
          </div>}
        </aside>
      </div>
    </article>
  );
}
