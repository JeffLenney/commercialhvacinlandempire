import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function LeadForm({ title = 'Request a Site Engineering Assessment', compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '', sqft: '', system: '', message: ''
  })

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    // In production, wire to your form handler / CRM here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
        <CheckCircle size={40} className="text-green-600 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-slate-900 mb-2">Assessment Request Received</h3>
        <p className="text-slate-600 text-sm">Our team will contact you within one business day to schedule your site evaluation and confirm your rebate eligibility.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {title && <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>}

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">Full Name *</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Jane Smith"
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">Phone *</label>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="(714) 555-0100"
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">Email *</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="jane@example.com"
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">City</label>
          <select
            name="city"
            value={form.city}
            onChange={handle}
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white"
          >
            <option value="">Select city...</option>
            <option>Anaheim Hills</option>
            <option>Newport Beach</option>
            <option>Irvine</option>
            <option>Fullerton</option>
            <option>Other Orange County</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">Approx. Square Footage</label>
          <input
            name="sqft"
            value={form.sqft}
            onChange={handle}
            placeholder="e.g. 800 sq ft"
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">Primary Use</label>
          <select
            name="system"
            value={form.system}
            onChange={handle}
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white"
          >
            <option value="">Select system...</option>
            <option>Pet System (dogs / drainage)</option>
            <option>Heat-Reduction / Family Lawn</option>
            <option>Putting Green / Recreation</option>
            <option>Commercial / HOA Common Area</option>
            <option>Not sure — need assessment</option>
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">Additional Notes</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            rows={3}
            placeholder="Tell us about your space, current grass condition, HOA restrictions, or any questions..."
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 resize-none"
          />
        </div>
      )}

      <button type="submit" className="btn-primary flex items-center gap-2 w-full justify-center">
        <Send size={15} />
        Request My Free Assessment
      </button>
      <p className="text-xs text-slate-500 text-center">No obligation. We&rsquo;ll confirm rebate eligibility before any contract.</p>
    </form>
  )
}
