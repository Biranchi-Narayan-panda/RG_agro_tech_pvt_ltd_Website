import { Logo } from "./Logo";
import { company } from "../data";
import type { Page } from "../App";

export function SiteFooter({ go }: { go: (p: Page) => void }) {
  return (
    <footer className="bg-brand-green-dark text-emerald-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-4">
        <div>
          <span className="rounded-xl bg-white p-2 inline-block">
            <Logo className="h-11 w-auto" />
          </span>
          <p className="mt-4 text-sm leading-relaxed text-emerald-100/80">{company.tagline}</p>
        </div>

        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-gold-light">
            Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <button type="button" onClick={() => go("home")} className="hover:text-brand-gold-light">
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => go("contact")}
                className="hover:text-brand-gold-light"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-gold-light">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={company.phoneHref} className="font-semibold text-white hover:text-brand-gold-light">
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="break-all font-semibold text-white hover:text-brand-gold-light"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-gold-light">
            Working Hours:
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="font-semibold text-white hover:text-brand-gold-light">
                <p>Mon – Fri: 10:00 AM to 6:00 PM</p>
              </a>
            </li>
            <li>
              <a
                
                className="break-all font-semibold text-white hover:text-brand-gold-light"
              >
                Sat, Sun & Govt Holidays : Closed
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-emerald-100/70">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
