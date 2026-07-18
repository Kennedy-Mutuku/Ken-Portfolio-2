import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import kenImg from '../assets/ken stage.jpg'

const About = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section id="about" className="about-premium" ref={containerRef}>
      <div className="container">
        <div className="about-premium-layout">
          
          <div className="about-premium-image-col">
            <motion.div 
              className="premium-image-wrapper"
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img src={kenImg} alt="Kennedy Kioko Mutuku" className="premium-img" loading="lazy" />
              <div className="premium-image-overlay"></div>
            </motion.div>
          </div>

          <div className="about-premium-text-col">
            <motion.div 
              className="premium-text-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {}
              }}
            >
              <motion.h2 
                className="premium-heading"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                MEET<br/><span className="highlight">KENNEDY.</span>
              </motion.h2>
              
              <motion.div 
                className="premium-divider"
                variants={{
                  hidden: { width: 0 },
                  visible: { width: "80px", transition: { duration: 0.6, ease: "easeOut" } }
                }}
              ></motion.div>

              <motion.p 
                className="premium-paragraph lead"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                Software Engineer, entrepreneur, and digital innovator dedicated to building technology and media solutions that create meaningful impact.
              </motion.p>

              <motion.p 
                className="premium-paragraph"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                As the Founder and CEO of Dominion Softwares Ltd and Dominion Multimedia Group, he leads the development of innovative software systems and creative digital media that empower businesses to embrace digital transformation and communicate with excellence.
              </motion.p>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
              >
                <Link to="/about" className="premium-btn">
                  <span>DISCOVER MORE</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        .about-premium {
          padding: 8rem 0 6rem;
          background-color: #050505; /* Deep dark premium background */
          color: #ffffff;
          overflow: hidden;
        }

        .about-premium-layout {
          display: flex;
          align-items: center;
          gap: 6rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Image Column */
        .about-premium-image-col {
          flex: 1;
          position: relative;
          z-index: 2;
        }

        .premium-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .premium-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%) contrast(1.1);
        }

        .premium-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
        }

        /* Text Column */
        .about-premium-text-col {
          flex: 1;
          z-index: 3;
        }

        .premium-text-content {
          max-width: 500px;
        }

        .premium-heading {
          font-family: 'Inter', sans-serif;
          font-size: 4rem;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 2rem;
          color: #ffffff;
        }

        .premium-heading .highlight {
          color: var(--primary, #f38d1c);
        }

        .premium-divider {
          height: 3px;
          background-color: var(--primary, #f38d1c);
          margin-bottom: 2.5rem;
        }

        .premium-paragraph {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #a0a0a0;
          margin-bottom: 1.5rem;
        }

        .premium-paragraph.lead {
          font-size: 1.35rem;
          color: #e0e0e0;
          font-weight: 300;
          line-height: 1.6;
        }

        .premium-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 2rem;
          padding: 1rem 2rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s ease;
          overflow: hidden;
          position: relative;
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--primary, #f38d1c);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease;
          z-index: -1;
        }

        .premium-btn:hover {
          border-color: var(--primary, #f38d1c);
          padding-left: 2.5rem;
          padding-right: 1.5rem;
        }

        .premium-btn:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }

        .premium-btn svg {
          transition: transform 0.4s ease;
        }

        .premium-btn:hover svg {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-premium-layout {
            gap: 4rem;
            flex-direction: column;
          }
          
          .about-premium-image-col {
            width: 100%;
            max-width: 600px;
          }

          .premium-text-content {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .about-premium {
            padding: 5rem 0 4rem;
          }
          
          .premium-heading {
            font-size: 3rem;
          }
          
          .premium-paragraph.lead {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About
