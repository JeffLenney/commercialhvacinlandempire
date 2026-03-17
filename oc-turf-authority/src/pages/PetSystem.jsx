import { Link } from 'react-router-dom'
import { Droplets, Shield, Layers, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import LeadForm from '../components/LeadForm'

const layers = [
  {
    num: '01',
    title: 'Native Soil — Grade & Compact',
    desc: 'We excavate and re-grade the sub-base to a minimum 2% slope, ensuring gravity-driven waste evacuation. Compacted to 95% Proctor Density to prevent settling.',
    color: 'border-slate-400',
  },
  {
    num: '02',
    title: 'Antimicrobial Aggregate Base (3–4")',
    desc: 'Crushed granite or decomposed granite treated with a permanent antimicrobial mineral compound. This is where odor elimination happens — not at the surface level, but at the biological source.',
    color: 'border-yellow-500',
  },
  {
    num: '03',
    title: 'Drainage Mat / Flow-Through Membrane',
    desc: 'A high-void drainage mat creates a dedicated flow channel above the aggregate, rated for 150+ oz/min/sq ft permeability. Prevents saturation zones that create anaerobic (odor-producing) conditions.',
    color: 'border-blue-500',
  },
  {
    num: '04',
    title: 'Polyurethane-Backed Pet Turf',
    desc: 'Turf with a polyurethane-coated, perforated backing — 100+ drainage holes per sq ft — laid over the membrane. Face weight minimum 60 oz/sq yd for durability under active dogs.',
    color: 'border-green-500',
  },
  {
    num: '05',
    title: 'Zeolite Infill (Odor-Absorbing)',
    desc: 'A final broadcast of zeolite mineral infill between the fibers. Zeolite is a natural ion-exchange mineral that chemically binds ammonia molecules — the primary compound in pet urine odor.',
    color: 'border-emerald-400',
  },
]

export default function PetSystem() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-green-400">The Systems — Pet Drainage System</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-2 mb-4 max-w-3xl">
            Multi-Layer Drainage &amp;<br />Antimicrobial Base Engineering
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Most pet turf fails because installers treat the odor problem at the surface with deodorizers.
            We solve it at the biological source — the sub-base — using a 5-layer drainage and
            antimicrobial engineering system.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">100+ oz/min/sq ft Drainage</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">Zeolite Odor-Bind Infill</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">Antimicrobial Aggregate</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">60+ oz Face Weight</span>
          </div>
        </div>
      </section>

      {/* ── WHY OTHERS FAIL ──────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">The Problem With Standard Pet Turf</p>
          <h2 className="section-title">It&rsquo;s Not the Turf — It&rsquo;s What&rsquo;s Underneath</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: <AlertTriangle size={20} className="text-red-400" />,
                title: 'Surface-Only Drainage',
                desc: 'Budget installs lay turf directly on compacted dirt with no sub-base drainage layer. Urine pools below the turf, saturating the soil, creating permanent anaerobic conditions — the real source of pet odor.',
              },
              {
                icon: <AlertTriangle size={20} className="text-red-400" />,
                title: 'Deodorizers Mask, Don\'t Eliminate',
                desc: 'Enzyme sprays and perfume infills mask the smell temporarily. They do not address the bacteria colony in the sub-base. Odor returns within 24–48 hours — especially in warm Anaheim Hills summers.',
              },
              {
                icon: <AlertTriangle size={20} className="text-red-400" />,
                title: 'Latex Backing Traps Waste',
                desc: 'Latex-backed turf has a near-impermeable backing layer. Waste sits on top of the backing and wicks into the fiber mat rather than draining through. The result: a petri dish under your yard.',
              },
            ].map(item => (
              <div key={item.title} className="card border-t-4 border-t-red-300">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5-LAYER SYSTEM ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            <div>
              <p className="section-label">Our Engineering Answer</p>
              <h2 className="section-title">The 5-Layer Pet System</h2>
              <p className="text-slate-500 leading-relaxed mt-4 mb-10">
                Every layer has a specific function in the waste-elimination chain.
                Remove one layer and the system underperforms. This is why we don&rsquo;t offer
                a &ldquo;budget pet turf&rdquo; — the system only works if it&rsquo;s complete.
              </p>

              <div className="space-y-6">
                {layers.map(layer => (
                  <div key={layer.num} className={`flex gap-5 border-l-4 pl-5 ${layer.color}`}>
                    <div className="flex-shrink-0">
                      <span className="block text-2xl font-black text-slate-200">{layer.num}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{layer.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs callout */}
            <div>
              <div className="bg-green-950 text-white rounded-sm p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Droplets size={24} className="text-blue-400" />
                  <h3 className="text-lg font-bold">Pet System Specifications</h3>
                </div>
                <div className="space-y-4">
                  {[
                    ['Permeability Rate', '100–150 oz/min/sq ft', 'Industry minimum for active dogs is 30 oz — we exceed 3×'],
                    ['Face Weight', '60–72 oz/sq yd minimum', 'Resists fiber compression under dog traffic'],
                    ['Fiber Type', 'Polyethylene Monofilament', 'Non-abrasive — won\'t scratch paw pads'],
                    ['Backing', 'Perforated Polyurethane', '100+ drain holes per sq ft'],
                    ['Infill Compound', 'Zeolite Mineral', 'Binds ammonia at ion level — not perfume'],
                    ['Sub-Base', 'Antimicrobial Granite', 'Inhibits bacterial colony formation'],
                    ['Slope Minimum', '2% Grade', 'Gravity-driven waste evacuation'],
                  ].map(([label, val, note]) => (
                    <div key={label} className="border-b border-green-900 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-green-400 text-xs font-bold uppercase tracking-wide">{label}</span>
                        <span className="text-white text-sm font-semibold text-right">{val}</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-0.5">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={20} className="text-green-600" />
                  <h4 className="font-bold text-slate-900">The Science of Zeolite Infill</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Zeolite is a naturally occurring aluminosilicate mineral with a micro-porous crystal structure.
                  When pet urine contacts zeolite, the positively-charged ammonium (NH₄⁺) ions are captured
                  by cation-exchange within the crystal lattice — physically binding the odor molecule rather
                  than masking it. The zeolite is rechargeable with a saltwater rinse, restoring full
                  binding capacity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">What You Get</p>
          <h2 className="section-title">The Pet System Outcome</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: <Droplets size={20} className="text-blue-500" />, title: 'Odor-Free Yard', desc: 'No residual smell — even after multiple dogs, summer heat, and no rain.' },
              { icon: <Layers size={20} className="text-green-600" />, title: 'Easy Maintenance', desc: 'Hose rinse and occasional zeolite recharge. No scrubbing, no enzyme treatments.' },
              { icon: <Shield size={20} className="text-purple-500" />, title: 'Paw-Safe Surface', desc: 'Soft polyethylene monofilament — no fiber abrasion. Cooling infill option available.' },
              { icon: <CheckCircle size={20} className="text-emerald-500" />, title: 'HOA-Compliant', desc: 'Natural green color blends approved for Orange County planned communities.' },
            ].map(item => (
              <div key={item.title} className="card text-center">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Request a Pet System Assessment</h2>
            <p className="section-subtitle">We&rsquo;ll evaluate drainage slope, soil type, and sun exposure to build the right spec for your dogs.</p>
          </div>
          <LeadForm title="" />
          <div className="mt-8 text-center">
            <Link to="/roi-rebates" className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:text-green-900 transition-colors">
              Check if your installation qualifies for a water rebate <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
