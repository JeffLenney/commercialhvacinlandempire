import { Link } from 'react-router-dom'
import { Leaf, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-950 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center flex-shrink-0">
                <Leaf size={16} className="text-white" />
              </div>
              <div className="leading-none">
                <span className="block text-white font-bold text-sm">OC Turf Authority</span>
                <span className="block text-green-400 text-[10px] font-medium tracking-widest uppercase">Orange County</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Precision-engineered artificial turf systems for Orange County homes.
              Pet-safe, heat-resistant, and HOA-compliant.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <MapPin size={14} className="text-green-500 flex-shrink-0" />
              <span>Orange County, CA</span>
            </div>
          </div>

          {/* Systems */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">The Systems</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/heat-tech" className="hover:text-green-300 transition-colors">Heat &amp; UV Technology</Link></li>
              <li><Link to="/pet-system" className="hover:text-green-300 transition-colors">Pet Drainage System</Link></li>
              <li><Link to="/gallery" className="hover:text-green-300 transition-colors">Recreation &amp; Putting Greens</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/roi-rebates" className="hover:text-green-300 transition-colors">2026 Rebate Guide</Link></li>
              <li><Link to="/roi-rebates" className="hover:text-green-300 transition-colors">Anaheim Water Rebate</Link></li>
              <li><Link to="/roi-rebates" className="hover:text-green-300 transition-colors">Newport Beach Rebate</Link></li>
              <li><Link to="/gallery" className="hover:text-green-300 transition-colors">Project Gallery</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Get Started</h4>
            <p className="text-sm mb-4 leading-relaxed">
              Request a free site engineering assessment. We&rsquo;ll evaluate your space and calculate your exact rebate eligibility.
            </p>
            <Link to="/assessment" className="btn-primary block text-center">
              Request Assessment
            </Link>
          </div>
        </div>

        <div className="border-t border-green-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <span>&copy; 2026 Orange County Turf Authority. All rights reserved.</span>
          <span>OCTurfAuthority.com &mdash; Orange County, CA</span>
        </div>
      </div>
    </footer>
  )
}
