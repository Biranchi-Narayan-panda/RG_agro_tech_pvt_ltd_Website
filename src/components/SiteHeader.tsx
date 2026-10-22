import { Logo } from "./Logo";
import { company } from "../data";
import type { Page } from "../App";

const tabs: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader({ page, go }: { page: Page; go: (p: Page) => void }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 sm:flex-row sm:justify-between">
        <button type="button" onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <span className="rounded-xl bg-brand-cream p-2">
            <Logo className="h-11 w-auto" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-wide text-brand-maroon">
              RADHA GOBINDA
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-brand-green">
              AGRO TECH PRIVATE LIMITED
            </span>
          </span>
        </button>

        <nav className="flex items-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => go(t.id)}
              className={
                page === t.id
                  ? "rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white"
                  : "rounded-full px-5 py-2.5 text-sm font-semibold text-brand-green-dark hover:bg-brand-cream"
              }
            >
              {t.label}
            </button>
          ))}
          <a
            href={company.phoneHref}
            className="hidden rounded-full bg-brand-maroon px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-maroon-dark sm:block"
          >
            {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
