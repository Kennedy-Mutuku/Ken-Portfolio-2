import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

// No asset imports needed here for the photo strip

const EducationPage = () => {
  return (
    <>
    <Navbar />
    <PageHeader title="Education" />
    <section className="education-page">
      <div className="education-container">

        <div className="education-section">
          <div className="edu-card">
            <div className="edu-icon-col">
              <div className="edu-icon">🎓</div>
              <div className="edu-line"></div>
            </div>
            <div className="edu-content">
              <span className="edu-period">2021 – 2025</span>
              <h3 className="edu-degree">Bachelor of Science in Software Engineering</h3>
              <h4 className="edu-institution">Kisii University</h4>
              <p className="edu-desc">
                Pursued a rigorous programme in Software Engineering, gaining expertise in full-stack development, 
                software architecture, algorithms, databases, cloud computing, and project management. 
                Complemented academics with real-world leadership and software development projects.
              </p>
            </div>
          </div>
        </div>

        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </div>
      
      <style>{`
        .education-page { background: linear-gradient(180deg, #fff 0%, var(--bg-cream) 100%); padding: 4rem 0 5rem 0; font-family: 'Inter', sans-serif; min-height: 80vh; }
        .education-container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
        
        .education-section { display: flex; flex-direction: column; gap: 2.5rem; }
        .edu-card { display: flex; gap: 2rem; background: white; border-radius: 20px; padding: 2.5rem; box-shadow: 0 4px 20px rgba(0,0,0,0.07); border: 1px solid rgba(0,0,0,0.05); }
        .edu-icon-col { display: flex; flex-direction: column; align-items: center; flex: 0 0 60px; }
        .edu-icon { font-size: 2.5rem; background: rgba(243,141,28,0.1); width: 60px; height: 60px; border-radius: 14px; display: flex; align-items: center; justify-content: center; }
        .edu-line { flex: 1; width: 2px; background: rgba(243,141,28,0.2); margin-top: 12px; }
        .edu-content { flex: 1; }
        .edu-period { font-size: 0.8rem; font-weight: 700; color: var(--primary, #f38d1c); text-transform: uppercase; letter-spacing: 1px; }
        .edu-degree { font-size: 1.4rem; font-weight: 800; color: #1a1a1a; margin: 0.4rem 0 0.2rem; }
        .edu-institution { font-size: 1rem; font-weight: 600; color: #555; margin-bottom: 1rem; }
        .edu-desc { font-size: 0.95rem; color: #666; line-height: 1.8; }

        .back-home-wrapper { margin-top: 4rem; text-align: center; }
        .back-home-btn { display: inline-flex; align-items: center; gap: 8px; padding: 0.8rem 2rem; background: transparent; border: 1.5px solid var(--primary, #f38d1c); color: var(--primary, #f38d1c); font-size: 0.9rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; transition: all 0.3s ease; border-radius: 50px; cursor: pointer; }
        .back-home-btn:hover { background: var(--primary, #f38d1c); color: #ffffff; }

        @media (max-width: 768px) {
          .education-page { padding: 3.5rem 0; }
          .edu-card { flex-direction: column; gap: 1.25rem; padding: 2rem 1.5rem; }
          .edu-icon-col { flex-direction: row; align-items: center; gap: 1rem; flex: unset; }
          .edu-line { display: none; }
        }
        @media (max-width: 480px) {
          .edu-degree { font-size: 1.2rem; }
        }
      `}</style>
    </section>
    <Footer />
    </>
  )
}

export default EducationPage
