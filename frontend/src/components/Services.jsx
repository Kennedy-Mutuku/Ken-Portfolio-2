import React from 'react'
import { Code, Smartphone, Globe, Camera, Film, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Custom full-stack applications built with modern technologies.", icon: <Globe size={32} /> },
    { title: "Mobile Apps", desc: "Responsive and high-performance mobile-first solutions.", icon: <Smartphone size={32} /> },
    { title: "Process Automation", desc: "Automating repetitive tasks to help you focus on what matters.", icon: <Zap size={32} /> },
    { title: "Software Architecture", desc: "Scalable and efficient system design for your vision.", icon: <Code size={32} /> },
    { title: "Photography", desc: "Professional shoots with a focus on clarity and vivid storytelling.", icon: <Camera size={32} /> },
    { title: "Videography", desc: "Engaging video production and post-processing services.", icon: <Film size={32} /> },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>My <span>Services</span></h2>
          <div className="underline"></div>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services {
          background-color: var(--bg-cream);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .service-card {
            padding: 1.5rem 1rem;
          }
        }

        .service-card {
          padding: 3rem 2rem;
          background: white;
          border-radius: 20px;
          text-align: center;
          transition: var(--transition);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(243, 141, 28, 0.15);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: rgba(243, 141, 28, 0.1);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .service-card h4 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

export default Services
