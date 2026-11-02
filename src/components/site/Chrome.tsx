import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Menu, X, Facebook, Instagram, Linkedin, Youtube, Twitter, Lock } from "lucide-react";
import { useStore } from "@/lib/store";
import { COMPANY } from "@/lib/defaults";
import { Logo } from "./ui";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/initiatives", label: "Our Initiatives" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Socials({ className = "" }: { className?: string }) {
  const { data } = useStore();
  const s = data.settings;
  const items = [
    { url: s.facebook, Icon: Facebook, label: "Facebook" },
    { url: s.instagram, Icon: Instagram, label: "Instagram" },
    { url: s.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: s.youtube, Icon: Youtube, label: "YouTube" },
    { url: s.x, Icon: Twitter, label: "X" },
  ].filter((i) => i.url);
  if (!items.length) return null;
  return (
    <div className={`flex gap-2 ${className}`}>
      {items.map(({ url, Icon, label }) => (
        <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}
          className="grid h-9 w-9 place-items-center rounded-md border border-on-dark/20 text-on-dark-muted transition hover:border-gold hover:text-gold">
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

export function Header() {
  const { data } = useStore();
  const [open, setOpen] = useState(false);
  const s = data.settings;
  return (
    <>
      <div className="hidden bg-navy-deep text-on-dark-muted md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <span className="font-semibold tracking-wide text-on-dark">{s.name}</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-gold" /> Vasai, Maharashtra</span>
            {s.phone && <a href={`tel:${s.phone}`} className="flex items-center gap-1.5 hover:text-gold"><Phone size={13} className="text-gold" />{s.phone}</a>}
            {s.email && <a href={`mailto:${s.email}`} className="flex items-center gap-1.5 hover:text-gold"><Mail size={13} className="text-gold" />{s.email}</a>}
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Link to="/" onClick={() => setOpen(false)}><Logo /></Link>
          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition hover:text-blue"
                activeProps={{ className: "text-blue after:block after:h-0.5 after:bg-gold after:mt-1" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/support" className="btn btn-gold hidden sm:inline-flex">Support Us</Link>
            <button className="btn btn-outline px-3 xl:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="animate-fade-up border-t border-border bg-surface xl:hidden">
            <div className="container-x flex flex-col py-3">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
                  className="border-b border-border/60 py-3 text-base font-medium" activeProps={{ className: "text-blue" }}>
                  {n.label}
                </Link>
              ))}
              <Link to="/support" onClick={() => setOpen(false)} className="btn btn-gold mt-4">Donate / Support Us</Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function Footer() {
  const { data } = useStore();
  const s = data.settings;
  const col = "text-sm text-on-dark-muted transition hover:text-gold";
  return (
    <footer className="bg-navy-deep text-on-dark">
      <div className="h-1 bg-gold" />
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">{s.description}</p>
          <Socials className="mt-6" />
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg">Foundation</h4>
          <ul className="space-y-2.5">
            <li><Link to="/" className={col}>Home</Link></li>
            <li><Link to="/about" className={col}>About Us</Link></li>
            <li><Link to="/programs" className={col}>Our Programs</Link></li>
            <li><Link to="/initiatives" className={col}>Our Initiatives</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg">Explore</h4>
          <ul className="space-y-2.5">
            <li><Link to="/gallery" className={col}>Gallery</Link></li>
            <li><Link to="/events" className={col}>Events</Link></li>
            <li><Link to="/events" hash="news" className={col}>News</Link></li>
            <li><Link to="/contact" className={col}>Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg">Registered Office</h4>
          <p className="flex gap-2 text-sm leading-relaxed text-on-dark-muted"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" />{s.address}</p>
          {s.phone && <p className="mt-3 flex gap-2 text-sm text-on-dark-muted"><Phone size={16} className="text-gold" />{s.phone}</p>}
          {s.email && <p className="mt-3 flex gap-2 text-sm text-on-dark-muted"><Mail size={16} className="text-gold" />{s.email}</p>}
          <p className="mt-4 text-xs text-on-dark-muted/80">CIN: {COMPANY.cin}</p>
        </div>
      </div>
      <div className="border-t border-on-dark/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-on-dark-muted md:flex-row">
          <p>© {new Date().getFullYear()} {s.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
            <Link to="/admin/login" className="flex items-center gap-1 hover:text-gold"><Lock size={12} /> Admin Login</Link>
          </div>
          <p>Designed and development by SOSynch Ai Tech</p>
        </div>
      </div>
    </footer>
  );
}
