import React, { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ExternalLink, Link } from 'lucide-react'
import logoImg from '../assets/Kennedy Mutuku logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About Ken', href: '/about', isRoute: true },
    { name: 'Featuring', href: '/featuring', isRoute: true },
    { name: 'Leadership', href: '/leadership', isRoute: true },
    { name: 'Education', href: '/education', isRoute: true },
    { name: 'Gallery', href: '/gallery', isRoute: true },
    { name: 'Projects', href: '#portfolio', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ]

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <a href="tel:0740881485" className="phone-item"><Phone size={14} /> 0740881485</a>
            <a href="mailto:mutukukennedy5@gmail.com" className="email-item"><Mail size={14} /> mutukukennedy5@gmail.com</a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/kennedykmutuku/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Link size={16} />
            </a>
            <a href="https://github.com/Kennedy-Mutuku" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav">
        <div className="container nav-content">
          <a href="#" className="logo-link">
            <img src={logoImg} alt="Kennedy Mutuku Logo" className="header-logo" />
            <div className="logo-text">
              KENNEDY <span>MUTUKU</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="nav-links desktop-only">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isRoute ? (
                  <RouterLink 
                    to={link.href}
                    className={location.pathname === link.href ? 'active-link' : ''}
                    onClick={() => {
                      if (location.pathname === link.href) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </RouterLink>
                ) : (
                  <a href={isHomePage ? link.href : `/${link.href}`}>{link.name}</a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button className="mobile-only menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.isRoute ? (
                <RouterLink 
                  to={link.href} 
                  className={location.pathname === link.href ? 'active-mobile-link' : ''}
                  onClick={() => {
                    setIsOpen(false);
                    if (location.pathname === link.href) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </RouterLink>
              ) : (
                <a href={isHomePage ? link.href : `/${link.href}`} onClick={() => setIsOpen(false)}>{link.name}</a>
              )}
            </li>
          ))}
          <li className="mobile-socials">
            <a href="https://www.linkedin.com/in/kennedykmutuku/" target="_blank" rel="noopener noreferrer"><Link size={24} /></a>
            <a href="https://github.com/Kennedy-Mutuku" target="_blank" rel="noopener noreferrer"><ExternalLink size={24} /></a>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition);
        }

        .top-bar {
          background: var(--primary);
          color: white;
          padding: 6px 0;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-info {
          display: flex;
          gap: 20px;
        }

        .top-info a {
          color: white;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #ffffff;
          color: var(--primary);
          transform: translateY(-2px);
        }

        .main-nav {
          background: #ffffff;
          padding: 10px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: 0.3s;
        }

        .navbar-wrapper.scrolled .main-nav {
          padding: 8px 0;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.5px;
        }

        .logo-text span {
          color: var(--primary);
        }

        .header-logo {
          height: 90px;
          width: auto;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.08));
        }

        .navbar-wrapper.scrolled .header-logo {
          height: 60px;
        }

        .header-logo:hover {
          transform: scale(1.08) translateY(-2px);
          filter: drop-shadow(0px 8px 15px rgba(0,0,0,0.15));
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links a {
          position: relative;
          font-weight: 600;
          color: var(--text-dark);
          font-size: 0.95rem;
          transition: 0.3s;
          padding-bottom: 6px;
        }

        .nav-links a:hover,
        .nav-links a.active-link {
          color: var(--primary);
        }
        
        .nav-links a.active-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--primary);
          border-radius: 4px;
        }

        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-dark);
        }

        .mobile-only {
          display: none;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          z-index: -2;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease, visibility 0.4s ease;
        }

        .mobile-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          transform: translateX(100%);
          width: 200px;
          max-width: 60vw;
          background: var(--primary);
          z-index: -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 140px;
          padding-bottom: 2rem;
          border-bottom-left-radius: 20px;
          transition: transform 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
          box-shadow: -5px 10px 20px rgba(0,0,0,0.05);
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        .mobile-menu ul {
          text-align: center;
          list-style: none;
          padding: 0;
        }

        .mobile-menu li {
          margin-bottom: 1.5rem;
        }

        .mobile-menu a {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
        }

        .mobile-menu .btn {
          background-color: white;
          color: var(--primary);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu .btn:hover {
          background-color: var(--bg-cream);
          transform: translateY(-2px);
        }

        .mobile-socials {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .top-bar {
            padding: 2px 0;
          }
          .top-bar-content {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 2px 15px;
            padding: 0;
          }
          .top-info {
            display: contents;
          }
          .email-item {
            width: 100%;
            justify-content: center;
            order: 1;
            font-size: 0.85rem;
          }
          .phone-item {
            order: 2;
            font-size: 0.85rem;
          }
          .social-links {
            order: 3;
            gap: 10px;
          }
          .social-links a {
            width: 26px;
            height: 26px;
          }
        }

        @media (max-width: 992px) {
          .top-message {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .desktop-only {
            display: none;
          }
          .mobile-only {
            display: block;
          }
          .main-nav {
            padding: 12px 0;
          }
           .header-logo {
            height: 65px;
          }
           .logo-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
