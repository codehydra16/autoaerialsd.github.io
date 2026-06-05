export default function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="px-12 py-[60px] border-t border-steel flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      <div className="md:flex-1">
        <div className="font-bebas text-[1.4rem] tracking-[0.15em] text-cream">
          Auto<span className="text-amber">.</span>Aerials
        </div>
        <div className="text-[0.8rem] text-smoke mt-1 tracking-[0.08em]">
          San Diego · FAA Part 107 Certified · Est. 2025
        </div>
      </div>
      <ul className="flex flex-wrap gap-8 list-none justify-center md:flex-1">
        <li>
          <a href="https://www.instagram.com/autoaerialssd/" target="_blank" rel="noopener noreferrer" className="text-smoke no-underline font-condensed text-[0.8rem] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-amber">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61589667754041" target="_blank" rel="noopener noreferrer" className="text-smoke no-underline font-condensed text-[0.8rem] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-amber">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@autoaerialssd" target="_blank" rel="noopener noreferrer" className="text-smoke no-underline font-condensed text-[0.8rem] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-amber">
            TikTok
          </a>
        </li>
        <li>
          <button onClick={onBook} className="text-smoke no-underline font-condensed text-[0.8rem] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-amber cursor-pointer bg-transparent border-none">
            Book a Shoot
          </button>
        </li>
        <li>
          <a href="#" className="text-smoke no-underline font-condensed text-[0.8rem] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-amber">
            Contact
          </a>
        </li>
      </ul>
      <div className="text-[0.75rem] text-smoke tracking-[0.1em] md:flex-1 md:text-right">© 2025 Auto Aerials</div>
    </footer>
  )
}
