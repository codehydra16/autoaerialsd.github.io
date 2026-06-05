import { useReveal } from "../hooks/useReveal";

const photos = [
  {
    src: "/images/gallery-1.jpg",
    label: "1967 Ford Mustang · Pony Club Show",
    tag: "AERIAL · HERO SHOT",
    span: true,
  },
  {
    src: "/images/gallery-2.jpg",
    label: "Porsche 911 · Cars & Coffee SD",
    tag: "TOP DOWN",
  },
  {
    src: "/images/gallery-3.jpg",
    label: "Ferrari 488 · Miramar Show",
    tag: "45° ANGLE",
  },
  {
    src: "/images/gallery-4.jpg",
    label: "Lamborghini Huracán · Private",
    tag: "ORBIT SHOT",
  },
  {
    src: "/images/gallery-5.jpg",
    label: "Dodge Challenger · Sunset Session",
    tag: "DUSK SHOOT",
  },
];

// Placeholder dimensions per slot (width x height at desktop)
// Slot 0 (hero, spans 2 rows): ~560 x 483px
// Slots 1–4 (small): ~280 x 240px and ~280 x 200px
const placeholderSizes = [
  { w: 560, h: 483 },
  { w: 280, h: 240 },
  { w: 280, h: 240 },
  { w: 280, h: 200 },
  { w: 280, h: 200 },
];

export default function Portfolio() {
  const ref = useReveal();

  return (
    <section
      className="px-4 sm:px-8 lg:px-12 pb-[80px] lg:pb-[120px] pt-[60px] lg:pt-[80px] bg-carbon"
      id="portfolio"
    >
      <div className="flex items-center gap-4 font-condensed text-[0.72rem] tracking-[0.4em] uppercase text-amber mb-[60px] section-label">
        Gallery
      </div>

      {/* Mobile: single col → sm: 2-col → lg: asymmetric 3-col */}
      <div
        ref={ref}
        className="reveal grid gap-[3px] grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:2fr_1fr_1fr] lg:[grid-template-rows:280px_200px]"
      >
        {photos.map((photo, i) => {
          const { w, h } = placeholderSizes[i];
          return (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer bg-graphite
                ${photo.span ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
              `}
            >
              <img
                src={photo.src}
                alt={photo.label}
                width={w}
                height={h}
                onError={(e) => {
                  // Show a styled placeholder when image is missing
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = "flex";
                }}
                className="w-full h-[200px] sm:h-[240px] lg:h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
              />

              {/* Fallback placeholder shown when image fails / not yet added */}
              <div
                className="w-full h-[200px] sm:h-[240px] lg:h-full hidden flex-col items-center justify-center gap-3 transition-transform duration-[600ms] group-hover:scale-[1.04]"
                style={{ background: "#161616" }}
              >
                {/* Camera drone icon */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(232,160,32,0.35)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9h2l1-2h2M22 9h-2l-1-2h-2M9 7h6M12 7v2M8 9a4 4 0 1 0 8 0" />
                  <circle cx="7" cy="18" r="1.5" />
                  <circle cx="17" cy="18" r="1.5" />
                  <line x1="2" y1="9" x2="22" y2="9" />
                  <rect x="9" y="11" width="6" height="4" rx="1" />
                </svg>
                <span
                  className="font-bebas text-[0.78rem] tracking-[0.3em]"
                  style={{ color: "rgba(232,160,32,0.3)" }}
                >
                  {photo.tag}
                </span>
                <span
                  className="font-condensed text-[0.65rem] tracking-[0.15em] uppercase"
                  style={{ color: "rgba(170,170,170,0.25)" }}
                >
                  {w} × {h}px
                </span>
              </div>

              {/* Hover label */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 font-condensed text-[0.78rem] tracking-[0.18em] uppercase text-silver opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.9), transparent)",
                }}
              >
                {photo.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
