import { Link } from 'react-router-dom'
import { MapPin, Trophy, Droplets, Thermometer, CheckCircle } from 'lucide-react'

const projects = [
  {
    id: 'nh-pet-01',
    city: 'Anaheim Hills, CA',
    title: 'Pet System — Backyard Full Conversion',
    system: 'Pet System',
    sqft: '1,400 sq ft',
    rebate: '$5,600 rebate applied',
    desc: 'Active household with 2 large dogs. 5-layer antimicrobial drainage system with zeolite infill. Replaced dying bermuda grass saturated with pet waste.',
    specs: ['72 oz face weight', '120 oz/min drainage', 'Zeolite infill', 'Slope-graded sub-base'],
    icon: <Droplets size={16} className="text-blue-400" />,
    tagColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'nb-putting-01',
    city: 'Newport Beach, CA',
    title: 'Luxury Putting Green — Backyard',
    system: 'Recreation / Putting Green',
    sqft: '800 sq ft',
    rebate: '$2,400 rebate applied',
    desc: 'Custom 3-hole putting green with PGA-caliber True-Roll technology. Fringe turf surrounds with a high-pile leisure area. Aliphatic fiber for coastal UV.',
    specs: ['PGA True-Roll spec', 'Custom slope engineering', 'Salt-air UV fiber', '3-hole layout'],
    icon: <Trophy size={16} className="text-yellow-500" />,
    tagColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 'nh-heat-01',
    city: 'Anaheim Hills, CA',
    title: 'Heat-Reduction Lawn — South-Facing Yard',
    system: 'Heat Tech',
    sqft: '2,200 sq ft',
    rebate: '$8,800 rebate applied',
    desc: 'South-facing hillside property with extreme heat load. Cooling mineral infill system reduced peak surface temp from 157°F to 104°F. HOA-approved natural blend.',
    specs: ['Cooling infill installed', '157°F → 104°F surface', 'HOA-approved color', 'Polyurethane backing'],
    icon: <Thermometer size={16} className="text-orange-400" />,
    tagColor: 'bg-orange-100 text-orange-800',
  },
  {
    id: 'nb-pet-lawn-01',
    city: 'Newport Beach, CA',
    title: 'Pet + Lawn Combo — Coastal Property',
    system: 'Pet System',
    sqft: '950 sq ft',
    rebate: '$2,850 rebate + $1,000 bonus',
    desc: 'Salt-air coastal property with one dog and a family play area. Combined pet drainage system with a leisure zone using softer, higher pile turf for children.',
    specs: ['Dual-zone layout', 'Aliphatic coastal fiber', 'Zeolite infill zone', '$1k landscape bonus'],
    icon: <Droplets size={16} className="text-blue-400" />,
    tagColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 'nh-commercial-01',
    city: 'Anaheim Hills, CA',
    title: 'HOA Common Area — Community Entrance',
    system: 'Commercial / HOA',
    sqft: '3,800 sq ft',
    rebate: '$15,200 rebate applied',
    desc: 'Community entrance conversion from high-maintenance bermuda grass. HOA board-approved color and texture spec. MWDOC rebate maxed at full Anaheim rate.',
    specs: ['80 oz face weight', 'HOA-approved palette', 'Full MWDOC rebate', 'Commercial warranty'],
    icon: <CheckCircle size={16} className="text-green-500" />,
    tagColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'nb-rooftop-01',
    city: 'Newport Beach, CA',
    title: 'Rooftop Terrace — Waterfront Condo',
    system: 'Recreation',
    sqft: '600 sq ft',
    rebate: 'Commercial project',
    desc: 'Rooftop terrace installation on waterfront property. Lightweight polyurethane-backed system approved for rooftop load ratings. Salt-air aliphatic fiber spec.',
    specs: ['Rooftop-rated backing', 'Lightweight system', 'Salt-air UV spec', 'Drainage to scuppers'],
    icon: <Trophy size={16} className="text-yellow-500" />,
    tagColor: 'bg-yellow-100 text-yellow-800',
  },
]

export default function Gallery() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-green-400">Project Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-2 mb-4 max-w-3xl">
            Real Installations Across Orange County
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Documented project specifications, rebate outcomes, and technical details from
            pet systems, heat-reduction lawns, and recreation surfaces across Anaheim Hills
            and Newport Beach.
          </p>
        </div>
      </section>

      {/* ── FILTER STRIP (Static UI) ─────────────────────────────── */}
      <section className="bg-slate-100 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mr-2">Filter:</span>
            {['All Projects', 'Pet System', 'Heat Tech', 'Recreation / Putting Green', 'HOA / Commercial'].map(f => (
              <button
                key={f}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  f === 'All Projects'
                    ? 'bg-green-700 text-white border-green-700'
                    : 'bg-white text-slate-600 border-slate-300 hover:border-green-500 hover:text-green-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <article key={p.id} className="card flex flex-col">
                {/* Placeholder image block */}
                <div className="bg-gradient-to-br from-green-800 to-green-950 rounded-sm h-44 flex items-center justify-center mb-5 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 1px,transparent 20px)' }} />
                  <div className="text-center relative z-10">
                    <div className="text-4xl mb-1">🌿</div>
                    <p className="text-green-300 text-xs font-semibold">{p.system}</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-sm ${p.tagColor}`}>{p.system}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <MapPin size={12} className="text-slate-400" />
                  <span>{p.city}</span>
                  <span className="ml-auto font-medium text-slate-600">{p.sqft}</span>
                </div>

                <h3 className="font-bold text-slate-900 mb-2 text-base">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{p.desc}</p>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 mb-3">
                    <p className="text-xs font-bold text-green-700">{p.rebate}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.specs.map(s => (
                      <span key={s} className="spec-chip text-[10px]">{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-4">Have a project in mind? We&rsquo;d love to add yours to this gallery.</p>
            <Link to="/assessment" className="btn-primary">Request Your Site Assessment</Link>
          </div>
        </div>
      </section>
    </>
  )
}
