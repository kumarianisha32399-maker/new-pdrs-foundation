import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin } from "lucide-react";
import { useStore, useSeo, uid } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Us — NEW PDRS FOUNDATION", "Registered office in Vasai, Thane, Maharashtra. Send us a message."),
  component: Contact,
});

const empty = { name: "", email: "", phone: "", subject: "", message: "" };

function Contact() {
  useSeo("contact");
  const { data, update } = useStore();
  const [f, setF] = useState(empty);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (f.name.trim().length < 2) return toast.error("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return toast.error("Please enter a valid email.");
    if (f.phone && !/^[0-9+\-\s]{7,15}$/.test(f.phone)) return toast.error("Please enter a valid phone number.");
    if (f.message.trim().length < 10) return toast.error("Message should be at least 10 characters.");
    update("messages", [{ id: uid(), ...f, date: new Date().toISOString(), read: false }, ...data.messages]);
    setF(empty);
    toast.success("Thank you! Your message has been received.");
  };
  const inp = (k: keyof typeof empty, label: string, type = "text") => (
    <label className="block text-sm font-medium">{label}
      <input type={type} className="field mt-1.5" value={f[k]} maxLength={200} onChange={(e) => setF({ ...f, [k]: e.target.value })} />
    </label>
  );
  return (
    <>
      <PageHero eyebrow="Contact Us" title="We'd be glad to hear from you" image="asset:seminar" />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <div className="card-elev p-8">
            <h2 className="text-2xl font-semibold text-navy">Registered Office</h2>
            <p className="mt-4 flex gap-2 text-muted-foreground"><MapPin className="shrink-0 text-gold" size={18} />{data.settings.address}</p>
            {data.settings.phone && <p className="mt-3">Phone: {data.settings.phone}</p>}
            {data.settings.email && <p className="mt-1">Email: {data.settings.email}</p>}
          </div>
          <div className="card-elev grid aspect-[4/3] place-items-center bg-muted p-8 text-center">
            <div><MapPin className="mx-auto text-teal" size={32} /><p className="mt-3 font-semibold text-navy">Map location placeholder</p><p className="text-sm text-muted-foreground">Reshma Enclave, Nala, Vasai – 401203</p></div>
          </div>
        </div>
        <form onSubmit={submit} className="card-elev grid gap-4 p-8 sm:grid-cols-2">
          {inp("name", "Name *")}{inp("email", "Email *", "email")}{inp("phone", "Phone")}{inp("subject", "Subject")}
          <label className="block text-sm font-medium sm:col-span-2">Message *
            <textarea className="field mt-1.5 min-h-36" maxLength={1000} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          </label>
          <button className="btn btn-primary sm:col-span-2">Send message</button>
        </form>
      </section>
    </>
  );
}
