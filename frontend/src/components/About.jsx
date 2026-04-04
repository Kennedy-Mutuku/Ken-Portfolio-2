import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Camera, Video, Terminal, Cpu, Layout } from 'lucide-react'

const About = () => {
  const experiences = [
    {
      title: "Software Engineering",
      icon: <Code2 size={40} />,
      desc: "Specialized in full-stack development, automating workflows, and building scalable digital solutions.",
      skills: ["React", "Node.js", "MongoDB", "Python", "Full Stack"]
    },
    {
      title: "Photography & Video",
      icon: <Camera size={40} />,
      desc: "Capturing moments through high-quality visuals, ensuring clarity and an unforgettable aesthetic.",
      skills: ["Vivid Visuals", "Storytelling", "Post-processing", "Videography"]
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About <span>Me</span></h2>
          <div className="underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>Hello, I'm Kennedy Kioko Mutuku</h3>
            <p>
              I am a multi-disciplinary professional blending the logic of <strong>Software Engineering</strong> with the creativity of <strong>Photography and Videography</strong>. 
              My mission is to help people focus on what truly matters by automating the mundane and capturing the extraordinary.
            </p>
            <p>
              Whether it's writing clean, efficient code or framing the perfect shot, I am dedicated to delivering professional results that stand out.
            </p>
            
            <div className="skill-tags">
              <span className="tag"><Terminal size={14} /> Automation</span>
              <span className="tag"><Cpu size={14} /> MERN Stack</span>
              <span className="tag"><Layout size={14} /> UI/UX Design</span>
            </div>
          </div>

          <div className="exp-cards">
            {experiences.map((exp, b) => (
              <motion.div 
                key={b} 
                className="exp-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="icon">{exp.icon}</div>
                <h4>{exp.title}</h4>
                <p>{exp.desc}</p>
                <div className="exp-skills">
                  {exp.skills.map(s => <span key={s}>{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background-color: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: var(--text-dark);
        }

        .section-header span {
          color: var(--primary);
        }

        .underline {
          width: 80px;
          height: 5px;
          background: var(--primary);
          margin: 1rem auto;
          border-radius: 10px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-content h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .about-content p {
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          color: #444;
        }

        .skill-tags {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .tag {
          padding: 0.5rem 1rem;
          background: var(--bg-cream);
          color: var(--primary);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .exp-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .exp-card {
          padding: 2rem;
          background: var(--bg-cream);
          border-radius: 20px;
          text-align: center;
          transition: var(--transition);
        }

        .exp-card .icon {
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .exp-card h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .exp-card p {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 1.5rem;
        }

        .exp-skills {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-skills span {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .exp-cards {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
          .about-content h3 {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 600px) {
          .exp-cards {
            grid-template-columns: 1fr;
          }
          .skill-tags {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default About
