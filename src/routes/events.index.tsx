import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore, useSeo, fmtDate } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { EmptyState, Img, PageHero, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/events/")({
  head: () => pageHead("Events & News — NEW PDRS FOUNDATION", "Upcoming events, recent activities and foundation news."),
  component: Events,
});

function Events() {
  useSeo("events");
  const { data } = useStore();
  const events = data.events.filter((e) => e.published);
  const news = data.news.filter((n) => n.published);
  return (
    <>
      <PageHero eyebrow="Events & News" title="What's happening at the foundation" image="asset:seminar" />
      <section className="container-x py-20">
        <SectionHead eyebrow="Events" title="Events & Activities" />
        {events.length === 0 ? <div className="mt-8"><EmptyState title="No events yet" /></div> : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <Link key={e.id} to="/events/$id" params={{ id: e.id }} className="card-elev overflow-hidden transition hover:shadow-lift">
                <Img src={e.image} alt={e.title} className="aspect-[16/10] w-full" loading="lazy" />
                <div className="p-6"><span className="text-xs font-bold uppercase tracking-widest text-teal">{e.category} · {fmtDate(e.date)}</span>
                  <h3 className="mt-2 text-lg font-semibold text-navy">{e.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{e.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-blue">Read More →</span></div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <section id="news" className="bg-surface py-20">
        <div className="container-x">
          <SectionHead eyebrow="News" title="Foundation News" />
          {news.length === 0 ? <div className="mt-8"><EmptyState title="No news yet" /></div> : (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {news.map((n) => (
                <Link key={n.id} to="/news/$id" params={{ id: n.id }} className="card-elev flex gap-4 overflow-hidden p-4 transition hover:shadow-lift">
                  <Img src={n.image} alt={n.title} className="h-28 w-36 shrink-0 rounded-md" loading="lazy" />
                  <div><span className="text-xs text-teal">{fmtDate(n.date)}</span><h3 className="font-semibold text-navy">{n.title}</h3><p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{n.summary}</p></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
