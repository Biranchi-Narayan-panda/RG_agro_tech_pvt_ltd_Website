import { company } from "../data";
import { PinIcon, FactoryIcon, PhoneIcon, MailIcon } from "../components/Icons";

export function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h1 className="font-display text-4xl font-extrabold text-brand-maroon">Contact Us</h1>
        <div className="mx-auto mt-3 h-1 w-36 rounded bg-brand-gold" />
        <p className="mt-5 text-[15px] text-slate-600">
          Reach us at our registered office in Bhubaneswar or at our factory in Balasore, Odisha.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 px-5 sm:grid-cols-2">
        <Card icon={<PinIcon className="h-5 w-5" />} title="Registered Office" lines={company.registeredOffice} />
        <Card icon={<FactoryIcon className="h-5 w-5" />} title="Factory Address" lines={company.factoryAddress} />

        <a
          href={company.phoneHref}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-brand-cream p-6 hover:border-brand-gold"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-maroon text-white">
            <PhoneIcon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-maroon">
              Phone
            </span>
            <span className="block text-lg font-extrabold text-brand-green-dark">{company.phone}</span>
          </span>
        </a>

        <a
          href={`mailto:${company.email}`}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-brand-cream p-6 hover:border-brand-gold"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-maroon text-white">
            <MailIcon className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-maroon">
              Email
            </span>
            <span className="block break-all font-extrabold text-brand-green-dark">{company.email}</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-maroon/10 text-brand-maroon">
          {icon}
        </span>
        <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-maroon">{title}</h2>
      </div>
      <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-slate-700">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </address>
    </div>
  );
}
