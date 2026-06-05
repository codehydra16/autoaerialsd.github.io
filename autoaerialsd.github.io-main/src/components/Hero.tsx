export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse at 60% 40%, rgba(232,160,32,0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(192,40,26,0.06) 0%, transparent 50%),
          linear-gradient(160deg, #0d0d0d 0%, #080808 100%)`
      }} />

      {/* Hero Visual */}
      <div className="absolute inset-0 flex items-center justify-center anim-fadeIn">
        <div className="relative w-full max-w-[800px] h-[380px]">
          {/* Ground grid */}
          <div className="absolute bottom-[-20px] left-1/2 w-[900px] h-[200px]" style={{
            background: `repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(232,160,32,0.04) 80px),
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(232,160,32,0.04) 40px)`,
            transform: 'translateX(-50%) perspective(400px) rotateX(70deg)',
            opacity: 0.8,
          }} />

          {/* Car silhouette */}
          <div className="absolute bottom-[60px] left-1/2" style={{
            transform: 'translateX(-50%) perspective(900px) rotateX(38deg) rotateZ(-8deg)',
            width: 680, height: 280,
            filter: 'drop-shadow(0 60px 80px rgba(232,160,32,0.15))',
          }}>
            {/* Body */}
            <div className="absolute bottom-[50px] rounded-[14px_14px_4px_4px]" style={{
              left: 60, right: 60, height: 90,
              background: 'linear-gradient(135deg, #1c1c1c 0%, #2e2e2e 40%, #1a1a1a 100%)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)',
            }} />
            {/* Roof */}
            <div className="absolute bottom-[130px] rounded-[10px_10px_0_0]" style={{
              left: 160, right: 160, height: 70,
              background: 'linear-gradient(135deg, #222 0%, #333 50%, #1e1e1e 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }} />
            {/* Hood */}
            <div className="absolute bottom-[50px] rounded-[8px_0_0_4px]" style={{
              left: 30, width: 160, height: 50,
              background: 'linear-gradient(120deg, #242424, #1a1a1a)',
              transform: 'skewX(-10deg)',
            }} />
            {/* Trunk */}
            <div className="absolute bottom-[50px] rounded-[0_8px_4px_0]" style={{
              right: 30, width: 120, height: 40,
              background: 'linear-gradient(120deg, #1a1a1a, #222)',
              transform: 'skewX(-10deg)',
            }} />
            {/* Wheels */}
            {[
              { style: { left: 80 }, shadow: '0 0 0 4px #1a1a1a, 0 0 0 6px rgba(232,160,32,0.3)' },
              { style: { left: 180 }, shadow: '0 0 0 4px #1a1a1a, 0 0 0 6px rgba(232,160,32,0.2)' },
              { style: { right: 180 }, shadow: '0 0 0 4px #1a1a1a, 0 0 0 6px rgba(232,160,32,0.2)' },
              { style: { right: 80 }, shadow: '0 0 0 4px #1a1a1a, 0 0 0 6px rgba(232,160,32,0.3)' },
            ].map((w, i) => (
              <div key={i} className="absolute bottom-[20px] w-[60px] h-[60px] rounded-full" style={{
                ...w.style,
                background: 'radial-gradient(circle, #333 30%, #111 70%, #222 100%)',
                boxShadow: w.shadow,
              }} />
            ))}
          </div>

          {/* Reticle */}
          <div className="reticle-pulse absolute" style={{ top: '30%', left: '50%', width: 200, height: 200 }}>
            <div className="absolute inset-0 rounded-full border border-amber/40" />
            <div className="absolute rounded-full border border-amber/20" style={{ inset: 20 }} />
            {/* Cross */}
            <div className="absolute top-1/2 left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-amber opacity-60" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber opacity-60" />
            </div>
          </div>
        </div>
      </div>

      {/* Drone HUD */}
      <div className="absolute top-[30%] right-12 flex flex-col items-center gap-2 anim-fadeIn-delay">
        <div className="font-condensed text-[0.65rem] tracking-[0.2em] text-amber border border-amber/20 bg-amber/[0.08] px-[10px] py-1 whitespace-nowrap">ALT: 120 FT</div>
        <div className="font-condensed text-[0.65rem] tracking-[0.2em] text-amber border border-amber/20 bg-amber/[0.08] px-[10px] py-1 whitespace-nowrap">4K · RAW</div>
        <div className="font-condensed text-[0.65rem] tracking-[0.2em] text-amber border border-amber/20 bg-amber/[0.08] px-[10px] py-1 whitespace-nowrap">■ REC</div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent 30%, rgba(8,8,8,0.5) 70%, #080808 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 px-12 pb-20 max-w-[750px] anim-slideUp">
        <div className="font-condensed text-[0.75rem] tracking-[0.35em] uppercase text-amber mb-4">
          Drone Photography · Car Shows · Private Shoots
        </div>
        <h1 className="font-bebas leading-[0.95] tracking-[0.03em] mb-6" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}>
          Your Car.<br />
          <span className="text-amber">From Above.</span>
        </h1>
        <p className="text-[1.05rem] leading-[1.7] text-silver max-w-[480px] mb-10">
          Professional aerial photography for private car owners and enthusiasts. We come to your show, you get the shot.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a href="#shows"
            className="clip-btn bg-amber text-black px-9 py-4 font-condensed text-[0.9rem] font-bold tracking-[0.2em] uppercase no-underline transition-all duration-200 hover:bg-[#ffb830] hover:-translate-y-0.5">
            Find a Show Near You
          </a>
          <a href="#portfolio"
            className="text-silver py-4 font-condensed text-[0.85rem] tracking-[0.2em] uppercase no-underline border-b border-steel transition-colors duration-200 hover:text-cream hover:border-silver">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
