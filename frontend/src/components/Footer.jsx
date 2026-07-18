import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { ExternalLink, Link, Mail, Phone, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About Ken', href: '/about', isRoute: true },
    { name: 'Featuring', href: '/featuring', isRoute: true },
    { name: 'Leadership', href: '/leadership', isRoute: true },
    { name: 'Gallery', href: '/gallery', isRoute: true },
    { name: 'Education', href: '/education', isRoute: true },
  ]

  return (
    <footer className="footer-premium">
      <div className="watermark-container">
        <h1 className="footer-watermark">KENNEDY</h1>
      </div>
      
      <div className="container footer-premium-content">
        
        {/* Top CTA Section */}
        <motion.div 
          className="footer-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="cta-heading">Ready to create<br/>something <span className="highlight">extraordinary?</span></h2>
          <a href="mailto:mutukukennedy5@gmail.com" className="cta-premium-btn">
            Let's Work Together <ArrowUpRight size={20} />
          </a>
        </motion.div>

        <div className="premium-footer-divider"></div>

        {/* Links Section */}
        <div className="footer-premium-grid">
          <div className="footer-brand-premium">
            <a href="#" className="logo">KENNEDY <span>MUTUKU</span></a>
            <p>Automating the repetitive, capturing the unforgettable. Professional Software Engineering and Visual Creative services.</p>
          </div>
          
          <div className="footer-links-premium">
            <h4>Quick Explore</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <RouterLink 
                      to={link.href}
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
          </div>

          <div className="footer-contact-premium">
            <h4>Direct Contact</h4>
            <ul>
              <li>
                <span className="contact-icon"><Phone size={16} /></span>
                <a href="tel:0740881485">+254 740 881 485</a>
              </li>
              <li>
                <span className="contact-icon"><Mail size={16} /></span>
                <a href="mailto:mutukukennedy5@gmail.com">mutukukennedy5@gmail.com</a>
              </li>
              <li className="location">Machakos, Kenya</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="footer-bottom-premium">
          <p>&copy; {new Date().getFullYear()} Kennedy Mutuku. Built with excellence.</p>
          <div className="social-links-premium">
            <a href="https://www.linkedin.com/in/kennedykmutuku/" target="_blank" rel="noopener noreferrer" className="social-icon">
              LinkedIn
            </a>
            <span className="dot">•</span>
            <a href="https://github.com/Kennedy-Mutuku" target="_blank" rel="noopener noreferrer" className="social-icon">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-premium {
          background-color: #050505;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          padding-top: 6rem;
        }

        .watermark-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          display: flex;
          justify-content: center;
        }

        .footer-watermark {
          font-family: 'Inter', sans-serif;
          font-size: 25vw;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.02);
          margin: 0;
          line-height: 0.8;
          white-space: nowrap;
          transform: translateY(-20%);
        }

        .footer-premium-content {
          position: relative;
          z-index: 1;
        }

        .footer-cta {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-bottom: 4rem;
        }

        .cta-heading {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .cta-heading .highlight {
          color: var(--primary, #f38d1c);
          font-style: italic;
        }

        .cta-premium-btn {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 1.2rem 2.5rem;
          background: #ffffff;
          color: #000000;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .cta-premium-btn:hover {
          background: var(--primary, #f38d1c);
          color: #ffffff;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(243, 141, 28, 0.3);
        }

        .premium-footer-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
          margin-bottom: 5rem;
        }

        .footer-premium-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand-premium .logo {
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          display: block;
        }

        .footer-brand-premium .logo span {
          font-weight: 300;
        }

        .footer-brand-premium p {
          color: #888;
          font-size: 1.05rem;
          line-height: 1.6;
          max-width: 350px;
        }

        .footer-links-premium h4, .footer-contact-premium h4 {
          font-family: 'Inter', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #ffffff;
          letter-spacing: 1px;
        }

        .footer-links-premium ul li {
          margin-bottom: 1rem;
        }

        .footer-links-premium ul li a {
          color: #888;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
        }

        .footer-links-premium ul li a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: var(--primary, #f38d1c);
          transition: width 0.3s ease;
        }

        .footer-links-premium ul li a:hover {
          color: #ffffff;
        }

        .footer-links-premium ul li a:hover::after {
          width: 100%;
        }

        .footer-contact-premium ul li {
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #888;
        }

        .contact-icon {
          color: var(--primary, #f38d1c);
          display: flex;
        }

        .footer-contact-premium ul li a {
          color: #888;
          transition: color 0.3s ease;
        }

        .footer-contact-premium ul li a:hover {
          color: #ffffff;
        }

        .footer-bottom-premium {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom-premium p {
          font-size: 0.95rem;
          color: #666;
        }

        .social-links-premium {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .social-links-premium a {
          color: #888;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .social-links-premium a:hover {
          color: var(--primary, #f38d1c);
        }

        .social-links-premium .dot {
          color: #444;
        }

        @media (max-width: 992px) {
          .footer-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          
          .cta-heading {
            font-size: 2.8rem;
          }
          
          .footer-premium-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .cta-heading {
            font-size: 2.2rem;
          }
          
          .footer-premium-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .footer-bottom-premium {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
