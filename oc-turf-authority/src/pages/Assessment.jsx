import { MapPin, Gauge, FileText, CheckCircle, Phone, Clock } from 'lucide-react'
import LeadForm from '../components/LeadForm'

const steps = [
  {
    icon: <Phone size={20} className="text-green-500" />,
    title: '1. Initial Contact',
    desc: 'We respond within one business day to confirm your details and schedule the site visit.',
  },
  {
    icon: <MapPin size={20} className="text-blue-500" />,
    title: '2. Site Engineering Assessment',
    desc: 'A specialist visits your property to measure square footage, evaluate drainage slope, soil composition, sun exposure, and HOA restrictions.',
  },
  {
    icon: <Gauge size={20} className="text-purple-500" />,
    title: '3. System Specification',
    desc: 'We specify the exact turf product, infill type, sub-base depth, and drainage design for your application. No generic quotes.',
  },
  {
    icon: <FileText size={20} className="text-orange-500" />,
    title: '4. Rebate Pre-Application',
    desc: 'If your city qualifies, we file your MWDOC pre-approval application before any work begins to lock in your rebate.',
  },
  {
    icon: <CheckCircle size={20} className="text-green-500" />,
    title: '5. Transparent Quote',
    desc: 'You receive an itemized quote: materials, labor, sub-base, infill, and your projected rebate deducted — net cost clearly stated.',
  },
]

export default function Assessment() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-green-400">Free Site Evaluation</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-2 mb-4 max-w-3xl">
            Request a Site Engineering Assessment
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Before we recommend a system or quote a price, we evaluate your specific property —
            drainage, slope, sun exposure, soil type, and HOA requirements.
            Most sites can be assessed within 2–3 business days.
          </p>
          <div className="flex items-center gap-2 mt-5 text-green-300 text-sm">
            <Clock size={15} />
            <span>Typical response time: within 1 business day</span>
          </div>
        </div>
      </section>

      {/* ── MAIN FORM + PROCESS ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Form */}
            <div className="bg-slate-50 border border-slate-200 rounded-sm p-8">
              <LeadForm title="Request a Site Engineering Assessment" />
            </div>

            {/* Process */}
            <div>
              <p className="section-label">What Happens Next</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">The Assessment Process</h2>

              <div className="space-y-6">
                {steps.map(step => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-green-950 text-white rounded-sm p-6">
                <h4 className="font-bold text-white mb-3">What We Bring to the Assessment</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'Measuring tools + drainage slope meter',
                    'MWDOC approved product spec sheets',
                    'HOA color compliance documentation',
                    'Rebate eligibility calculator',
                    'Soil drainage assessment tools',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle size={13} className="text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Why Homeowners Trust OC Turf Authority</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: 'No obligation', label: 'assessment — ever', note: 'Free site visit, no pressure to commit' },
              { stat: '$0', label: 'surprise costs', note: 'Every item quoted upfront before we start' },
              { stat: 'MWDOC', label: 'application handled', note: 'We file and track your rebate paperwork' },
              { stat: '15+ Year', label: 'UV stability rating', note: 'Fiber systems rated for OC conditions' },
            ].map(item => (
              <div key={item.stat} className="card text-center">
                <div className="text-2xl font-black text-green-700 mb-0.5">{item.stat}</div>
                <div className="text-slate-800 text-sm font-semibold">{item.label}</div>
                <div className="text-slate-500 text-xs mt-1.5 leading-relaxed">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
