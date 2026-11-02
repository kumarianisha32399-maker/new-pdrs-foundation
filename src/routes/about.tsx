import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useStore, useSeo } from "@/lib/store";
import { COMPANY } from "@/lib/defaults";
import { pageHead } from "@/lib/seo";
import { Img, PageHero, Reveal, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Us — NEW PDRS FOUNDATION", "Who we are, our story, vision, mission, values and objectives."),
  component: About,
});

function About() {
  useSeo("about");
  const { data } = useStore();
  const a = data.about;
  const lines = (s: string) => s.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <>
      <PageHero eyebrow="About Us" title="An education foundation rooted in Vasai" text={a.overview} image="asset:teacher" />

      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <Reveal>
          <SectionHead eyebrow="Who We Are" title="People who believe in learning" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{a.whoWeAre}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {[["CIN", COMPANY.cin], ["Incorporated", COMPANY.incorporated], ["Registrar", COMPANY.roc], ["Activity", COMPANY.activity], ["Status", COMPANY.status], ["Class", COMPANY.klass]].map(([k, v]) => (
              <div key={k} className="border-l-2 border-gold pl-3"><dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt><dd className="mt-1 font-semibold text-navy break-all">{v}</dd></div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={100}><Img src={a.image1} alt="Teacher interacting with students" className="aspect-[4/3] w-full rounded-lg shadow-lift" loading="lazy" /></Reveal>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1"><Img src={a.image2} alt="Community education session" className="aspect-[4/3] w-full rounded-lg shadow-lift" loading="lazy" /></Reveal>
          <Reveal className="order-1 lg:order-2">
            <SectionHead eyebrow="Our Story" title="A foundation at the beginning of its journey" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{a.story}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-6 py-24 md:grid-cols-2">
        {[["Our Vision", a.vision], ["Our Mission", a.mission]].map(([t, v]) => (
          <div key={t} className="card-elev border-t-4 border-t-teal p-10">
            <h3 className="text-2xl font-semibold text-navy">{t}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{v}</p>
          </div>
        ))}
      </section>

      <section className="bg-navy py-24 text-on-dark">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our Values</span>
            <ul className="mt-8 space-y-5">
              {lines(a.values).map((v) => {
                const [head, ...rest] = v.split("—");
                return <li key={v} className="border-b border-on-dark/10 pb-5"><p className="font-display text-xl text-gold">{head.trim()}</p>{rest.length > 0 && <p className="mt-1 text-on-dark-muted">{rest.join("—").trim()}</p>}</li>;
              })}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Our Objectives</span>
            <ul className="mt-8 space-y-4">
              {lines(a.objectives).map((o) => <li key={o} className="flex gap-3 text-on-dark-muted"><CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={20} />{o}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <SectionHead eyebrow="Commitment" title="Our Commitment to Education" text={a.commitment} center />
      </section>
    </>
  );
}
