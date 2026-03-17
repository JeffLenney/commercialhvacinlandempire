import { Link } from 'react-router-dom'
import { DollarSign, MapPin, FileText, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react'
import LeadForm from '../components/LeadForm'

const rebatePrograms = [
  {
    city: 'Anaheim',
    target: 'Anaheim Hills',
    rate: '$4.00 / sq ft',
    cap: 'Up to 5,000 sq ft',
    max: '$20,000',
    bonus: null,
    authority: 'MWDOC — Municipal Water District of Orange County',
    requirements: [
      'Property must be within Anaheim city limits (includes Anaheim Hills)',
      'Turf must replace existing irrigated grass or vegetation',
      'Turf spec must meet MWDOC approved product list',
      'Application submitted and approved before installation begins',
      'Post-installation site inspection required',
    ],
    color: 'border-green-500',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    city: 'Newport Beach',
    target: 'Newport Beach, Corona del Mar',
    rate: '$3.00 / sq ft',
    cap: 'Removal rebate (no stated cap)',
    max: 'Unlimited + bonus',
    bonus: '$1,000 Landscape Design Bonus',
    authority: 'MWDOC / City of Newport Beach Water Conservation',
    requirements: [
      'Replace existing turf grass (removal verified)',
      'Submit water-efficient landscape plan for design bonus',
      'Approved contractor or homeowner-installed (application required)',
      'Must include drip or no irrigation on conversion area',
      'MWDOC application process — pre-approval recommended',
    ],
    color: 'border-blue-500',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
]

export default function ROI() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-green-400">ROI &amp; Water Rebates</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-2 mb-4 max-w-3xl">
            How to Get Your Turf for Free (or Close to It) in 2026
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Orange County water districts are paying homeowners up to $4.00 per square foot
            to remove grass and install water-efficient alternatives like synthetic turf.
            On a 2,000 sq ft backyard, that&rsquo;s $8,000 back in your pocket before you
            factor in water savings.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">MWDOC Application Assistance</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">Pre-Approval Support</span>
            <span className="spec-chip !bg-green-900 !border-green-700 !text-green-300">2026 Rebate Data</span>
          </div>
        </div>
      </section>

      {/* ── REBATE PROGRAMS ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label">2026 Orange County Rebate Programs</p>
          <h2 className="section-title">Current Rebate Rates by City</h2>
          <p className="section-subtitle">Rates verified for 2026. Programs subject to funding availability — we recommend applying early.</p>

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            {rebatePrograms.map(prog => (
              <div key={prog.city} className={`card border-t-4 ${prog.color}`}>
                <div className="flex items-start justify-between mb-5 flex-wrap gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={16} className="text-slate-500" />
                      <h3 className="text-xl font-bold text-slate-900">{prog.city}</h3>
                    </div>
                    <p className="text-slate-500 text-sm">{prog.target}</p>
                  </div>
                  <span className={`tag ${prog.badgeColor} !bg-opacity-100`}>{prog.rate}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-sm p-3">
                    <div className="text-2xl font-black text-green-700">{prog.rate}</div>
                    <div className="text-xs text-slate-500 mt-0.5">per sq ft rebate</div>
                  </div>
                  <div className="bg-slate-50 rounded-sm p-3">
                    <div className="text-2xl font-black text-slate-800">{prog.max}</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {prog.bonus ? 'max + $1k design bonus' : `${prog.cap}`}
                    </div>
                  </div>
                </div>

                {prog.bonus && (
                  <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-sm px-4 py-2.5 mb-5">
                    <TrendingUp size={15} className="text-blue-600 flex-shrink-0" />
                    <span className="text-blue-800 text-sm font-semibold">{prog.bonus} — submit landscape plan to qualify</span>
                  </div>
                )}

                <div className="mb-5">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Administering Authority</p>
                  <p className="text-slate-500 text-sm">{prog.authority}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">Eligibility Requirements</p>
                  <ul className="space-y-2">
                    {prog.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-sm px-5 py-4">
            <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              <strong>Important:</strong> Most rebate programs require pre-approval before installation begins.
              Starting work without an approved application will disqualify you from the rebate.
              We assist with the full MWDOC application process as part of every project.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR EXPLAINER ─────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label">Return on Investment</p>
              <h2 className="section-title">The Real Math on Turf Cost</h2>
              <p className="text-slate-500 leading-relaxed mt-4 mb-8">
                When you combine the upfront rebate with 15+ years of eliminated water bills,
                irrigation maintenance, and lawn care, professional synthetic turf is frequently
                the lowest-cost lawn option over a 10-year horizon.
              </p>

              <div className="space-y-5">
                {[
                  {
                    label: 'Upfront Rebate (Anaheim, 1,500 sq ft)',
                    value: '−$6,000',
                    note: 'Applied directly to installation cost',
                    color: 'text-green-700',
                  },
                  {
                    label: 'Annual Water Savings (est.)',
                    value: '$600–$1,200/yr',
                    note: 'Eliminates 55+ gallons per sq ft annually',
                    color: 'text-blue-700',
                  },
                  {
                    label: 'Lawn Care Eliminated',
                    value: '$1,200–$2,400/yr',
                    note: 'Mowing, fertilizer, pest control, aeration',
                    color: 'text-blue-700',
                  },
                  {
                    label: 'Total 10-Year Savings',
                    value: '$24,000–$42,000',
                    note: 'Including rebate and ongoing cost elimination',
                    color: 'text-emerald-700',
                  },
                ].map(item => (
                  <div key={item.label} className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 last:border-0">
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{item.note}</p>
                    </div>
                    <span className={`text-lg font-black flex-shrink-0 ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MWDOC process */}
            <div>
              <div className="bg-green-950 text-white rounded-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText size={24} className="text-green-400" />
                  <h3 className="text-xl font-bold">Our MWDOC Application Process</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  The Municipal Water District of Orange County (MWDOC) administers turf conversion rebates
                  for most OC cities. We handle the paperwork — you collect the check.
                </p>
                <div className="space-y-5">
                  {[
                    ['Step 1', 'Site Assessment', 'We measure your grass area and document current irrigation system.'],
                    ['Step 2', 'Pre-Application', 'We submit your pre-approval to MWDOC before any work begins.'],
                    ['Step 3', 'Product Compliance', 'We spec turf from MWDOC\'s approved product list to guarantee eligibility.'],
                    ['Step 4', 'Installation', 'Work begins only after written pre-approval is confirmed.'],
                    ['Step 5', 'Post-Install Inspection', 'We coordinate the final inspection with MWDOC on your behalf.'],
                    ['Step 6', 'Rebate Issued', 'You receive your rebate check — typically 30–60 days post-inspection.'],
                  ].map(([step, title, desc]) => (
                    <div key={step} className="flex gap-4">
                      <span className="bg-green-700 text-white text-xs font-bold px-2 py-1 rounded-sm flex-shrink-0 h-fit">{step}</span>
                      <div>
                        <p className="text-white text-sm font-semibold">{title}</p>
                        <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <DollarSign size={36} className="text-green-600 mx-auto mb-4" />
            <h2 className="section-title">Calculate Your Exact Rebate</h2>
            <p className="section-subtitle">Tell us your square footage and city. We&rsquo;ll calculate your rebate eligibility and net project cost.</p>
          </div>
          <LeadForm title="" />
        </div>
      </section>
    </>
  )
}
