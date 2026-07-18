import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Asset imports
import dominionLogo from '../assets/Kennedy Mutuku logo.png'
import ksucuGroup from '../assets/ksucu-mc 2.png'
import kenImg from '../assets/kennnnn.jpg'
import kenStage from '../assets/ken stage.jpg'
import ksucuImg from '../assets/ksucu-mc1.jpeg'

const Services = () => {
  const compellingHighlights = [
    { title: 'Dominion Softwares', role: 'Founder & CEO', period: '2025 - Present', img: dominionLogo, imgStyle: 'contain' },
    { title: 'KSUCU-MC', role: 'Lead Developer', period: '2025 - 2026', img: ksucuGroup, imgStyle: 'cover' },
    { title: 'Kisii University Christian Union', role: 'Publicity Secretary', period: '2024 - 2025', img: ksucuImg, imgStyle: 'cover' },
    { title: 'Machakos Level 5 Hospital', role: 'Software Engineering Attachment', period: '2024 - 2024', img: kenImg, imgStyle: 'cover' },
    { title: 'Kyangala Boys High School', role: 'Math & Computer Teacher', period: '2023 - 2023', img: kenImg, imgStyle: 'cover' },
    { title: 'Young Friends Association', role: 'Chairperson', period: '2019 - Present', img: kenStage, imgStyle: 'cover' },
  ]

  return (
    <section id="featuring" className="featuring-summary">
      <div className="container">
        <div className="section-header">
          <h2><span>Featuring</span></h2>
          <div className="underline"></div>
        </div>

        <div className="compact-grid">
          {compellingHighlights.map((item, i) => (
            <Link to="/featuring" key={i} className="compact-card group">
              <div className="compact-img-box">
                <img src={item.img} alt={item.title} style={{ objectFit: item.imgStyle }} loading="lazy" />
              </div>
              <div className="compact-info">
                <h4>{item.role}</h4>
                <p className="compact-company">{item.title}</p>
                <span className="compact-date">{item.period}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="view-more-wrapper">
          <Link to="/featuring" className="btn btn-primary view-more-btn">
            Explore Full Journey <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .featuring-summary {
          background-color: var(--bg-cream);
          padding: 2.5rem 0 2rem;
        }

        .section-header {
          margin-bottom: 3.5rem;
        }

        .summary-subtitle {
          text-align: center;
          color: #666;
          margin-top: 0.5rem;
          margin-bottom: 3.5rem;
        }

        .compact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          max-width: 950px;
          margin-left: auto;
          margin-right: auto;
        }

        .compact-card {
          background: white;
          border-radius: 14px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(0,0,0,0.04);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
        }

        .compact-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 14px;
          padding: 2px;
          background: linear-gradient(135deg, rgba(243,141,28,0.4), rgba(243,141,28,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .compact-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 30px rgba(243,141,28,0.1);
          border-color: transparent;
        }

        .compact-card:hover::before {
          opacity: 1;
        }

        .compact-img-box {
          width: 85px;
          height: 85px;
          border-radius: 12px;
          background: #f8f9fa;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: transform 0.4s ease;
        }

        .compact-card:hover .compact-img-box {
          transform: scale(1.05);
        }

        .compact-img-box img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }

        .compact-info {
          flex: 1;
        }

        .compact-info h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 0.3rem;
          transition: color 0.3s ease;
        }

        .compact-card:hover .compact-info h4 {
          color: var(--primary, #f38d1c);
        }

        .compact-company {
          font-size: 0.95rem;
          color: #555;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .compact-date {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary, #f38d1c);
          background: rgba(243,141,28,0.08);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        .view-more-wrapper {
          text-align: center;
        }

        .view-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(243,141,28,0.3);
          transition: all 0.3s ease;
        }
        
        .view-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(243,141,28,0.4);
        }

        @media (max-width: 900px) {
          .compact-grid {
            padding: 0 1rem;
          }
        }

        @media (max-width: 768px) {
          .compact-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
          }
          
          .compact-card {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services

