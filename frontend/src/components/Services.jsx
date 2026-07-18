import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Code, GraduationCap, Heart, Terminal, Users } from 'lucide-react'

// Asset imports
import dominionLogo from '../assets/Dominion Sodtwares Logo.png'
import ksucuGroup from '../assets/ksucu-mc 2.png'
import kenImg from '../assets/kennnnn.jpg'
import kenStage from '../assets/ken stage.jpg'
import ksucuImg from '../assets/ksucu-mc1.jpeg'

const Services = () => {
  const compellingHighlights = [
    { 
      title: 'Dominion Softwares', 
      role: 'Founder & CEO', 
      period: '2025 - Present', 
      img: dominionLogo, 
      imgStyle: 'contain',
      icon: <Terminal size={20} />,
      colSpan: 'col-span-2',
      color: 'gradient-orange'
    },
    { 
      title: 'KSUCU-MC', 
      role: 'Lead Developer', 
      period: '2025 - 2026', 
      img: ksucuGroup, 
      imgStyle: 'cover',
      icon: <Code size={20} />,
      colSpan: 'col-span-1',
      color: 'solid-dark'
    },
    { 
      title: 'KSUCU', 
      role: 'Publicity Secretary', 
      period: '2024 - 2025', 
      img: ksucuImg, 
      imgStyle: 'cover',
      icon: <Users size={20} />,
      colSpan: 'col-span-1',
      color: 'solid-dark'
    },
    { 
      title: 'Machakos Level 5 Hospital', 
      role: 'Software Engineering Attachment', 
      period: '2024 - 2024', 
      img: kenImg, 
      imgStyle: 'cover',
      icon: <Briefcase size={20} />,
      colSpan: 'col-span-2',
      color: 'solid-dark'
    },
    { 
      title: 'Kyangala Boys High School', 
      role: 'Math & Computer Teacher', 
      period: '2023 - 2023', 
      img: kenImg, 
      imgStyle: 'cover',
      icon: <GraduationCap size={20} />,
      colSpan: 'col-span-2',
      color: 'solid-dark'
    },
    { 
      title: 'Young Friends Association', 
      role: 'Chairperson', 
      period: '2019 - Present', 
      img: kenStage, 
      imgStyle: 'cover',
      icon: <Heart size={20} />,
      colSpan: 'col-span-1',
      color: 'solid-dark'
    },
  ]

  return (
    <section id="featuring" className="bento-featuring">
      <div className="container">
        <div className="section-header text-center">
          <h2><span>Featuring</span></h2>
          <div className="underline mx-auto"></div>
          <p className="summary-subtitle">Highlights from my professional and leadership journey.</p>
        </div>

        <div className="bento-grid">
          {compellingHighlights.map((item, i) => (
            <Link to="/featuring" key={i} className={`bento-card ${item.colSpan} ${item.color} group`}>
              {/* Background Image Layer (only for some cards or visible on hover) */}
              <div className="bento-bg-img">
                <img src={item.img} alt={item.title} style={{ objectFit: item.imgStyle }} loading="lazy" />
                <div className="bento-overlay"></div>
              </div>

              {/* Card Content */}
              <div className="bento-content">
                <div className="bento-top">
                  <div className="bento-icon">{item.icon}</div>
                  <span className="bento-date">{item.period}</span>
                </div>
                
                <div className="bento-bottom">
                  <h4>{item.role}</h4>
                  <p>{item.title}</p>
                </div>
              </div>
              
              <div className="bento-arrow">
                <ArrowRight size={20} />
              </div>
            </Link>
          ))}
        </div>

        <div className="view-more-wrapper mt-5">
          <Link to="/featuring" className="btn btn-primary view-more-btn">
            Explore Full Journey <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style>{`
        .bento-featuring {
          background-color: var(--bg-cream);
          padding: 5rem 0;
          font-family: 'Inter', sans-serif;
        }

        .section-header {
          margin-bottom: 3.5rem;
        }

        .summary-subtitle {
          text-align: center;
          color: #666;
          margin-top: 1rem;
          font-size: 1.1rem;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .bento-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          border: 1px solid rgba(255,255,255,0.5);
        }

        .bento-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .col-span-2 {
          grid-column: span 2;
        }

        .col-span-1 {
          grid-column: span 1;
        }

        /* Card Background Colors & Gradients */
        .gradient-orange { background: linear-gradient(135deg, #fff 0%, #fff4ea 100%); }
        .gradient-blue { background: linear-gradient(135deg, #f0f7ff 0%, #e0f0ff 100%); }
        .gradient-green { background: linear-gradient(135deg, #f0fff4 0%, #dcfce7 100%); }
        .solid-dark { background: #1a1a1a; color: white; border-color: #333; }
        .solid-light { background: #ffffff; }
        .solid-cream { background: #faf9f6; }

        .bento-bg-img {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 1;
          opacity: 0.35;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .solid-dark .bento-bg-img { opacity: 0.45; }

        .bento-bg-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bento-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .bento-card:hover .bento-bg-img {
          opacity: 1;
          transform: scale(1.05);
        }

        .bento-card:hover .bento-overlay {
          opacity: 1;
        }

        /* Content Styling */
        .bento-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 2rem;
          transition: color 0.4s ease;
        }

        .bento-card:hover .bento-content {
          color: white !important;
        }

        .bento-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .bento-icon {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: rgba(243,141,28,0.1);
          color: var(--primary, #f38d1c);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .solid-dark .bento-icon {
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .bento-card:hover .bento-icon {
          background: var(--primary, #f38d1c);
          color: white;
        }

        .bento-date {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          background: rgba(0,0,0,0.05);
          backdrop-filter: blur(5px);
          transition: all 0.4s ease;
        }

        .solid-dark .bento-date {
          background: rgba(255,255,255,0.1);
        }

        .bento-card:hover .bento-date {
          background: rgba(255,255,255,0.2);
          color: white;
        }

        .bento-bottom h4 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 0.4rem;
          line-height: 1.2;
        }

        .bento-bottom p {
          font-size: 0.95rem;
          opacity: 0.8;
          font-weight: 500;
          margin: 0;
        }

        /* Hover Arrow */
        .bento-arrow {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          z-index: 3;
          width: 40px;
          height: 40px;
          background: white;
          color: var(--primary, #f38d1c);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-15px) rotate(-45deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .bento-card:hover .bento-arrow {
          opacity: 1;
          transform: translateX(0) rotate(-45deg);
        }

        .view-more-wrapper {
          text-align: center;
          margin-top: 3.5rem;
        }

        .view-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.05rem;
          box-shadow: 0 8px 25px rgba(243,141,28,0.3);
          transition: all 0.3s ease;
        }
        
        .view-more-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(243,141,28,0.4);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1.5rem;
          }
          .col-span-2, .col-span-1 {
            grid-column: span 1;
          }
          /* Re-assign spans for tablet */
          .bento-card:nth-child(1) { grid-column: span 2; }
          .bento-card:nth-child(4) { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .bento-card:nth-child(1), .bento-card:nth-child(4) { 
            grid-column: span 1; 
          }
          .bento-card {
            min-height: 200px;
          }
          .bento-bottom h4 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
