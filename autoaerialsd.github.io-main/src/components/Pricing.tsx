import { useReveal } from '../hooks/useReveal'

const plans = [
  {
    tier: 'Essential',
    price: '79',
    desc: 'Perfect for a quick keepsake or social post.',
    features: ['3 aerial photos', 'Standard edit', 'Web-res delivery', '48hr turnaround'],
    featured: false,
    btnClass: 'border border-steel text-silver hover:border-amber hover:text-amber',
  },
  {
    tier: 'Signature',
    price: '149',
    desc: 'The full aerial experience. Our most popular package.',
    features: ['8 aerial photos', 'Premium retouching', 'Print-ready files', '24hr turnaround', '1 short video clip'],
    featured: true,
    btnClass: 'bg-amber text-black hover:bg-[#ffb830]',
  },
  {
    tier: 'Elite',
    price: '249',
    desc: 'For collectors, dealers, and show winners.',
    features: ['15+ aerial photos', 'Cinematic edit', 'Full 4K video', 'Same-day preview', 'Private shoot option'],
    featured: false,
    btnClass: 'border border-steel text-silver hover:border-amber hover:text-amber',
  },
]

interface Props {
  onBook: (pkg: string) => void
}

export default function Pricing({ onBook }: Props) {
  const ref = useReveal()

  return (
    <section className="px-12 py-[120px] bg-carbon" id="pricing">
      <div className="flex items-center gap-4 font-condensed text-[0.72rem] tracking-[0.4em] uppercase text-amber mb-0 section-label">
        Pricing
      </div>
      <div ref={ref} className="reveal grid md:grid-cols-3 gap-[2px] bg-steel mt-[60px]">
        {plans.map((plan) => (
          <div key={plan.tier}
            className={`relative px-9 transition-colors duration-300 ${plan.featured ? 'bg-graphite pt-16 pb-12' : 'bg-carbon py-12'}`}>
            {plan.featured && (
              <div className="absolute top-0 left-0 right-0 text-center py-2 bg-amber text-black font-condensed text-[0.7rem] tracking-[0.25em] font-bold">
                MOST POPULAR
              </div>
            )}
            <div className="font-condensed text-[0.78rem] tracking-[0.3em] uppercase text-silver mb-4">{plan.tier}</div>
            <div className="font-bebas text-[3.8rem] leading-none mb-1">
              <sup className="font-barlow text-[1.2rem] font-light align-super">$</sup>{plan.price}
            </div>
            <p className="text-[0.85rem] text-smoke mb-8 leading-[1.6]">{plan.desc}</p>
            <ul className="list-none mb-10">
              {plan.features.map((f) => (
                <li key={f} className="text-[0.9rem] text-silver py-[10px] border-b border-steel flex items-center gap-[10px]">
                  <span className="text-amber font-bold">—</span>{f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onBook(plan.tier)}
              className={`block w-full text-center px-6 py-[14px] font-condensed text-[0.85rem] tracking-[0.2em] uppercase font-bold transition-all duration-200 cursor-pointer border-none ${plan.btnClass}`}>
              Book This
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
