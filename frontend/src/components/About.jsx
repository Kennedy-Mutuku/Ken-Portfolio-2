import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Cpu, Layout } from 'lucide-react'
import kenImg from '../assets/ken.jpg.jpeg';

const About = () => {
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
              I am a Software Engineer specializing in full-stack development (MERN stack), passionate about building scalable, real-world systems that solve meaningful problems. I combine strong technical skills with creativity from photography and videography to deliver both functional and visually engaging digital experiences.
            </p>
            <p>
              I have experience designing and developing systems such as management platforms, booking systems, and automation tools, focusing on efficiency, usability, and reliability. I enjoy turning complex manual processes into simple, automated solutions that improve productivity and user experience.
            </p>
            <p>
              Beyond development, I bring leadership and collaboration skills, having led projects and worked closely with teams to deliver impactful solutions.
            </p>
            <p>
              Whether it's writing clean, maintainable code or creating compelling visuals, I am committed to delivering high-quality, professional results that make a difference.
            </p>
            
            <div className="skill-tags">
              <span className="tag"><Terminal size={14} /> Automation</span>
              <span className="tag"><Cpu size={14} /> MERN Stack</span>
              <span className="tag"><Layout size={14} /> UI/UX Design</span>
            </div>
          </div>

          <div className="about-image-col">
            <motion.div 
              className="about-image-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="img-wrapper">
                <img src={kenImg} alt="Kennedy Kioko Mutuku" />
              </div>
              <div className="card-floating-badge">
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4', margin: 0, fontWeight: '500', color: '#444' }}>
                  I am a results-driven software engineer who builds scalable systems, solves real-world problems, and delivers impactful digital experiences with precision and creativity, backed by strong leadership, effective communication, and confident public speaking abilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background-color: white;
          padding: 2.5rem 0 5rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
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
          margin: 0.8rem auto 0;
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
          padding: 0.6rem 1.2rem;
          background: white;
          color: var(--primary);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .tag:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }

        .about-image-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-image-card {
          position: relative;
          background: var(--bg-cream);
          padding: 1.5rem;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          max-width: 450px;
          margin: 0 auto;
        }

        .img-wrapper {
          border-radius: 12px;
          overflow: hidden;
          width: 100%;
          height: auto;
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-floating-badge {
          position: absolute;
          bottom: -30px;
          right: -20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow-lg);
          max-width: 350px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 10;
          transition: var(--transition);
        }

        .card-floating-badge:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }

        /* Removed years/text styles as they are replaced by a paragraph */

        @media (max-width: 992px) {
          .about {
            padding: 1.5rem 0 4rem 0;
          }
          .section-header {
            margin-bottom: 1.5rem;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .skill-tags {
            justify-content: center;
          }
          .about-image-card {
            margin-bottom: 2rem;
          }
          .about-content h3 {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 600px) {
          .section-header {
            margin-bottom: 1rem;
          }
          .about-grid {
            gap: 2rem;
          }
          .card-floating-badge {
            right: auto;
            left: 50%;
            transform: translateX(-50%);
            bottom: -35px;
            width: 90%;
            max-width: 350px;
          }
        }
      `}</style>
    </section>
  )
}

export default About
