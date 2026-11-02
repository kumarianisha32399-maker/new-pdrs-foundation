import { useEffect, useRef, useState, type ReactNode, type ImgHTMLAttributes } from "react";
import { FALLBACK, resolveImg } from "@/lib/images";
import { useStore } from "@/lib/store";

export function Img({ src, alt, className, ...rest }: { src?: string; alt: string } & Omit<ImgHTMLAttributes<HTMLImageElement>, "src">) {
  const [err, setErr] = useState(false);
  return (
    <img
      src={err ? FALLBACK : resolveImg(src)}
      alt={alt}
      onError={() => setErr(true)}
      className={`object-cover ${className ?? ""}`}
      {...rest}
    />
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy md:text-[2.6rem]">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <Img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full opacity-40" />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-x relative py-20 md:py-28">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl font-semibold leading-tight text-on-dark md:text-6xl">{title}</h1>
        {text && <p className="animate-fade-up mt-5 max-w-2xl text-lg text-on-dark-muted">{text}</p>}
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gold" />
    </section>
  );
}

export function Logo({ light }: { light?: boolean }) {
  const { data } = useStore();
  const name = data.settings.name || "NEW PDRS FOUNDATION";
  return (
    <span className="flex items-center gap-3">
      {data.settings.logo ? (
        <Img src={data.settings.logo} alt={`${name} logo`} className="h-11 w-11 rounded-md bg-surface object-contain" />
      ) : (
        <span className="grid h-11 w-11 place-items-center rounded-md bg-navy font-display text-lg font-semibold text-gold ring-1 ring-gold/40">P</span>
      )}
      <span className="leading-tight">
        <span className={`block font-display text-[1.02rem] font-semibold tracking-wide ${light ? "text-on-dark" : "text-navy"}`}>{name}</span>
        <span className={`block text-[0.66rem] font-semibold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-teal"}`}>Vasai · Maharashtra</span>
      </span>
    </span>
  );
}

export function EmptyState({ title, text }: { title: string; text?: string }) {
  return (
    <div className="card-elev mx-auto max-w-md p-10 text-center">
      <div className="mx-auto mb-4 h-1 w-10 bg-gold" />
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      {text && <p className="mt-2 text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
