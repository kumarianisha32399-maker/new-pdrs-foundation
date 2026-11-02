import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore, fmtDate } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { EmptyState, Img } from "@/components/site/ui";

export const Route = createFileRoute("/news/$id")({
  head: () => pageHead("News — NEW PDRS FOUNDATION", "News from NEW PDRS FOUNDATION."),
  component: NewsDetail,
});

function NewsDetail() {
  const { id } = Route.useParams();
  const { data, ready } = useStore();
  const n = data.news.find((x) => x.id === id && x.published);
  return (
    <article className="container-x max-w-4xl py-16">
      <Link to="/events" className="text-sm font-semibold text-blue">← Events & News</Link>
      {!n ? (ready && <div className="mt-8"><EmptyState title="Article not found" /></div>) : (
        <>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-teal">News · {fmtDate(n.date)}</p>
          <h1 className="mt-3 text-4xl font-semibold text-navy">{n.title}</h1>
          <Img src={n.image} alt={n.title} className="mt-8 aspect-[16/9] w-full rounded-lg" />
          <p className="mt-8 whitespace-pre-line text-lg leading-relaxed">{n.content}</p>
        </>
      )}
    </article>
  );
}
