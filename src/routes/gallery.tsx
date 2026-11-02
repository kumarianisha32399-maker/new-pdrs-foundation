import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useStore, useSeo } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { EmptyState, Img, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead("Gallery — NEW PDRS FOUNDATION", "Photographs of classroom, learning and community activities."),
  component: Gallery,
});

function Gallery() {
  useSeo("gallery");
  const { data } = useStore();
  const cats = ["All", ...Array.from(new Set(data.gallery.map((g) => g.category)))];
  const [cat, setCat] = useState("All");
  const [idx, setIdx] = useState<number | null>(null);
  const shown = cat === "All" ? data.gallery : data.gallery.filter((g) => g.category === cat);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % shown.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, shown.length]);

  const cur = idx !== null ? shown[idx] : null;
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments of learning" text="Classroom activities, student learning, community sessions and educational events." image="asset:library" />
      <section className="container-x py-20">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`btn px-4 py-2 ${cat === c ? "btn-primary" : "btn-outline"}`}>{c}</button>)}
        </div>
        {shown.length === 0 ? <div className="mt-12"><EmptyState title="No images in this category" /></div> : (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {shown.map((g, i) => (
              <button key={g.id} onClick={() => setIdx(i)} className="group relative overflow-hidden rounded-lg text-left">
                <Img src={g.image} alt={g.caption} className="aspect-square w-full transition duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-3 text-xs font-medium text-on-dark opacity-0 transition group-hover:opacity-100">{g.caption}<br /><span className="text-gold">{g.category}</span></span>
              </button>
            ))}
          </div>
        )}
      </section>
      {cur && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-4 animate-fade-up" onClick={() => setIdx(null)} role="dialog" aria-modal>
          <button className="absolute right-4 top-4 text-on-dark" aria-label="Close" onClick={() => setIdx(null)}><X size={30} /></button>
          <button className="absolute left-2 text-on-dark md:left-6" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx! - 1 + shown.length) % shown.length); }}><ChevronLeft size={40} /></button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Img src={cur.image} alt={cur.caption} className="max-h-[80vh] w-auto rounded-lg object-contain" />
            <figcaption className="mt-3 text-center text-on-dark">{cur.caption} <span className="text-gold">· {cur.category}</span></figcaption>
          </figure>
          <button className="absolute right-2 text-on-dark md:right-6" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx! + 1) % shown.length); }}><ChevronRight size={40} /></button>
        </div>
      )}
    </>
  );
}
