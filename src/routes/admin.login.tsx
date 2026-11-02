import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { login } from "@/lib/store";
import { pageHead } from "@/lib/seo";
import { Logo } from "@/components/site/ui";

export const Route = createFileRoute("/admin/login")({
  head: () => pageHead("Admin Login — NEW PDRS FOUNDATION", "Demo admin sign-in."),
  component: AdminLogin,
});

function AdminLogin() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [ok, setOk] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(u, p)) { setOk(true); toast.success("Signed in (demo)."); }
    else toast.error("Invalid username or password.");
  };
  return (
    <div className="grid min-h-screen place-items-center bg-navy-deep p-4">
      <form onSubmit={submit} className="card-elev w-full max-w-sm p-8">
        <Logo />
        <h1 className="mt-6 text-2xl font-semibold text-navy">Admin Login</h1>
        <p className="demo-badge mt-2">Demo only — mock authentication, not secure</p>
        {ok ? <p className="mt-6 text-sm text-muted-foreground">You're signed in. The admin dashboard is not finished yet.</p> : <>
          <input className="field mt-6" placeholder="Username" value={u} onChange={(e) => setU(e.target.value)} />
          <input className="field mt-3" type="password" placeholder="Password" value={p} onChange={(e) => setP(e.target.value)} />
          <button className="btn btn-primary mt-5 w-full">Sign in</button>
        </>}
        <Link to="/" className="mt-4 block text-center text-sm text-blue">← Back to website</Link>
      </form>
    </div>
  );
}
