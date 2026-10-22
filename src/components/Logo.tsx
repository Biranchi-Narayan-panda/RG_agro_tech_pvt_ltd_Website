import { useId } from "react";

type Props = { className?: string };

/* ------------------------------------------------------------------ */
/*  RG brand mark – orange cow head, maroon "RG", rising sun & swoosh  */
/* ------------------------------------------------------------------ */

const SUN = { cx: 990, cy: 262, r: 100 };

const rad = (d: number) => (d * Math.PI) / 180;
const pt = (ang: number, r: number) =>
  `${(SUN.cx + r * Math.cos(rad(ang))).toFixed(1)} ${(SUN.cy + r * Math.sin(rad(ang))).toFixed(1)}`;

/** 16 sharp rays fanning from the upper-left round to the lower-right. */
const SUN_RAYS = Array.from({ length: 16 }, (_, i) => {
  const a = -150 + (185 * i) / 15;
  const long = i % 2 === 0;
  const w = long ? 4.6 : 4.2;
  return `M${pt(a - w, 90)} L${pt(a, long ? 172 : 140)} L${pt(a + w, 90)} Z`;
}).join(" ");

/** Area hidden behind the swoosh (sun only shows outside it). */
const SUN_HULL =
  "M778 238 C850 226 930 219 992 220 A60 60 0 0 1 1052 280 L1052 537 L540 537 L540 238 Z";

/** Orange swoosh: thin arc over the G, down the right side, underline to the left. */
const FRAME =
  "M540 524 C570 530 625 537 700 537 L1052 537 L1052 280 A60 60 0 0 0 992 220 " +
  "C930 220 850 226 778 238 C850 234 930 236 990 242 A37 37 0 0 1 1027 279 " +
  "L1027 512 L700 512 C625 512 570 518 540 524 Z";

const R_PATH =
  "M462 229 L676 229 A62 62 0 0 1 738 291 L738 331 A62 62 0 0 1 676 393 L506 393 L506 500 L462 500 Z " +
  "M506 273 L506 349 L674 349 A20 20 0 0 0 694 329 L694 293 A20 20 0 0 0 674 273 Z " +
  "M578 360 L636 360 L812 565 L754 565 Z";

const G_PATH =
  "M1005 260 L796 260 A36 36 0 0 0 760 296 L760 464 A36 36 0 0 0 796 500 L969 500 " +
  "A36 36 0 0 0 1005 464 L1005 378 L877 378 L877 422 L961 422 L961 444 A12 12 0 0 1 949 456 " +
  "L816 456 A12 12 0 0 1 804 444 L804 316 A12 12 0 0 1 816 304 L1005 304 Z";

const COW =
  "M168 250 C186 232 228 222 262 236 C246 214 238 178 258 150 C256 176 266 200 292 214 " +
  "C312 202 352 200 374 214 C400 200 410 176 408 150 C428 178 420 214 404 236 L414 246 " +
  "C436 238 462 240 482 256 C462 272 440 280 422 282 C430 300 440 318 448 332 " +
  "C464 346 468 386 444 402 C424 414 398 412 380 404 C372 420 374 436 388 448 " +
  "C440 458 512 462 570 478 C545 532 470 606 368 612 C282 616 214 572 200 502 " +
  "C188 432 212 340 252 288 C224 282 190 272 168 250 Z";

