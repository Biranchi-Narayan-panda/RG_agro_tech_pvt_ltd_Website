import { useState } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

export type Page = "home" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const go = (next: Page) => {
    setPage(next);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-slate-800">
      <SiteHeader page={page} go={go} />
      <main>{page === "home" ? <Home go={go} /> : <Contact />}</main>
      <SiteFooter go={go} />
    </div>
  );
}
