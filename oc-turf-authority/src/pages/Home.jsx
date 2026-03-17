import { Link } from 'react-router-dom'
import {
  Thermometer, Droplets, Trophy, DollarSign,
  CheckCircle, ArrowRight, MapPin, Gauge, Leaf, Shield
} from 'lucide-react'
import LeadForm from '../components/LeadForm'

const systems = [
  {
    icon: <Thermometer size={28} className="text-orange-400" />,
    title: 'Heat & UV Technology',
    desc: 'Cooling infill systems reduce surface temps by up to 50°F. UV-stable fibers rated for 15+ years of California sun.',
    to: '/heat-tech',
    tag: 'Popular in Anaheim Hills',
  },
  {
    icon: <Droplets size={28} className="text-blue-400" />,
    title: 'Pet Drainage System',
    desc: 'Multi-layer drainage with antimicrobial base engineering. Eliminates odors through soil science, not perfume.',
    to: '/pet-system',
    tag: 'Pet-Safe Certified',
  },
  {
    icon: <Trophy size={28} className="text-yellow-400" />,
    title: 'Recreation & Putting Greens',
    desc: 'PGA-caliber True-Roll technology. Custom slope engineering for backyard putting greens and sport surfaces.',
    to: '/gallery',
    tag: 'Newport Beach Showrooms',
  },
]

const specs = [
  { label: 'Face Weight', value: '60–80+ oz', desc: 'per sq yd — showroom density' },
  { label: 'Permeability', value: '100+ oz/min', desc: 'per sq ft — military-grade drainage' },
  { label: 'UV Stability', value: '15+ Years', desc: 'aliphatic fiber rating' },
  { label: 'Backing', value: 'Polyurethane', desc: 'dimensional stability guaranteed' },
]