/** Painted in order inside the cow mask: cut = see-through, keep = orange restored. */
const COW_DETAILS: { d: string; cut: boolean; stroke?: number }[] = [
  // ear insides
  { cut: true, d: "M184 251 C202 240 230 238 250 250 C230 258 206 260 184 251 Z" },
  { cut: true, d: "M428 259 C442 252 460 252 472 258 C458 266 442 268 428 259 Z" },
  // white blaze running down into the muzzle
  {
    cut: true,
    d: "M334 236 C352 226 378 230 394 244 C402 262 410 288 424 312 C432 324 436 332 438 340 C456 350 458 384 438 393 C420 400 404 396 398 384 C392 372 396 356 404 346 C390 330 372 306 360 286 C350 270 338 256 334 236 Z",
  },
  // muzzle line + mouth
  { cut: false, stroke: 5, d: "M402 348 C414 337 432 335 446 343" },
  { cut: false, stroke: 4, d: "M403 384 C414 391 428 392 441 387" },
  // eye + eyebrow
  { cut: true, d: "M296 291 C304 279 324 277 338 287 C328 298 308 300 296 291 Z" },
  { cut: true, d: "M292 277 C304 265 328 263 342 273 C328 269 306 271 292 277 Z" },
  // forehead curl, cheek swirl, jaw line
  { cut: true, stroke: 5, d: "M300 230 C308 214 332 210 344 222 C337 218 327 222 327 231" },
  { cut: true, stroke: 6, d: "M296 334 C300 360 330 372 350 356 C358 346 352 334 340 336" },
  { cut: true, stroke: 5, d: "M292 372 C318 400 348 410 378 405" },
  // neck flames
  { cut: true, d: "M220 452 C208 430 216 406 234 392 C230 412 236 430 248 442 C240 452 230 456 220 452 Z" },
  { cut: true, d: "M232 396 C226 382 232 368 244 360 C242 374 246 384 254 392 C248 398 240 400 232 396 Z" },
  // flowing waves – cut through the edge to form pointed ribbon tips
  {
    cut: true,
    d: "M250 492 C282 532 344 542 410 532 C470 524 530 500 586 482 C530 510 470 536 410 544 C342 554 280 540 250 492 Z",
  },
  {
    cut: true,
    d: "M230 530 C264 576 340 588 410 580 C466 574 522 548 564 522 C522 556 466 586 410 592 C336 600 260 584 230 530 Z",
  },
];

export function Logo({ className = "h-12 w-auto" }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const id = (name: string) => `rg-${name}-${uid}`;
  const ref = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      viewBox="162 88 1005 532"
      className={className}
      role="img"
      aria-label="Radha Gobinda Agro Tech logo"
    >
      <defs>
        <radialGradient id={id("cow")} cx="360" cy="400" r="270" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f6a127" />
          <stop offset="0.5" stopColor="#e8741c" />
          <stop offset="1" stopColor="#b52e17" />
        </radialGradient>
        <radialGradient
          id={id("sun")}
          cx={SUN.cx}
          cy={SUN.cy}
          r="185"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fbb437" />
          <stop offset="0.55" stopColor="#f39023" />
          <stop offset="1" stopColor="#e05a1a" />
        </radialGradient>
        <linearGradient id={id("frame")} x1="540" y1="0" x2="1052" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b9331a" />
          <stop offset="0.55" stopColor="#f29a24" />
          <stop offset="1" stopColor="#de651b" />
        </linearGradient>
        <linearGradient id={id("text")} x1="0" y1="229" x2="0" y2="565" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9b2318" />
          <stop offset="1" stopColor="#6b0e12" />
        </linearGradient>

        <mask id={id("sunMask")} maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="720">
          <rect width="1280" height="720" fill="#fff" />
          <path d={SUN_HULL} fill="#000" stroke="#000" strokeWidth="18" strokeLinejoin="round" />
        </mask>

        <mask id={id("cowMask")} maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="720">
          <rect width="1280" height="720" fill="#fff" />
          {COW_DETAILS.map((l, i) => {
            const color = l.cut ? "#000" : "#fff";
            return l.stroke ? (
              <path
                key={i}
                d={l.d}
                fill="none"
                stroke={color}
                strokeWidth={l.stroke}
                strokeLinecap="round"
              />
            ) : (
              <path key={i} d={l.d} fill={color} />
            );
          })}
        </mask>
      </defs>

      {/* rising sun */}
      <g mask={ref("sunMask")} fill={ref("sun")}>
        <circle cx={SUN.cx} cy={SUN.cy} r={SUN.r} />
        <path d={SUN_RAYS} />
      </g>

      {/* swoosh frame */}
      <path d={FRAME} fill={ref("frame")} />

      {/* RG letters */}
      <path d={R_PATH} fill={ref("text")} />
      <path d={G_PATH} fill={ref("text")} />

      {/* cow head */}
      <path d={COW} fill={ref("cow")} mask={ref("cowMask")} />
      <circle cx="318" cy="288" r="7" fill="#8a1c12" />
      <ellipse cx="438" cy="366" rx="6" ry="9" transform="rotate(-20 438 366)" fill="#d0561c" />
    </svg>
  );
}
