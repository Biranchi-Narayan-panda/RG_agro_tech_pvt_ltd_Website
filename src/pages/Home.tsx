import heroFarm from "../../public/images/hero-farm.jpg";
import dairyProducts from "../../public/images/dairy-products.jpg";
import solarBio from "../../public/images/solar-bio.jpg";
import waterPlant from "../../public/images/water-plant.jpg";
import { Logo } from "../components/Logo";
import { company, verticals } from "../data";
import type { Page } from "../App";

export function Home({ go }: { go: (p: Page) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <img src={heroFarm} alt="Dairy farm at sunrise" className="h-[440px] w-full object-cover sm:h-[540px]" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <span className="rounded-2xl bg-white p-3 shadow-lg">
            <Logo className="h-20 w-auto" />
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white sm:text-6xl">
            RADHA GOBINDA
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-brand-gold-light sm:text-lg sm:tracking-[0.35em]">
            Agro Tech Private Limited
          </p>
          <p className="mt-3 text-xs text-white sm:text-base">{company.tagline}</p>
          <p className="mt-6 rounded-full border-2 border-white bg-brand-green-dark px-10 py-3 font-display text-2xl font-extrabold text-white sm:text-4xl">
            COMING SOON
          </p>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-brand-green py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 text-center sm:grid-cols-4">
          {[
            { v: "1500", l: "Cows" },
            { v: "30,000", l: "Litres Milk / Day" },
            { v: "5", l: "Business Units" },
            { v: "2", l: "Locations in Odisha" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-100">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Business units */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-display text-3xl font-extrabold text-brand-maroon sm:text-4xl">
            Our Business Verticals
          </h2>
          <div className="mx-auto mt-3 h-1 w-36 rounded bg-brand-gold" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v) => (
              <div key={v.id} className="rounded-2xl border border-slate-200 bg-brand-cream p-6">
                <h3 className="font-bold text-brand-green-dark">{v.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-maroon">
                  {v.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images + text */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
          <img src={dairyProducts} alt="Milk, curd, paneer, butter and ghee" className="w-full rounded-2xl object-cover shadow-lg" />
          <div>
            <h2 className="font-display text-3xl font-extrabold text-brand-maroon">Pure Nutrition, Freshly Made</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
              Our farm at Sana Maitapur, Ranital in Balasore district runs a herd of 1500 Gir, Sahiwal,
              Holstein Friesian and cross-breed cows. Automated milking, instant chilling and in-house
              processing produce milk, curd, paneer, ghee and butter within hours of milking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-extrabold text-brand-green-dark">
              Clean Energy & Green Water
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
              Solar arrays power the sheds and the processing block, a bio power plant turns farm waste
              into energy and manure, and our own bottling plant packages mineral water treated through
              multi-stage RO, UV and ozone.
            </p>
          </div>
          <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2">
            <img src={solarBio} alt="Solar panels and biogas plant" className="h-56 w-full rounded-2xl object-cover shadow-lg" />
            <img src={waterPlant} alt="Mineral water bottling line" className="h-56 w-full rounded-2xl object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="bg-brand-cream py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="font-display text-2xl font-extrabold text-brand-maroon sm:text-3xl">
            Want to know more?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Office addresses, phone and email are on our contact page.
          </p>
          <button
            type="button"
            onClick={() => go("contact")}
            className="mt-6 rounded-full bg-brand-maroon px-8 py-3 text-sm font-bold text-white hover:bg-brand-maroon-dark"
          >
            Visit Contact Page
          </button>
        </div>
      </section>
    </>
  );
}
