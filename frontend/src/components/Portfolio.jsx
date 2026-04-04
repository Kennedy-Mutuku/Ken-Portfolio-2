import React, { useState } from 'react'

const Portfolio = () => {
  const [filter, setFilter] = useState('All')

  const projects = [
    { title: "Dominion Softwares", category: "Software", desc: "A premium business automation platform.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" },
    { title: "Vivid Landscapes", category: "Photography", desc: "A collection of panoramic landscape captures.", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800" },
    { title: "Automated Workflow", category: "Software", desc: "Complex automation for enterprise efficiency.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { title: "Real Moments", category: "Video", desc: "Documentary-style event videography.", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
  ]

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Recent <span>Works</span></h2>
          <div className="underline"></div>
        </div>

        <div className="filter-buttons">
          {['All', 'Software', 'Photography', 'Video'].map(cat => (
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
            <div key={i} className="portfolio-card">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-info">
                <span className="cat">{project.category}</span>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio {
          background-color: white;
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
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 600px) {
           .portfolio-grid {
            grid-template-columns: 1fr;
          }
          .portfolio-card img {
            height: 200px;
          }
          .filter-buttons {
            gap: 0.5rem;
          }
          .filter-btn {
            padding: 0.4rem 1rem;
            font-size: 0.9rem;
          }
        }

        .portfolio-card {
          border-radius: 20px;
          overflow: hidden;
          background: var(--bg-cream);
          transition: var(--transition);
          position: relative;
        }

        .portfolio-card:hover {
          transform: translateY(-10px);
        }

        .portfolio-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: var(--transition);
        }

        .portfolio-info {
          padding: 2rem;
        }

        .portfolio-info .cat {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
        }

        .portfolio-info h4 {
          margin: 0.5rem 0 1rem;
          font-size: 1.4rem;
        }

        .portfolio-info p {
          color: #666;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  )
}

export default Portfolio
