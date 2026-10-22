type IconProps = { className?: string };

const base = "h-6 w-6";

export function CowIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 14c-2.6-2-6-2.2-7.4-.5-1.4 1.8-.3 5.1 2.4 7.3 1.6 1.3 3.5 2 5 1.9-.4 1.9-.6 3.9-.6 5.9 0 11.3 10.1 20.4 22.6 20.4S54.6 39.9 54.6 28.6c0-2-.2-4-.6-5.9 1.5.1 3.4-.6 5-1.9 2.7-2.2 3.8-5.5 2.4-7.3-1.4-1.7-4.8-1.5-7.4.5-1.3 1-2.3 2.3-2.7 3.5-3.9-4.8-10.6-8-18.3-8s-14.4 3.2-18.3 8c-.4-1.2-1.4-2.5-2.7-3.5Z" />
      <circle cx="24" cy="29" r="3.2" fill="#fff" />
      <circle cx="40" cy="29" r="3.2" fill="#fff" />
      <path
        d="M32 33.5c-5 0-9 2.9-9 6.6 0 3.6 4 6.5 9 6.5s9-2.9 9-6.5c0-3.7-4-6.6-9-6.6Z"
        fill="#fff"
        opacity=".85"
      />
      <circle cx="28.5" cy="40" r="1.6" />
      <circle cx="35.5" cy="40" r="1.6" />
    </svg>
  );
}

export function MilkBottleIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      <path d="M26 4h12v6.5c0 1.5.5 3 1.5 4.2l4.2 5.3c1.5 1.9 2.3 4.2 2.3 6.6V54a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6V26.6c0-2.4.8-4.7 2.3-6.6l4.2-5.3c1-1.2 1.5-2.7 1.5-4.2V4Z" />
      <path d="M20 32h24v22a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V32Z" fill="#fff" opacity=".9" />
    </svg>
  );
}

export function WaterDropIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      <path d="M32 4c-1 0-1.8.5-2.3 1.3C25.4 12 14 26.3 14 38c0 10 8 18 18 18s18-8 18-18C50 26.3 38.6 12 34.3 5.3A2.7 2.7 0 0 0 32 4Z" />
      <path
        d="M24 38c0 6 3.6 10 8 11"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        opacity=".85"
      />
    </svg>
  );
}

export function SolarIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="46" cy="14" r="7" />
      <path
        d="M46 2v4M46 22v4M34 14h4M54 14h4M37.5 5.5l2.8 2.8M51.7 19.7l2.8 2.8M54.5 5.5l-2.8 2.8M40.3 19.7l-2.8 2.8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M16 26h26l8 20H8l8-20Z" />
      <path d="M29 26v20M8 46h42M20 36h26" stroke="#fff" strokeWidth="2" opacity=".75" />
      <path d="M27 46h4v12h-4z" />
      <path d="M18 60h22v4H18z" />
    </svg>
  );
}

export function LeafIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      <path d="M54 6c-28 0-42 10-42 28 0 5 1.6 9.4 4.4 12.8L8 55.2 11.8 59l8.4-8.4C23.7 53.4 28.1 55 33 55c17 0 21-14 21-49Z" />
      <path
        d="M46 14C32 20 22 32 16 48"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity=".8"
      />
    </svg>
  );
}

export function PinIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5C4.5 15.4 12 22 12 22s7.5-6.6 7.5-12.5A7.5 7.5 0 0 0 12 2Zm0 10.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
    </svg>
  );
}

export function FactoryIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 21V9l5 3V9l5 3V9l5 3V4h3v17H3Zm3-3h3v-3H6v3Zm5 0h3v-3h-3v3Zm5 0h3v-3h-3v3Z" />
    </svg>
  );
}

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.6 2h3.2l2 5-2.4 1.6a13.6 13.6 0 0 0 6 6L17 12.2l5 2v3.2A3.6 3.6 0 0 1 18.4 21C9.9 20.4 3.6 14.1 3 5.6A3.6 3.6 0 0 1 6.6 2Z" />
    </svg>
  );
}

export function MailIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.3l-10 6-10-6v-.3Zm0 2.7V18a1.5 1.5 0 0 0 1.5 1.5h17A1.5 1.5 0 0 0 22 18V8.2l-9.5 5.7a1 1 0 0 1-1 0L2 8.2Z" />
    </svg>
  );
}

export function CheckIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={className} aria-hidden="true">
      <path d="m5 13 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
