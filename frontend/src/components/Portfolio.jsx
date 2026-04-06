import React, { useState, useEffect } from 'react';
import ksucuImg from '../assets/ksucu-mc 2.png';
import ksucuMobileImg from '../assets/ksucu-mc1.jpeg';
import jumuiaImg from '../assets/jumuia 1 (1).png';
import jumuiaMobileImg from '../assets/jumuia 2.png';
import hodImg from '../assets/hod.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Kisii University Christian Union",
      category: "Web App",
      problem: [
        "The union faced multiple operational inefficiencies due to reliance on manual and fragmented systems:",
        "No centralized and secure platform for managing admissions, communication, and internal elections",
        "Difficulty separating and tracking financial contributions (tithe, offering, thanksgiving) within the Paybill system",
        "Manual attendance tracking, which was time-consuming and unreliable",
        "Challenges in organizing Bible study groups based on location, gender, and year of study",
        "Loss of important student media (photos), affecting memory preservation",
        "Manual evangelism (soul-winning) records leading to data loss and poor tracking",
        "Limited access to governing documents and organizational information",
        "Lack of a unified communication platform for members",
        "Dependence on manual record-keeping instead of a reliable database system"
      ],
      procedure: "Conducted comprehensive requirements gathering with union leadership and stakeholders, identifying key operational gaps. Designed a scalable, role-based system architecture and structured the backend for flexibility, security, and future expansion.",
      solution: [
        "Developed a robust, centralized web platform that digitizes and streamlines union operations through:",
        "Automated admission and member management workflows",
        "Secure financial tracking with categorized Paybill contributions",
        "Online attendance system for efficient record management",
        "Intelligent Bible study grouping based on user attributes",
        "Centralized media gallery with long-term storage and retrieval",
        "Digital evangelism (soul-winning) tracking system",
        "Integrated KSUCU-MC AI for quick access to governing documents and information",
        "Real-time community chat for member interaction",
        "Reliable database system replacing manual records",
        "Interactive dashboards for monitoring and decision-making"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      link: "https://ksucu-mc.co.ke/",
      image: ksucuImg,
      modalImage: ksucuMobileImg
    },
    {
      title: "Jumuia Resorts",
      category: "Platform",
      subtitle: "A scalable multi-branch hotel management system enhancing booking, operations, and customer engagement.",
      problem: [
        "Jumuia Resorts faced several operational challenges due to disconnected systems across its multiple hotel branches:",
        "Lack of a unified system connecting all hotel branches (Limuru, Kisumu, Kanamai), leading to fragmented operations",
        "Clients were unable to book rooms online or view available services across different hotels",
        "Inefficient revenue management and lack of centralized financial tracking",
        "No structured system for advertising tenders and procurement opportunities",
        "Difficulty in publishing and managing job vacancies across the organization",
        "Limited online visibility of services such as accommodation, conferencing, events, and catering",
        "Poor customer engagement due to lack of an integrated digital platform",
        "Dependence on manual and semi-digital processes across different locations"
      ],
      procedure: "Conducted system analysis and stakeholder consultations across multiple hotel branches to identify operational gaps. Designed a centralized, scalable architecture to unify all hotel operations under one platform, ensuring seamless integration of booking, management, and communication systems.",
      solution: [
        "Developed a comprehensive multi-hotel management platform that streamlines operations and enhances customer experience through:",
        "Centralized system connecting all hotel branches under one platform",
        "Online room booking system with real-time availability",
        "Service listing and display (accommodation, conferencing, events, catering, etc.)",
        "Integrated revenue management and reporting system",
        "Tender advertisement and management portal",
        "Job vacancy posting and application management system",
        "Enhanced customer engagement through a modern, user-friendly website",
        "Scalable backend infrastructure supporting multiple locations and services"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      link: "https://www.resortjumuia.com/",
      image: jumuiaImg,
      modalImage: jumuiaMobileImg
    },
    {
      title: "House of David Church",
      category: "Web App",
      problem: "Lack of a modern digital presence to engage the congregation, stream media securely, and manage community events effectively.",
      procedure: "Iterative UI/UX design focusing on welcoming aesthetics and accessibility, followed by integration of content management features.",
      solution: "Deployed a premium, visually engaging church website with event tracking, integrated media delivery, and community management tools.",
      technologies: ["React", "Node.js", "Express", "Contentful"],
      link: "https://houseofdavid.top/",
      image: hodImg,
      modalImage: hodImg
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>My <span>Projects</span></h2>
          <div className="underline"></div>
        </div>

        <div className="filter-buttons">
          {['All', 'Web App', 'Platform'].map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, i) => (
            <div key={i} className="portfolio-card" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} />
              <div className="portfolio-info">
                <span className="cat">{project.category}</span>
                <h4>{project.title}</h4>
                <div className="view-more">
                  <span>View Details</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphic Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => {
          setSelectedProject(null);
          document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-sticky-header">
              <button className="back-to-projects-btn" onClick={() => {
                setSelectedProject(null);
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to Projects
              </button>
              <button className="close-btn" onClick={() => {
                setSelectedProject(null);
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}>&times;</button>
            </div>
            
            <div className="modal-body">
              <div className="modal-image-col">
                <img src={selectedProject.modalImage || selectedProject.image} alt={selectedProject.title} className="modal-img" />
              </div>
              <div className="modal-details-col">
                <div className="modal-header-info">
                  <span className="modal-cat">{selectedProject.category}</span>
                </div>
                <h3>{selectedProject.title}</h3>
                {selectedProject.subtitle && (
                  <p className="modal-subtitle">{selectedProject.subtitle}</p>
                )}
                
                <div className="modal-section">
                  <h5>Problem</h5>
                  {Array.isArray(selectedProject.problem) ? (
                    <div className="list-content">
                      <p className="intro-p">{selectedProject.problem[0]}</p>
                      <ul>
                        {selectedProject.problem.slice(1).map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                  ) : (
                    <p>{selectedProject.problem}</p>
                  )}
                </div>
                
                <div className="modal-section">
                  <h5>Procedure</h5>
                  <p>{selectedProject.procedure}</p>
                </div>
                
                <div className="modal-section">
                  <h5>Solution</h5>
                  {Array.isArray(selectedProject.solution) ? (
                    <div className="list-content">
                      <p className="intro-p">{selectedProject.solution[0]}</p>
                      <ul>
                        {selectedProject.solution.slice(1).map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    </div>
                  ) : (
                    <p>{selectedProject.solution}</p>
                  )}
                </div>

                <div className="modal-section">
                  <h5>Technologies</h5>
                  <div className="tech-tags">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="live-link-btn">
                  View Live Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .portfolio {
          background-color: var(--bg-cream, #f9f9f9);
          padding: 5rem 0;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-btn.active, .filter-btn:hover {
          background: var(--primary);
          color: white;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .portfolio-card {
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
          border: 1px solid rgba(0,0,0,0.02);
        }

        .portfolio-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .portfolio-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .portfolio-card:hover img {
          transform: scale(1.05);
        }

        .portfolio-info {
          padding: 2rem;
          background: white;
          position: relative;
          z-index: 2;
        }

        .portfolio-info .cat {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .portfolio-info h4 {
          margin: 0.8rem 0 1.5rem;
          font-size: 1.4rem;
          color: var(--dark);
        }

        .view-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: gap 0.3s ease;
        }

        .portfolio-card:hover .view-more {
          gap: 1rem;
        }

        /* --- Modal Styles --- */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          padding-top: 130px;
          animation: fadeIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: white;
          width: 100%;
          max-width: 1100px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          max-height: calc(100vh - 150px);
          overflow-y: auto;
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .close-btn {
          background: rgba(0,0,0,0.05);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--primary);
          color: white;
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .modal-image-col {
          height: 100%;
          min-height: 400px;
          background: #f7f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .modal-details-col {
          padding: 3rem;
          background: white;
        }

        .modal-sticky-header {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          z-index: 20;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .back-to-projects-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: #666;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          margin: 0;
          padding: 0;
          transition: var(--transition);
        }

        .back-to-projects-btn:hover {
          color: var(--primary);
          transform: translateX(-4px);
        }

        .modal-cat {
          font-size: 0.85rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: inline-block;
          margin-bottom: 1rem;
        }

        .modal-details-col h3 {
          font-size: 2.2rem;
          color: var(--dark);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .modal-subtitle {
          font-size: 1.05rem;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.5;
          font-weight: 500;
          font-style: italic;
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-section h5 {
          font-size: 1rem;
          color: var(--dark);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .modal-section p {
          color: #555;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .list-content ul {
          list-style: none;
          padding-left: 0;
          margin-top: 0.8rem;
          margin-bottom: 0;
        }

        .list-content li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.6rem;
          color: #555;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .list-content li::before {
          content: '→';
          position: absolute;
          left: 0;
          top: -1px;
          color: var(--primary);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.8rem;
        }

        .tech-tag {
          background: rgba(var(--primary-rgb, 0, 122, 255), 0.1);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .live-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 2rem;
          transition: all 0.3s ease;
        }

        .live-link-btn:hover {
          background: #000;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .live-link-btn svg {
          transition: transform 0.3s ease;
        }

        .live-link-btn:hover svg {
          transform: translate(3px, -3px);
        }

        @media (max-width: 900px) {
          .modal-body {
            grid-template-columns: 1fr;
          }
          .modal-image-col {
            min-height: 250px;
            height: 300px;
          }
          .modal-details-col {
            padding: 2rem;
          }
          .modal-details-col h3 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 600px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .filter-buttons {
            gap: 0.5rem;
          }
          .modal-overlay {
            padding: 1rem;
            padding-top: 110px;
          }
          .modal-content {
            max-height: calc(100vh - 130px);
          }
          .modal-details-col {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Portfolio
