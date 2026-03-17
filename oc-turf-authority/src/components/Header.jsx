import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { to: '/heat-tech',   label: 'Heat Tech' },
  { to: '/pet-system',  label: 'Pet System' },
  { to: '/roi-rebates', label: 'ROI & Rebates' },
  { to: '/gallery',     label: 'Gallery' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-green-950 border-b border-green-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
              <Leaf size={16} className="text-white" />
            </div>
            <div className="leading-none">
              <span className="block text-white font-bold text-sm tracking-tight">OC Turf Authority</span>
              <span className="block text-green-400 text-[10px] font-medium tracking-widest uppercase">Orange County</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'text-green-300 bg-green-900'
                      : 'text-slate-300 hover:text-white hover:bg-green-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/assessment"
              className="ml-3 btn-primary text-xs"
            >
              Request Assessment
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-green-950 border-t border-green-900 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'text-green-300 bg-green-900'
                      : 'text-slate-300 hover:text-white hover:bg-green-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/assessment"
              onClick={() => setOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Request Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
