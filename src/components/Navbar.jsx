import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/',        label: 'Início'   },
  { to: '/videos',  label: 'Vídeos'   },
  { to: '/cronicas',label: 'Crônicas' },
  { to: '/galeria', label: 'Galeria'  },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-sans font-medium tracking-widest uppercase transition-colors duration-200 ${
      isActive ? 'text-urucum' : 'text-terra-100 hover:text-terra-50'
    }`

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-terra-900 shadow-xl' : 'bg-terra-900/95 backdrop-blur-sm'
    }`}>
      {/* Faixa geométrica no topo */}
      <div className="h-1 geo-line" />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <span className="w-2 h-8 bg-urucum block" />
          <span className="font-display text-lg text-terra-50 leading-tight">
            Corrida de tora
            <br />
            <span className="text-terra-200 text-sm font-normal tracking-widest">dos indígenas Krikati</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-terra-50 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-terra-50 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-terra-50 transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-terra-900 border-t border-terra-600">
          <ul className="flex flex-col py-4">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block px-6 py-3 text-sm uppercase tracking-widest font-medium transition-colors ${
                      isActive ? 'text-urucum bg-terra-700' : 'text-terra-100 hover:bg-terra-700'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
