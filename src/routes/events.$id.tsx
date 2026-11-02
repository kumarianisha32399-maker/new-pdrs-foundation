import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore, fmtDate } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { EmptyState, Img } from "@/components/site/ui";

export const Route = createFileRoute("/events/$id")({
  head: () => pageHead("Event Details — NEW PDRS FOUNDATION", "Event details from NEW PDRS FOUNDATION."),
  component: EventDetail,
});

function EventDetail() {
  const { id } = Route.useParams();
  const { data, ready } = useStore();
  const e = data.events.find((x) => x.id === id && x.published);
  return (
    <article className="container-x max-w-4xl py-16">
      <Link to="/events" className="text-sm font-semibold text-blue">← All events</Link>
      {!e ? (ready && <div className="mt-8"><EmptyState title="Event not found" /></div>) : (
        <>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-teal">{e.category} · {fmtDate(e.date)}</p>
          <h1 className="mt-3 text-4xl font-semibold text-navy">{e.title}</h1>
          <Img src={e.image} alt={e.title} className="mt-8 aspect-[16/9] w-full rounded-lg" />
          <p className="mt-8 whitespace-pre-line text-lg leading-relaxed">{e.description}</p>
        </>
      )}
    </article>
  );
}
