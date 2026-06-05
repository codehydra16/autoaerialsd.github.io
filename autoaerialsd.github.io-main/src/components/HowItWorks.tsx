import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    number: '01',
    title: 'Find Us at a Show',
    desc: 'We set up at local car shows across San Diego. Check our upcoming shows list and look for the Auto Aerials tent.',
  },
  {
    number: '02',
    title: 'We Fly Your Car',
    desc: 'Our licensed FAA Part 107 pilot captures your vehicle from multiple aerial angles. Shots take 10–15 minutes per car.',
  },
  {
    number: '03',
    title: 'You Get the Shot',
    desc: 'Edited, high-resolution photos delivered to your inbox within 48 hours. Print-ready. Social-ready. Show-worthy.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section className="px-12 py-[120px]" id="how">
      <div className="flex items-center gap-4 font-condensed text-[0.72rem] tracking-[0.4em] uppercase text-amber mb-[60px] section-label">
        How It Works
      </div>
      <div ref={ref} className="reveal grid md:grid-cols-3 gap-[2px] bg-steel border border-steel">
        {steps.map((step) => (
          <div key={step.number}
            className="group bg-carbon px-10 py-12 relative overflow-hidden transition-colors duration-300 hover:bg-graphite">
            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(90deg, transparent, #e8a020, transparent)' }} />
            <div className="font-bebas text-[4rem] text-steel leading-none mb-5 transition-colors duration-300 group-hover:text-amber-dim">
              {step.number}
            </div>
            <div className="font-condensed text-[1.3rem] font-bold tracking-[0.08em] uppercase mb-3 text-cream">
              {step.title}
            </div>
            <p className="text-[0.92rem] leading-[1.7] text-smoke">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
