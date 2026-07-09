import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Award, Building, Clapperboard, Code, Megaphone, Monitor, CircleDollarSign, Briefcase, BookOpen, Settings } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

const LeadershipPage = () => {
  const leadership = [
    { role: 'Lead Developer', org: 'KSUCU-MC', period: 'Nov 2025 – Apr 2026', icon: <Code size={24} className="leader-svg" /> },
    { role: 'Founder & CEO', org: 'Dominion Softwares', period: 'Jan 2025 – Present', icon: <Building size={24} className="leader-svg" /> },
    { role: 'Founder & CEO', org: 'Dominion Multimedia Group', period: 'Jan 2025 – Present', icon: <Clapperboard size={24} className="leader-svg" /> },
    { role: 'Publicity Secretary', org: 'Kisii University Christian Union', period: 'Sep 2024 – Sep 2025', icon: <Megaphone size={24} className="leader-svg" /> },
    { role: 'Software Engineering Attachment', org: 'Machakos Level 5 Hospital', period: 'May 2024 - Aug 2024', icon: <Briefcase size={24} className="leader-svg" /> },
    { role: 'ICT Board Chairperson', org: 'Kisii University Christian Union', period: 'Nov 2023 – Nov 2024', icon: <Monitor size={24} className="leader-svg" /> },
    { role: 'Treasurer', org: 'Christian Minds Committee', period: '2023 – 2024', icon: <CircleDollarSign size={24} className="leader-svg" /> },
    { role: 'Mathematics & Computer Teacher', org: 'Kyangala Boys High School', period: 'Apr 2023 - Aug 2023', icon: <BookOpen size={24} className="leader-svg" /> },
    { role: 'ICT Support', org: 'Sequest Capital Stove Company', period: 'May 2022 - Aug 2022', icon: <Settings size={24} className="leader-svg" /> },
    { role: 'Chairperson & Co-founder', org: 'Young Friends Association (YFA)', period: 'Jan 2019 – Present', icon: <Award size={24} className="leader-svg" /> },
  ]

  return (
    <>
    <Navbar />
    <PageHeader title="Leadership" />
    <section className="leadership-page">
      <div className="leadership-container">

        <div className="leadership-grid">
          {leadership.map((item, i) => (
            <div key={i} className="leader-card">
              <div className="leader-icon">{item.icon}</div>
              <div className="leader-info">
                <h4 className="leader-role">{item.role}</h4>
                <p className="leader-org">{item.org}</p>
                <span className="leader-period">{item.period}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </div>
      
      <style>{`
        .leadership-page { background: linear-gradient(180deg, #fff 0%, var(--bg-cream) 100%); padding: 4rem 0 5rem 0; font-family: 'Inter', sans-serif; min-height: 80vh; }
        .leadership-container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
        .leadership-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; }
        .leader-card { background: white; border-radius: 14px; padding: 1.5rem; display: flex; align-items: center; gap: 1rem; box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s ease; }
        .leader-card:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); border-color: rgba(243,141,28,0.3); }
        .leader-icon { font-size: 2rem; width: 55px; height: 55px; background: rgba(243,141,28,0.08); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .leader-svg { color: var(--primary, #f38d1c); stroke-width: 1.5; }
        .leader-info { flex: 1; }
        .leader-role { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.15rem; }
        .leader-org { font-size: 0.85rem; color: #666; margin-bottom: 0.3rem; }
        .leader-period { font-size: 0.78rem; font-weight: 600; color: var(--primary, #f38d1c); background: rgba(243,141,28,0.08); padding: 0.2rem 0.6rem; border-radius: 20px; }
        .back-home-wrapper { margin-top: 4rem; text-align: center; }
        .back-home-btn { display: inline-flex; align-items: center; gap: 8px; padding: 0.8rem 2rem; background: transparent; border: 1.5px solid var(--primary, #f38d1c); color: var(--primary, #f38d1c); font-size: 0.9rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease; border-radius: 50px; cursor: pointer; }
        .back-home-btn:hover { background: var(--primary, #f38d1c); color: #ffffff; }

        @media (max-width: 768px) {
          .leadership-page { padding: 3.5rem 0; }
        }
        @media (max-width: 480px) {
          .leader-card { padding: 1.25rem; }
          .leader-icon { width: 45px; height: 45px; font-size: 1.5rem; }
        }
      `}</style>
    </section>
    <Footer />
    </>
  )
}

export default LeadershipPage
