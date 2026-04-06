import React from 'react'
import { ExternalLink, Link, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">KENNEDY <span>MUTUKU</span></a>
          <p>Automating the repetitive, capturing the unforgettable. Professional Software Engineering and Visual Creative services.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li><Phone size={16} /> <a href="tel:0740881485">0740881485</a></li>
            <li><Mail size={16} /> <a href="mailto:mutukukennedy5@gmail.com">mutukukennedy5@gmail.com</a></li>
            <li>Machakos, Kenya</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kennedy Mutuku. All Rights Reserved.</p>
          <div className="social-links">
              <a href="https://www.linkedin.com/in/kennedykmutuku/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <ExternalLink size={20} />
              </a>
              <a href="https://github.com/Kennedy-Mutuku" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Link size={20} />
              </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-dark);
          color: white;
          padding: 5rem 0 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }

        .footer-brand .logo {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .footer-brand p {
          color: #aaa;
          max-width: 350px;
        }

        h4 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer ul li {
          margin-bottom: 0.8rem;
        }

        .footer ul li a, .footer ul li {
          color: #aaa;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: var(--transition);
        }

        .footer ul li a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem 0;
        }

        .footer-bottom .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom p {
          font-size: 0.9rem;
          color: #777;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: #777;
          transition: var(--transition);
        }

        .social-links a:hover {
          color: white;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .footer-brand p {
            margin: 0 auto;
          }
          .footer-bottom .container {
            flex-direction: column;
            gap: 1.5rem;
          }
          .footer ul li {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
