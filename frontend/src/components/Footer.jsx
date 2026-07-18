import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MapPin, Mail, Star, Image as ImageIcon, Youtube, Facebook, Twitter, Instagram } from 'lucide-react'

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
              <Youtube size={18} className="jk-icon highlight-icon" />
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Subscribe On Youtube</a>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div className="jk-footer-section">
          <h3 className="jk-footer-heading">Social Media</h3>
          <div className="jk-social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
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
