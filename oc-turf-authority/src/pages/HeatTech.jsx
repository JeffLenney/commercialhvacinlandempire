import { Link } from 'react-router-dom'
import { Thermometer, Sun, Wind, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import LeadForm from '../components/LeadForm'

const comparisonRows = [
  { metric: 'Surface Temp (90°F Air)', standard: '140–160°F', cooling: '90–110°F', delta: '−50°F avg' },
  { metric: 'UV Fiber Rating', standard: 'Aromatic — 3–5 yrs', cooling: 'Aliphatic — 15+ yrs', delta: '3× longer' },
  { metric: 'Color Retention', standard: 'Fades 2–3 seasons', cooling: 'Rated 15+ years', delta: 'No fade' },
  { metric: 'Infill Type', standard: 'Crumb rubber or sand', cooling: 'Evaporative mineral infill', delta: 'Cools on contact' },
  { metric: 'Backing Material', standard: 'Latex (shrinks & cracks)', cooling: 'Polyurethane (dimensionally stable)', delta: 'No buckling' },
  { metric: 'Face Weight', standard: '30–50 oz/sq yd', cooling: '60–80 oz/sq yd', delta: '+40–60% denser' },
  { metric: 'Permeability', standard: '20–40 oz/min/sq ft', cooling: '100+ oz/min/sq ft', delta: '5× drainage' },
  { metric: 'Coastal UV Salt Air', standard: 'Not rated', cooling: 'Aliphatic polyethylene', delta: 'Rated for OC coast' },
]

export default function HeatTech() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-green-400">The Systems — Heat &amp; UV Technology</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-2 mb-4 max-w-3xl">
            Why Standard Turf Gets Too Hot &mdash; and How We Fix It
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Standard synthetic grass can reach 160°F on a Southern California summer day.
            Our Cooling Infill system uses evaporative mineral technology to bring that down to
            ambient air temperature — keeping surfaces safe for children and pets.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">CSP-Grade Surface Prep</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">Aliphatic Polyethylene Fiber</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">Polyurethane Backing</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">15+ Year UV Stability Rating</span>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ─────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card border-t-4 border-t-red-400">
              <AlertTriangle size={24} className="text-red-400 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Hot-Surface Risk</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Crumb rubber and standard silica sand infills absorb and retain heat, creating surface
                temps 50–70°F above air temperature — dangerous for barefoot use and pet paws.
              </p>
            </div>
            <div className="card border-t-4 border-t-yellow-400">
              <Sun size={24} className="text-yellow-400 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">UV Fiber Degradation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Aromatic polyethylene — used in most budget turf — breaks down under UV within 3–5 years,
                causing color fade, fiber brittleness, and surface shedding. Coastal salt air accelerates this.
              </p>
            </div>
            <div className="card border-t-4 border-t-blue-400">
              <Wind size={24} className="text-blue-400 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Backing Failure</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Latex-backed turf shrinks and cracks in thermal cycling (hot day, cool night),
                causing edge separation and surface buckling within 2–4 years — especially
                on south-facing Anaheim Hills properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COOLING INFILL EXPLAINER ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label">The Solution</p>
              <h2 className="section-title">Cooling Infill Technology</h2>
              <p className="text-slate-500 leading-relaxed mt-4 mb-6">
                Our Cooling Infill uses hydroscopic mineral particles — specifically engineered to absorb
                ambient moisture from the air (including coastal humidity) and release it through evaporation
                when the surface heats up. This phase-change process actively cools the turf surface,
                maintaining temperatures within 10–20°F of ambient air.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Unlike water-activated systems that require a hose, the mineral infill recharges passively
                from morning dew and coastal air humidity — making it low-maintenance and always-on.
              </p>

              <div className="space-y-3">
                {[
                  'Reduces surface temp by up to 50°F vs standard crumb rubber',
                  'Recharges passively from ambient humidity — no irrigation required',
                  'Antimicrobial mineral compound inhibits bacterial growth',
                  'Compatible with all polyurethane-backed turf systems',
                  'Available as standalone upgrade on existing installations',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Temp callout */}
            <div className="bg-gradient-to-br from-slate-900 to-green-950 rounded-sm p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Thermometer size={28} className="text-orange-400" />
                <h3 className="text-xl font-bold">Surface Temperature Model</h3>
              </div>
              <p className="text-slate-400 text-xs mb-6">Orange County, 90°F air temp, direct sun exposure</p>

              <div className="space-y-5">
                {[
                  { label: 'Crumb Rubber Infill (Standard)', temp: '160°F', pct: 100, color: 'bg-red-500' },
                  { label: 'Silica Sand Infill (Budget)', temp: '145°F', pct: 85, color: 'bg-orange-400' },
                  { label: 'Cooling Mineral Infill (Our System)', temp: '108°F', pct: 48, color: 'bg-green-500' },
                  { label: 'Ambient Air Temperature', temp: '90°F', pct: 34, color: 'bg-blue-400' },
                ].map(row => (
                  <div key={row.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-slate-300">{row.label}</span>
                      <span className="text-sm font-bold text-white">{row.temp}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-green-900">
                <p className="text-green-400 text-sm font-semibold">Result: 52°F cooler than standard</p>
                <p className="text-slate-400 text-xs mt-1">Safe for barefoot use, children, and pets in direct Southern California sun.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">Technical Comparison</p>
          <h2 className="section-title">Standard Turf vs. Cooling Technology System</h2>
          <p className="section-subtitle">Specification-level differences that determine real-world performance.</p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-5 py-4 font-semibold text-slate-300 text-xs uppercase tracking-wide w-1/3">Metric</th>
                  <th className="text-left px-5 py-4 font-semibold text-red-300 text-xs uppercase tracking-wide w-1/4">Standard Turf</th>
                  <th className="text-left px-5 py-4 font-semibold text-green-300 text-xs uppercase tracking-wide w-1/4">Our Cooling System</th>
                  <th className="text-left px-5 py-4 font-semibold text-blue-300 text-xs uppercase tracking-wide w-1/6">Difference</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-5 py-4 font-semibold text-slate-800 border-b border-slate-200">{row.metric}</td>
                    <td className="px-5 py-4 text-red-700 border-b border-slate-200">{row.standard}</td>
                    <td className="px-5 py-4 text-green-700 font-medium border-b border-slate-200">{row.cooling}</td>
                    <td className="px-5 py-4 border-b border-slate-200">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">{row.delta}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Get a Cooling System Quote for Your Property</h2>
            <p className="section-subtitle">We&rsquo;ll assess sun exposure, drainage, and HOA requirements — then specify the right system.</p>
          </div>
          <LeadForm title="" />
          <div className="mt-8 text-center">
            <Link to="/roi-rebates" className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:text-green-900 transition-colors">
              Check Anaheim Hills &amp; Newport Beach rebate eligibility <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
