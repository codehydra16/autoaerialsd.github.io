import { useState, useEffect } from "react";

const links = [
  { href: "#how", label: "How It Works" },
  { href: "#portfolio", label: "Gallery" },
  { href: "#shows", label: "Shows" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-5 md:py-6"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.97), transparent)",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-bebas text-[1.6rem] tracking-[0.15em] text-cream no-underline z-[101] relative"
        >
          Auto<span className="text-amber">.</span>Aerials
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-silver no-underline font-condensed text-[0.85rem] tracking-[0.2em] uppercase transition-colors duration-200 hover:text-amber"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onBook}
              className="bg-amber text-black no-underline font-condensed font-bold text-[0.85rem] tracking-[0.15em] uppercase px-[22px] py-[10px] transition-colors duration-200 hover:bg-[#ffb830] cursor-pointer border-none"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden relative z-[101] flex flex-col justify-center items-center w-10 h-10 gap-[6px] cursor-pointer bg-transparent border-none p-0"
        >
          <span
            className="block h-[1.5px] bg-cream rounded-full transition-all duration-300 origin-center"
            style={{
              width: 26,
              transform: open ? "translateY(7.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-[1.5px] bg-cream rounded-full transition-all duration-300"
            style={{
              width: 26,
              opacity: open ? 0 : 1,
              transform: open ? "scaleX(0)" : "none",
            }}
          />
          <span
            className="block h-[1.5px] bg-cream rounded-full transition-all duration-300 origin-center"
            style={{
              width: 26,
              transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu overlay */}
      <div
        className="fixed inset-0 z-[99] md:hidden flex flex-col justify-center items-start px-8 transition-all duration-500"
        style={{
          background: "#080808",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-12px)",
        }}
      >
        <ul className="list-none flex flex-col gap-2 w-full">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.4s ease ${
                  0.1 + i * 0.07
                }s, transform 0.4s ease ${0.1 + i * 0.07}s`,
              }}
            >
              <a
                href={l.href}
                onClick={handleLinkClick}
                className="font-bebas text-[3rem] tracking-[0.06em] text-cream no-underline leading-none block py-3 border-b border-steel transition-colors duration-200 hover:text-amber"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(-16px)",
              transition: `opacity 0.4s ease ${
                0.1 + links.length * 0.07
              }s, transform 0.4s ease ${0.1 + links.length * 0.07}s`,
            }}
            className="mt-6"
          >
            <button
              onClick={() => { handleLinkClick(); onBook() }}
              className="inline-block clip-btn bg-amber text-black no-underline font-condensed font-bold text-[0.95rem] tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200 hover:bg-[#ffb830] cursor-pointer border-none"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Bottom tagline */}
        <p
          className="absolute bottom-10 left-8 font-condensed text-[0.72rem] tracking-[0.3em] uppercase text-smoke"
          style={{
            opacity: open ? 1 : 0,
            transition: `opacity 0.4s ease 0.45s`,
          }}
        >
          San Diego · FAA Part 107 Certified
        </p>
      </div>
    </>
  );
}
