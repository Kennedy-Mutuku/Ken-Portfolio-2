import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MapPin, Mail, Star, Image as ImageIcon } from 'lucide-react'

// Basic SVG components for social icons to fix the Lucide missing export error
const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
)

const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const YoutubeIcon = ({ size, className }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
)

const Footer = () => {
  return (
    <footer className="jk-footer">
      <div className="container jk-footer-container">
        
        {/* Section 1: Bio */}
        <div className="jk-footer-section">
          <h2 className="jk-footer-title">KENNEDY MUTUKU</h2>
          <p className="jk-footer-bio">
            Kennedy Mutuku is a celebrated Software Engineer and visual creative, best known for his 
            dynamic leadership and innovative software architectures. An award-winning professional, 
            he has worked with major institutions, inspiring audiences with his technical presence 
            and insightful problem-solving.
          </p>
        </div>

        {/* Section 2: Contact */}
        <div className="jk-footer-section">
          <h3 className="jk-footer-heading">Contact</h3>
          <ul className="jk-footer-list">
            <li>
              <MapPin size={18} className="jk-icon" />
              <span>Nairobi, Kenya</span>
            </li>
            <li>
              <Mail size={18} className="jk-icon" />
              <a href="mailto:mutukukennedy5@gmail.com">mutukukennedy5@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Quick Links */}
        <div className="jk-footer-section">
          <h3 className="jk-footer-heading">Quick Links</h3>
          <ul className="jk-footer-list">
            <li>
              <Star size={18} className="jk-icon highlight-icon" />
              <RouterLink to="/about">About Ken</RouterLink>
            </li>
            <li>
              <ImageIcon size={18} className="jk-icon highlight-icon" />
              <RouterLink to="/gallery">Gallery</RouterLink>
            </li>
            <li>
              <YoutubeIcon size={18} className="jk-icon highlight-icon" />
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Subscribe On Youtube</a>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div className="jk-footer-section">
          <h3 className="jk-footer-heading">Social Media</h3>
          <div className="jk-social-icons">
            <a href="#" aria-label="Facebook"><FacebookIcon size={20} /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon size={20} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={20} /></a>
            <a href="#" aria-label="Youtube"><YoutubeIcon size={20} /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="jk-footer-bottom">
        <div className="container">
          <p>Website Designed By Dominion Softwares Tel: +254 740 881 485</p>
        </div>
      </div>

      <style>{`
        .jk-footer {
          background-color: #051329; /* Deep blue from screenshot */
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          padding-top: 4rem;
        }

        .jk-footer-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          padding-bottom: 3rem;
        }

        .jk-footer-section {
          display: flex;
          flex-direction: column;
        }

        .jk-footer-title {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .jk-footer-bio {
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .jk-footer-heading {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .jk-footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .jk-footer-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
          font-size: 1rem;
          font-weight: 600;
        }

        .jk-icon {
          color: #ffffff;
          flex-shrink: 0;
        }

        .highlight-icon {
          color: #007bb5; /* Slightly lighter blue for the quick links icons */
        }

        .jk-footer-list a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .jk-footer-list a:hover {
          color: var(--primary, #f38d1c);
        }

        .jk-social-icons {
          display: flex;
          gap: 1.5rem;
        }

        .jk-social-icons a {
          color: #ffffff;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .jk-social-icons a:hover {
          color: var(--primary, #f38d1c);
          transform: translateY(-3px);
        }

        .jk-footer-bottom {
          padding: 1.5rem 0;
          background-color: #051329;
          font-size: 0.9rem;
          font-weight: 500;
          color: #b0c4de; /* Light grayish blue */
        }

        @media (max-width: 992px) {
          .jk-footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .jk-footer-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .jk-footer-bottom {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
