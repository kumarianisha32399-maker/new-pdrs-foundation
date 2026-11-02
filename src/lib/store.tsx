import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { defaultData, type SiteData } from "./defaults";
import { resolveImg } from "./images";

const KEY = "pdrs_site_data_v1";
const AUTH_KEY = "pdrs_admin_session";

type Ctx = {
  data: SiteData;
  ready: boolean;
  update: <K extends keyof SiteData>(key: K, value: SiteData[K]) => boolean;
  reset: () => void;
};
const StoreCtx = createContext<Ctx | null>(null);

export const uid = () => Math.random().toString(36).slice(2, 10);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(defaultData);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        const merged: any = { ...defaultData };
        for (const k of Object.keys(defaultData)) {
          const d = (defaultData as any)[k];
          if (saved[k] === undefined) continue;
          merged[k] = Array.isArray(d) ? saved[k] : { ...d, ...saved[k] };
        }
        setData(merged);
      }
    } catch { /* ignore corrupt storage */ }
    setReady(true);
  }, []);

  const update: Ctx["update"] = useCallback((key, value) => {
    let ok = true;
    setData((prev) => {
      const next = { ...prev, [key]: value };
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        ok = false;
        toast.error("Storage is full. Try smaller images or remove unused ones.");
        return prev;
      }
      return next;
    });
    return ok;
  }, []);

  const reset = () => {
    localStorage.removeItem(KEY);
    setData(defaultData);
  };

  // Dynamic favicon from settings
  useEffect(() => {
    if (!ready || !data.settings.favicon) return;
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    link.href = resolveImg(data.settings.favicon);
  }, [ready, data.settings.favicon]);

  return <StoreCtx.Provider value={{ data, ready, update, reset }}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const c = useContext(StoreCtx);
  if (!c) throw new Error("useStore outside provider");
  return c;
}

/** Applies admin-managed SEO values on the client (route head() provides SSR defaults). */
export function useSeo(page: string) {
  const { data, ready } = useStore();
  useEffect(() => {
    if (!ready) return;
    const s: any = data.seo;
    if (s[`${page}_title`]) document.title = s[`${page}_title`];
    const set = (sel: string, attr: string, val: string) => {
      if (!val) return;
      let el = document.head.querySelector<HTMLMetaElement>(sel);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr.split("=")[0], attr.split("=")[1]); document.head.appendChild(el); }
      el.content = val;
    };
    set("meta[name='description']", "name=description", s[`${page}_description`]);
    set("meta[name='keywords']", "name=keywords", s.keywords);
  }, [ready, page, data.seo]);
}

// ---- Mock admin auth (demo only — NOT production security) ----
export const DEMO_USER = "admin";
export const DEMO_PASS = "Admin@123";
export const isAuthed = () => typeof window !== "undefined" && localStorage.getItem(AUTH_KEY) === "1";
export const login = (u: string, p: string) => {
  if (u.trim() === DEMO_USER && p === DEMO_PASS) { localStorage.setItem(AUTH_KEY, "1"); return true; }
  return false;
};
export const logout = () => localStorage.removeItem(AUTH_KEY);

export const fmtDate = (d: string) => {
  const t = new Date(d + "T00:00:00");
  return isNaN(t.getTime()) ? d : t.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};