const trusts = [
  'HOA-compliant color systems for Irvine &amp; Newport Beach',
  'Rebate application assistance — MWDOC compliant',
  'Cooling infill reduces surface temp up to 50°F',
  'Polyurethane-backed turf — no shrink, no buckle',
  '100+ oz/min/sq ft drainage for pet applications',
  'PGA-caliber True-Roll for putting greens',
]

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-slate-900 text-white overflow-hidden">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-green-800/60 border border-green-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-green-300 mb-6">
                <Leaf size={12} />
                Orange County Turf Authority
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
                Precision<br />
                <span className="text-green-400">Engineered</span><br />
                Lawns.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-4 max-w-lg">
                Industrial-grade synthetic grass systems built for Southern California&rsquo;s UV,
                heat, and HOA demands — not the big-box rolls your neighbor installed.
              </p>
              <p className="text-green-300 font-semibold text-lg mb-8">
                How to get your turf for free (or close to it) in 2026 &rarr;
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/assessment" className="btn-white">Request Free Assessment</Link>
                <Link to="/roi-rebates" className="btn-outline border-green-500 text-green-300 hover:bg-green-700 hover:text-white">
                  See 2026 Rebates
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['100% Polyurethane Backing', 'HOA-Approved', 'Rebate-Eligible'].map(t => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-green-300 font-medium">
                    <CheckCircle size={13} className="text-green-400 flex-shrink-0" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero form */}
            <div className="bg-white rounded-sm shadow-2xl p-6 md:p-8">
              <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-1">Free Site Evaluation</p>
              <LeadForm title="Request a Site Engineering Assessment" compact />
            </div>

          </div>
        </div>
      </section>

      {/* ── REBATE ALERT BANNER ──────────────────────────────────── */}
      <section className="bg-green-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-center">
            <span className="flex items-center gap-2">
              <DollarSign size={16} className="text-green-200" />
              <strong>Anaheim:</strong> $4.00/sq ft rebate (up to 5,000 sq ft)
            </span>
            <span className="hidden sm:block text-green-400">|</span>
            <span className="flex items-center gap-2">
              <DollarSign size={16} className="text-green-200" />
              <strong>Newport Beach:</strong> $3.00/sq ft + $1,000 Landscape Design bonus
            </span>
            <Link to="/roi-rebates" className="btn-white text-xs py-1.5 px-4 ml-0 sm:ml-4">
              Check Eligibility →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECS STRIP ───────────────────────────────── */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specs.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-0.5">{s.value}</div>
                <div className="text-white text-xs font-semibold uppercase tracking-wide">{s.label}</div>
                <div className="text-slate-500 text-xs mt-0.5">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM CARDS ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">Engineered Systems</p>
          <h2 className="section-title">Not All Turf Is Created Equal</h2>
          <p className="section-subtitle max-w-2xl">
            We specify turf by application — not by price point. Each system is engineered for a specific challenge
            Orange County homeowners actually face.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {systems.map(s => (
              <Link key={s.to} to={s.to} className="card group flex flex-col">
                <div className="mb-4">{s.icon}</div>
                <span className="tag mb-3">{s.tag}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-green-700 font-semibold text-sm mt-4">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AUTHORITY ───────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label">The Authority Difference</p>
              <h2 className="section-title">We Specify Turf Like an Engineer, Not a Salesperson</h2>
              <p className="text-slate-500 leading-relaxed mt-4 mb-8">
                Most turf installers show you a color chip and quote a price. We run a site assessment —
                measuring drainage slope, soil composition, sun exposure hours, and HOA color restrictions —
                before we ever spec a product. The result is a system that performs for 15+ years, not 3.
              </p>

              <ul className="space-y-3">
                {trusts.map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: t }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature callout box */}
            <div className="bg-green-950 text-white rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gauge size={24} className="text-green-400" />
                <h3 className="text-lg font-bold">System Spec Card</h3>
              </div>
              <div className="space-y-4">
                {[
                  ['Face Weight', '60–80 oz/sq yd', 'Density determines durability and aesthetics'],
                  ['Permeability', '100+ oz/min/sq ft', 'Military-grade drainage for pet applications'],
                  ['Fiber Type', 'Polyethylene Monofilament', 'Soft, UV-stable, non-abrasive to skin'],
                  ['Backing', 'Polyurethane Coated', 'Dimensional stability — no shrink, no buckle'],
                  ['Infill', 'Cooling Mineral (option)', 'Reduces surface temp up to 50°F vs standard'],
                  ['UV Rating', 'Aliphatic — 15+ Years', 'Doesn\'t amber or degrade in coastal sun'],
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
          </div>
        </div>
      </section>

      {/* ── CITY FOCUS ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">Geographic Focus</p>
          <h2 className="section-title">Built for Orange County Conditions</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="card border-l-4 border-l-green-600">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-green-600" />
                <h3 className="font-bold text-slate-900">Anaheim Hills</h3>
                <span className="tag ml-auto">$4.00/sq ft Rebate</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Hillside properties face high UV exposure, HOA scrutiny, and sloped drainage challenges.
                We design drainage profiles to follow the grade and select fiber colors that pass strict architectural guidelines.
              </p>
              <div className="text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-green-500" /> HOA-approved natural green blends</div>
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-green-500" /> Slope-engineered drainage sub-base</div>
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-green-500" /> Rebate up to $20,000 on eligible projects</div>
              </div>
            </div>

            <div className="card border-l-4 border-l-blue-500">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-blue-500" />
                <h3 className="font-bold text-slate-900">Newport Beach</h3>
                <span className="tag ml-auto">$3/sqft + $1k Bonus</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Salt air accelerates UV degradation and fiber breakdown. We spec aliphatic polyethylene fibers
                with coastal-rated UV stabilizers for properties within the marine layer zone.
              </p>
              <div className="text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-green-500" /> Salt-air UV stabilized fiber system</div>
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-green-500" /> Putting greens for luxury outdoor living</div>
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-green-500" /> $1,000 Landscape Design bonus available</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-green-950 to-slate-900 text-white py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Shield size={36} className="text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Engineer Your Lawn?</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Get a free site assessment, a precise rebate calculation, and a transparent quote —
            no pressure, no surprises.
          </p>
          <Link to="/assessment" className="btn-white">Request My Free Assessment</Link>
        </div>
      </section>
    </>
  )
}
