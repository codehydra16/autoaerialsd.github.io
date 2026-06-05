import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const shows = [
  {
    date: "JUN 7",
    year: "2025",
    name: "Cars & Coffee San Diego",
    location: "Miramar · 7:00 AM – 11:00 AM",
    badge: "Book Slot",
  },
  {
    date: "JUN 14",
    year: "2025",
    name: "Barona Cruise Night",
    location: "Lakeside · 5:00 PM – 9:00 PM",
    badge: "Book Slot",
  },
  {
    date: "JUN 21",
    year: "2025",
    name: "Chula Vista Auto Expo",
    location: "Chula Vista Bayfront · All Day",
    badge: "Book Slot",
  },
  {
    date: "JUL 4",
    year: "2025",
    name: "La Jolla Concours d'Elegance",
    location: "Scripps Park · 9:00 AM – 4:00 PM",
    badge: "Book Slot",
  },
  {
    date: "JUL 19",
    year: "2025",
    name: "Petco Park Car Show",
    location: "Downtown San Diego · TBD",
    badge: "Notify Me",
  },
];

export default function Shows({ onBook }: { onBook: () => void }) {
  const headerRef = useReveal();
  const listRef = useReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="px-4 sm:px-8 lg:px-12 py-[80px] lg:py-[120px]"
      id="shows"
    >
      <div
        ref={headerRef}
        className="reveal flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12"
      >
        <div>
          <div className="flex items-center gap-4 font-condensed text-[0.72rem] tracking-[0.4em] uppercase text-amber mb-3 section-label">
            Upcoming Shows
          </div>
          <h2 className="font-bebas text-[3.5rem] tracking-[0.04em] leading-none">
            Find Us
            <br />
            Near You
          </h2>
        </div>
        <button
          onClick={onBook}
          className="text-silver font-condensed text-[0.85rem] tracking-[0.2em] uppercase no-underline border-b border-steel transition-colors duration-200 hover:text-cream hover:border-silver py-4 cursor-pointer bg-transparent border-x-0 border-t-0"
        >
          Request a Show →
        </button>
      </div>

      <div ref={listRef} className="reveal flex flex-col gap-[2px]">
        {shows.map((show, i) => (
          <div
            key={i}
            className="grid items-center py-5 sm:py-7 bg-carbon border-l-2 transition-all duration-200 cursor-pointer
              grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr_auto] lg:grid-cols-[100px_1fr_1fr_auto]
              gap-x-4 sm:gap-x-6 gap-y-1 pr-4 sm:pr-8"
            style={{
              borderLeftColor: hovered === i ? "#e8a020" : "transparent",
              background: hovered === i ? "#1a1a1a" : "#111111",
              paddingLeft: hovered === i ? "24px" : "16px",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="font-bebas text-[1.1rem] tracking-[0.08em] text-amber leading-[1.2] row-span-1 sm:row-span-1">
              {show.date}
              <span className="block text-[0.7rem] text-smoke font-condensed tracking-[0.2em] uppercase">
                {show.year}
              </span>
            </div>
            <div className="font-condensed text-[1rem] sm:text-[1.1rem] font-bold tracking-[0.05em] uppercase">
              {show.name}
            </div>
            <div className="text-[0.88rem] text-smoke hidden lg:block">
              {show.location}
            </div>
            <div
              onClick={onBook}
              className={`font-condensed text-[0.7rem] tracking-[0.2em] uppercase px-[14px] py-[6px] border border-amber text-amber whitespace-nowrap transition-all duration-200 hidden sm:block cursor-pointer ${
                hovered === i ? "bg-amber !text-black" : ""
              }`}
            >
              {show.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
