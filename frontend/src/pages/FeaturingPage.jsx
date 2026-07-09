import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Asset imports
import dominionLogo from '../assets/Dominion Sodtwares Logo.png'
import ksucuImg from '../assets/ksucu-mc1.jpeg'
import ksucuGroup from '../assets/ksucu-mc 2.png'
import kenStage from '../assets/ken stage.jpg'
import kenImg from '../assets/kennnnn.jpg'

const FeaturingPage = () => {

  const experiences = [
    {
      role: 'Founder & Chief Executive Officer (CEO)',
      company: 'Dominion Softwares',
      period: 'January 2025 – Present',
      img: dominionLogo,
      imgStyle: 'contain',
      description: 'Founded and lead Dominion Softwares, a technology company specializing in custom software development, enterprise solutions, web and mobile applications, cloud technologies, and digital transformation services. Responsible for business strategy, software architecture, project management, and leading multidisciplinary development teams.',
      responsibilities: [
        'Lead software development projects from concept to deployment',
        'Design scalable web and mobile applications',
        'Drive digital transformation initiatives for organizations',
        'Manage client relationships and technical consultations',
        'Oversee product innovation and company growth',
      ],
    },
    {
      role: 'Founder & Chief Executive Officer (CEO)',
      company: 'Dominion Multimedia Group',
      period: 'January 2025 – Present',
      img: kenStage,
      imgStyle: 'cover',
      description: 'Lead a creative media company providing professional photography, videography, branding, graphic design, and digital content production. Focused on helping businesses, organizations, and individuals strengthen their visual identity through high-quality media solutions.',
      responsibilities: [
        'Lead creative direction and business operations',
        'Manage multimedia production projects',
        'Develop branding and digital marketing solutions',
        'Coordinate photography and videography teams',
        'Deliver professional visual storytelling services',
      ],
    },
    {
      role: 'Lead Developer',
      company: 'Kisii University Christian Union – Main Campus (KSUCU-MC)',
      period: 'Nov 2025 - Apr 2026',
      img: ksucuGroup,
      imgStyle: 'cover',
      description: 'Serving as the Lead Developer for KSUCU-MC, overseeing the design, development, and maintenance of digital systems that support ministry operations. Collaborating with leadership to align technology solutions with the union’s mission of discipleship, evangelism, and leadership development.',
      responsibilities: [
        'Leading the development of the KSUCUMC digital platform',
        'Building and integrating KSUCUMC AI for intelligent user interaction',
        'Developing an attendance management system for member tracking',
        'Implementing a finance system with M-Pesa integration for streamlined contributions',
        'Designing a media gallery to document and showcase ministry activities',
        'Managing system updates, performance, and user experience improvements',
      ],
    },
    {
      role: 'Publicity Secretary',
      company: 'Kisii University Christian Union',
      period: 'Sep 2024 - Sep 2025',
      img: ksucuImg,
      imgStyle: 'cover',
      description: 'As an Executive Committee member, I oversaw multiple boards including Software Development & Maintenance, Communication, ICT, and Media Production. My role focused on enhancing communication, technology, and media engagement and simplifying administration for a community of 4,000 members.',
      responsibilities: [
        'Spearheaded development of the Union ERP (ksucu-mc.co.ke), automating repetitive tasks like nominations and Bible study groupings',
        'Improved member engagement by launching a WhatsApp Channel and enhancing internal messaging efficiency',
        'Managed the Union’s technology infrastructure, database, and network systems',
        'Introduced live streaming of sermons and church activities, gaining recognition for high standard media',
      ],
    },
    {
      role: 'ICT Board Chairperson',
      company: 'Kisii University Christian Union-Main Campus',
      period: 'Nov 2023 - Nov 2024',
      img: ksucuImg,
      imgStyle: 'cover',
      description: 'Led the ICT Board, coordinating technology initiatives, technical support, and digital innovation across the organization. Collected, maintained, and updated the union’s database and supported fellowships through projections.',
      responsibilities: [
        'Developed and launched the first Union Website (ksucu-mc.co.ke)',
        'Upgraded database from local Excel data to cloud-based MongoDB Atlas for security and ease of access',
        'Introduced Videopsalm and upgraded the church projection system',
        'Led the purchase of new equipment and strengthened teamwork and coordination within the ICT Board',
      ],
    },
    {
      role: 'Software Engineering Attachment',
      company: 'Machakos Level 5 Hospital',
      period: 'May 2024 - Aug 2024',
      img: kenImg,
      imgStyle: 'cover',
      description: 'Served in the ICT Department supporting staff and patients in navigating the AphiaOne System. Designed the Machakos Referral Hospital Feedback & Complaint Management System and a mobile app with offline sync capabilities.',
      responsibilities: [
        'IT support, networking, hardware repair and maintenance',
        'Designed a Feedback & Complaint Management System to help patients and staff submit feedback',
        'Built a mobile app that works offline and syncs data to the cloud',
        'Developed discipline, communication skills, workplace etiquette, and empathy',
      ],
    },
    {
      role: 'Mathematics and Computer Teacher',
      company: 'Kyangala Boys High School',
      period: 'Apr 2023 - Aug 2023',
      img: kenImg,
      imgStyle: 'cover',
      description: 'Volunteer teacher for Computer Studies and Mathematics, while also managing the school’s technology and network systems. Recognized for commitment, often arriving early and staying late.',
      responsibilities: [
        'Teaching Computer Studies and Mathematics to high school students',
        'Handling computer, electronics, network and printer maintenance',
        'Providing network support and managing school IT systems',
        'Guiding students in digital literacy and practical computer skills',
      ],
    },
    {
      role: 'ICT Support',
      company: 'Sequest Capital Stove Company',
      period: 'May 2022 - Aug 2022',
      img: kenImg,
      imgStyle: 'cover',
      description: 'Provided ICT support to streamline the registration and tracking of installed stoves for energy conservation and environmental protection.',
      responsibilities: [
        'Maintaining accurate records and assisting with system operations',
        'Ensuring smooth digital management of stove installations',
        'Database management and technical troubleshooting',
        'Supporting sustainable initiatives through technology',
      ],
    },
    {
      role: 'Chairperson & Co-founder',
      company: 'Young Friends Association (YFA)',
      period: 'Jan 2019 - Present',
      img: kenStage,
      imgStyle: 'cover',
      description: 'Co-founded a youth organization focused on financial growth, leadership, and positive change while in Form 3. Started small with a membership structure, monthly savings contributions, and engagement activities discussing discipline and financial responsibility.',
      responsibilities: [
        'Built a platform focused on financial growth and leadership among youth',
        'Introduced small internal lending systems',
        'Managed group investments in poultry and goat farming projects',
        'Learned that age is not a barrier to leadership, structure, or impact',
      ],
    },
  ]

  return (
    <>
    <Navbar />
    <section id="featuring" className="featuring">
      <div className="featuring-container">

        {/* Section Title */}
        <div className="featuring-header">
          <h2><span>Featuring</span></h2>
          <div className="underline"></div>
          <p className="featuring-subtitle">A snapshot of my professional experience and career journey</p>
        </div>

        {/* Tab Content */}
        <div className="tab-content">

          {/* ── EXPERIENCE ── */}
            <div className="experience-list">
              {experiences.map((exp, i) => (
                <div key={i} className="exp-card">
                  <div className="exp-image-col">
                    <div className="exp-img-frame">
                      <img src={exp.img} alt={exp.company} style={{ objectFit: exp.imgStyle }} />
                    </div>
                    <div className="exp-timeline-dot"></div>
                    {i < experiences.length - 1 && <div className="exp-timeline-line"></div>}
                  </div>
                  <div className="exp-content-col">
                    <div className="exp-period">{exp.period}</div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                    <p className="exp-desc">{exp.description}</p>
                    <ul className="exp-responsibilities">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Back to Home */}
        <div className="back-home-wrapper">
          <Link to="/" className="back-home-btn">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </div>

      <style>{`
        .featuring {
          background: linear-gradient(180deg, #fff 0%, var(--bg-cream) 100%);
          padding: 5rem 0;
          font-family: 'Inter', sans-serif;
        }

        .featuring-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .featuring-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .featuring-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-dark, #1a1a1a);
        }

        .featuring-header span {
          color: var(--primary, #f38d1c);
        }

        .underline {
          width: 80px;
          height: 4px;
          background: var(--primary, #f38d1c);
          margin: 0.8rem auto 1rem;
          border-radius: 2px;
        }

        .featuring-subtitle {
          color: #666;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        /* Tabs */
        .featuring-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 0.7rem 1.8rem;
          border: 2px solid #e0e0e0;
          background: white;
          color: #555;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .tab-btn:hover {
          border-color: var(--primary, #f38d1c);
          color: var(--primary, #f38d1c);
        }

        .tab-btn.active {
          background: var(--primary, #f38d1c);
          border-color: var(--primary, #f38d1c);
          color: white;
          box-shadow: 0 4px 15px rgba(243,141,28,0.35);
        }

        /* ── EXPERIENCE ── */
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .exp-card {
          display: flex;
          gap: 2rem;
          position: relative;
          padding-bottom: 2.5rem;
        }

        .exp-image-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 0 0 100px;
        }

        .exp-img-frame {
          width: 90px;
          height: 90px;
          border-radius: 14px;
          overflow: hidden;
          border: 3px solid white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          background: #f5f5f5;
          flex-shrink: 0;
        }

        .exp-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .exp-timeline-dot {
          width: 14px;
          height: 14px;
          background: var(--primary, #f38d1c);
          border-radius: 50%;
          margin: 12px 0 0;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(243,141,28,0.2);
        }

        .exp-timeline-line {
          flex: 1;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary, #f38d1c), rgba(243,141,28,0.1));
          margin: 4px 0;
          min-height: 30px;
        }

        .exp-content-col {
          flex: 1;
          background: white;
          border-radius: 16px;
          padding: 1.5rem 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease;
        }

        .exp-content-col:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .exp-period {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary, #f38d1c);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.4rem;
        }

        .exp-role {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.2rem;
        }

        .exp-company {
          font-size: 0.95rem;
          font-weight: 600;
          color: #555;
          margin-bottom: 0.8rem;
        }

        .exp-desc {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .exp-responsibilities {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .exp-responsibilities li {
          font-size: 0.9rem;
          color: #555;
          padding-left: 1.2rem;
          position: relative;
        }

        .exp-responsibilities li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--primary, #f38d1c);
          font-size: 0.8rem;
        }

        /* ── LEADERSHIP ── */
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.2rem;
        }

        .leader-card {
          background: white;
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .leader-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          border-color: rgba(243,141,28,0.3);
        }

        .leader-icon {
          font-size: 2rem;
          width: 55px;
          height: 55px;
          background: rgba(243,141,28,0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .leader-info {
          flex: 1;
        }

        .leader-role {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.15rem;
        }

        .leader-org {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 0.3rem;
        }

        .leader-period {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--primary, #f38d1c);
          background: rgba(243,141,28,0.08);
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
        }

        /* ── EDUCATION ── */
        .education-section {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .edu-card {
          display: flex;
          gap: 2rem;
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .edu-icon-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 0 0 60px;
        }

        .edu-icon {
          font-size: 2.5rem;
          background: rgba(243,141,28,0.1);
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edu-line {
          flex: 1;
          width: 2px;
          background: rgba(243,141,28,0.2);
          margin-top: 12px;
        }

        .edu-content {
          flex: 1;
        }

        .edu-period {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary, #f38d1c);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .edu-degree {
          font-size: 1.4rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0.4rem 0 0.2rem;
        }

        .edu-institution {
          font-size: 1rem;
          font-weight: 600;
          color: #555;
          margin-bottom: 1rem;
        }

        .edu-desc {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.8;
        }

        .edu-photo-strip {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          border-radius: 16px;
          overflow: hidden;
        }

        .edu-photo-strip img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.4s ease;
        }

        .edu-photo-strip img:hover {
          transform: scale(1.03);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .featuring-container {
            padding: 0 1.5rem;
          }
          .edu-photo-strip img {
            height: 160px;
          }
        }

        @media (max-width: 768px) {
          .featuring {
            padding: 3.5rem 0;
          }
          .featuring-header h2 {
            font-size: 2.2rem;
          }
          .exp-card {
            flex-direction: column;
            gap: 1rem;
            padding-bottom: 2rem;
          }

          .exp-image-col {
            flex-direction: row;
            flex: unset;
            align-items: center;
            gap: 1rem;
          }

          .exp-img-frame {
            width: 70px;
            height: 70px;
            border-radius: 10px;
            border-width: 2px;
          }

          .exp-timeline-dot, .exp-timeline-line {
            display: none;
          }

          .exp-content-col {
            padding: 1.25rem 1.5rem;
          }

          .edu-card {
            flex-direction: column;
            gap: 1.25rem;
            padding: 2rem 1.5rem;
          }
          
          .edu-icon-col {
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            flex: unset;
          }
          
          .edu-line {
            display: none;
          }

          .edu-photo-strip {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }

          .edu-photo-strip img {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .featuring-header h2 {
            font-size: 1.8rem;
          }
          
          .featuring-subtitle {
            font-size: 0.9rem;
          }
          
          .featuring-tabs {
            gap: 0.4rem;
            margin-bottom: 2rem;
          }

          .tab-btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
            width: 100%;
            max-width: 200px;
          }

          .exp-content-col {
            padding: 1rem;
          }
          
          .exp-role {
            font-size: 1.1rem;
          }
          
          .exp-company {
            font-size: 0.9rem;
          }
          
          .exp-desc, .exp-responsibilities li {
            font-size: 0.85rem;
          }
          
          .leader-card {
            padding: 1.25rem;
          }
          
          .leader-icon {
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
          }
          
          .edu-degree {
            font-size: 1.2rem;
          }
        }
        
        /* Back Button */
        .back-home-wrapper {
          margin-top: 4rem;
          text-align: center;
        }

        .back-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.8rem 2rem;
          background: transparent;
          border: 1.5px solid var(--primary, #f38d1c);
          color: var(--primary, #f38d1c);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 50px;
          cursor: pointer;
        }

        .back-home-btn:hover {
          background: var(--primary, #f38d1c);
          color: #ffffff;
        }
      `}</style>
    </section>
    <Footer />
    </>
  )
}

export default FeaturingPage
