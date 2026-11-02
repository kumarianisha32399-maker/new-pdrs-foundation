import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Laptop, Lightbulb, GraduationCap, HeartHandshake, Quote, Calendar } from "lucide-react";
import { useStore, useSeo, fmtDate } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { Img, Reveal, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => pageHead(
    "NEW PDRS FOUNDATION — Education Foundation in Vasai, Maharashtra",
    "An education-focused foundation in Vasai, Maharashtra, building brighter futures through learning and community development.",
  ),
  component: Home,
});

const FOCUS = [
  { Icon: BookOpen, title: "Foundational Learning", text: "Reading, numeracy and study habits that last a lifetime." },
  { Icon: Laptop, title: "Digital Literacy", text: "Safe, confident use of technology for learning." },
  { Icon: Users, title: "Community Education", text: "Learning that happens where people live." },
  { Icon: Lightbulb, title: "Skill Development", text: "Practical skills that open doors to livelihood." },
];

function Home() {
  useSeo("home");
  const { data } = useStore();
  const h = data.home;
  const featuredIds = h.featured.split(",").map((s) => s.trim()).filter(Boolean);
  const pub = data.programs.filter((p) => p.published);
  const programs = (featuredIds.length ? pub.filter((p) => featuredIds.includes(p.id)) : pub).slice(0, 3);
  const gallery = data.gallery.filter((g) => g.featured).slice(0, 6);
  const events = data.events.filter((e) => e.published).slice(0, 2);
  const news = data.news.filter((n) => n.published).slice(0, 1);
  const testimonials = data.testimonials.filter((t) => t.enabled);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <Img src={h.heroImage} alt="Students learning in a bright classroom" className="absolute inset-0 h-full w-full" fetchPriority="high" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-x relative flex min-h-[78vh] flex-col justify-center py-24">
          <span className="eyebrow animate-fade-up">Education Foundation · Vasai, Maharashtra</span>
          <h1 className="animate-fade-up mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] text-on-dark sm:text-5xl md:text-7xl">{h.heroHeading}</h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted md:text-xl">{h.heroDescription}</p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
            <a href={h.btn1Link} className="btn btn-gold">{h.btn1Label} <ArrowRight size={16} /></a>
            <a href={h.btn2Link} className="btn btn-ghost-light">{h.btn2Label}</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gold" />
      </section>

      {h.show_welcome && (
        <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
          <Reveal className="relative">
            <Img src={h.welcomeImage} alt="Teacher guiding students" className="aspect-[4/3] w-full rounded-lg shadow-lift" loading="lazy" />
            <div className="absolute -bottom-6 -right-2 hidden rounded-lg bg-navy p-6 text-on-dark shadow-lift md:block">
              <p className="font-display text-3xl text-gold">2026</p>
              <p className="text-xs uppercase tracking-widest text-on-dark-muted">Incorporated</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHead eyebrow="Welcome" title={h.welcomeTitle} />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{h.welcomeText}</p>
            <Link to="/about" className="btn btn-primary mt-8">Learn about us <ArrowRight size={16} /></Link>
          </Reveal>
        </section>
      )}

      {h.show_vision && (
        <section className="bg-surface py-24">
          <div className="container-x">
            <SectionHead eyebrow="Purpose" title="Our Vision and Mission" center />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[["Our Vision", h.vision, GraduationCap], ["Our Mission", h.mission, HeartHandshake]].map(([t, txt, Icon]: any, i) => (
                <Reveal key={t} delay={i * 100} className="card-elev relative overflow-hidden p-10">
                  <div className="absolute left-0 top-0 h-full w-1 bg-teal" />
                  <Icon className="text-gold" size={32} />
                  <h3 className="mt-5 text-2xl font-semibold text-navy">{t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{txt}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {h.show_initiatives && programs.length > 0 && (
        <section className="container-x py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Programs" title="Education and Learning Initiatives" text="A selection of our planned programs. Sample content is illustrative." />
            <Link to="/programs" className="btn btn-outline">All programs <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <Link to="/programs/$id" params={{ id: p.id }} className="card-elev group block overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="overflow-hidden"><Img src={p.image} alt={p.title} className="aspect-[4/3] w-full transition duration-500 group-hover:scale-105" loading="lazy" /></div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal">{p.category}</span>
                    <h3 className="mt-2 text-xl font-semibold text-navy">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {h.show_focus && (
        <section className="bg-navy py-24 text-on-dark">
          <div className="container-x">
            <span className="eyebrow">Focus Areas</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-[2.6rem]">Our Key Focus Areas</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-on-dark/10 sm:grid-cols-2 lg:grid-cols-4">
              {FOCUS.map(({ Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 80} className="bg-navy p-8 transition hover:bg-navy-deep">
                  <Icon className="text-gold" size={30} />
                  <h3 className="mt-6 text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {h.show_why && (
        <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
          <Reveal>
            <SectionHead eyebrow="Why it matters" title="Why Education Matters" />
            <div className="mt-8 space-y-6">
              {[
                ["Opens opportunity", "Education widens the choices available to young people and their families."],
                ["Builds confidence", "Learning helps individuals participate fully in community and civic life."],
                ["Strengthens communities", "Educated communities are better equipped to solve shared challenges."],
              ].map(([t, d], i) => (
                <div key={t} className="flex gap-5">
                  <span className="font-display text-3xl text-gold">0{i + 1}</span>
                  <div><h3 className="text-lg font-semibold text-navy">{t}</h3><p className="mt-1 text-muted-foreground">{d}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            <Img src="asset:library" alt="Children reading in a library" className="aspect-[3/4] w-full rounded-lg" loading="lazy" />
            <Img src="asset:science" alt="Students in a science activity" className="mt-10 aspect-[3/4] w-full rounded-lg" loading="lazy" />
          </Reveal>
        </section>
      )}

      {h.show_impact && (
        <section className="bg-gold-soft py-20">
          <div className="container-x">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionHead eyebrow="Our Impact" title="Goals we are working towards" />
              <span className="demo-badge">Illustrative demo figures — not actual results</span>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[["500+", "Learners (target)"], ["20", "Sessions (target)"], ["6", "Program areas"], ["10+", "Volunteers (target)"]].map(([n, l]) => (
                <div key={l} className="card-elev p-6 text-center">
                  <p className="font-display text-4xl font-semibold text-navy">{n}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {h.show_gallery && gallery.length > 0 && (
        <section className="container-x py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Gallery" title="Featured Activities" />
            <Link to="/gallery" className="btn btn-outline">View gallery <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g, i) => (
              <Reveal key={g.id} delay={i * 60} className={i === 0 ? "md:row-span-2" : ""}>
                <figure className="group relative h-full overflow-hidden rounded-lg">
                  <Img src={g.image} alt={g.caption} className={`w-full transition duration-500 group-hover:scale-105 ${i === 0 ? "aspect-[4/3] md:h-full md:aspect-auto" : "aspect-[4/3]"}`} loading="lazy" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-sm text-on-dark opacity-0 transition group-hover:opacity-100">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {h.show_news && (events.length > 0 || news.length > 0) && (
        <section className="bg-surface py-24">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead eyebrow="Updates" title="Latest News and Events" />
              <Link to="/events" className="btn btn-outline">All updates <ArrowRight size={16} /></Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {news.map((n) => (
                <Link key={n.id} to="/news/$id" params={{ id: n.id }} className="card-elev group overflow-hidden transition hover:shadow-lift">
                  <Img src={n.image} alt={n.title} className="aspect-[16/10] w-full" loading="lazy" />
                  <div className="p-6"><span className="text-xs font-bold uppercase tracking-widest text-teal">News · {fmtDate(n.date)}</span>
                    <h3 className="mt-2 text-lg font-semibold text-navy group-hover:text-blue">{n.title}</h3></div>
                </Link>
              ))}
              {events.map((e) => (
                <Link key={e.id} to="/events/$id" params={{ id: e.id }} className="card-elev group overflow-hidden transition hover:shadow-lift">
                  <Img src={e.image} alt={e.title} className="aspect-[16/10] w-full" loading="lazy" />
                  <div className="p-6"><span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-teal"><Calendar size={12} /> {fmtDate(e.date)}</span>
                    <h3 className="mt-2 text-lg font-semibold text-navy group-hover:text-blue">{e.title}</h3></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {h.show_testimonials && testimonials.length > 0 && (
        <section className="container-x py-24">
          <SectionHead eyebrow="Voices" title="What people say" center />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.id} className="card-elev p-8">
                <Quote className="text-gold" size={28} />
                <p className="mt-4 font-display text-lg leading-relaxed text-navy">“{t.quote}”</p>
                <p className="mt-5 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {h.show_support && (
        <section className="relative overflow-hidden bg-navy-deep">
          <Img src="asset:library" alt="" aria-hidden className="absolute inset-0 h-full w-full opacity-25" loading="lazy" />
          <div className="container-x relative grid items-center gap-8 py-20 md:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="eyebrow">Get involved</span>
              <h2 className="mt-4 text-3xl font-semibold text-on-dark md:text-5xl">Support Our Mission</h2>
              <p className="mt-4 max-w-xl text-on-dark-muted">Your time, skills and encouragement can help a learner take the next step.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/support" className="btn btn-gold">Ways to support</Link>
              <Link to="/support" hash="volunteer" className="btn btn-ghost-light">Volunteer</Link>
            </div>
          </div>
        </section>
      )}

      {h.show_contact && (
        <section className="container-x py-20">
          <div className="card-elev flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-navy md:text-3xl">Have a question or want to collaborate?</h2>
              <p className="mt-2 text-muted-foreground">Send us a message — we'd be glad to hear from you.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">Contact us <ArrowRight size={16} /></Link>
          </div>
        </section>
      )}
    </>
  );
}
