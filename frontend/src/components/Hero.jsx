import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, ExternalLink, Link, ArrowRight } from 'lucide-react'

const content = [
  { phrase: "Your Vision, My Dedication.", img: "/src/assets/ken.jpg.jpeg" },
  { phrase: "Moments Captured, Forever Vivid.", img: "/src/assets/WhatsApp Image 2026-04-04 at 1.51.35 AM.jpeg" },
  { phrase: "Precision Code, Timely Delivery.", img: "/src/assets/WhatsApp Image 2026-04-04 at 1.52.06 AM.jpeg" },
  { phrase: "Industrious Soul, Creative Mind.", img: "/src/assets/WhatsApp Image 2026-04-04 at 1.52.30 AM.jpeg", position: "top" },
  { phrase: "Always on Time, Always Exceptional.", img: "/src/assets/WhatsApp Image 2026-04-04 at 1.52.46 AM.jpeg" },
  { phrase: "Excellence, Crafted with Care.", img: "/src/assets/ken.jpg.jpeg" }
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Calculate indices for the stack
  const getStackIndices = () => {
    return [
      index,
      (index + 1) % content.length,
      (index + 2) % content.length
    ]
  }

  const stack = getStackIndices()

  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Software Engineer || Photographer || Videographer</span>
          <h1>
            Your Vision Brought to <br />
            <div className="dynamic-text">
              <AnimatePresence>
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ position: 'absolute', left: 0, width: '100%', color: 'var(--primary)' }}
                >
                  {content[index].phrase}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
          <p className="hero-description">
            I help people focus on what matters by automating repetitive tasks. I capture 
            moments and help people keep them clear, real, and unforgettable through 
            vivid visuals.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary">See My Works <ArrowRight size={20} /></button>
            <button className="btn btn-white">Get In Touch</button>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/kennedykmutuku/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><ExternalLink size={20} /></a>
            <a href="https://github.com/Kennedy-Mutuku" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Link size={20} /></a>
            <a href="mailto:mutukukennedy5@gmail.com" className="social-icon" aria-label="Email"><Mail size={20} /></a>
            <a href="tel:0740881485" className="social-icon" aria-label="Phone"><Phone size={20} /></a>
          </div>
        </motion.div>

        <div className="hero-image">
          <div className="card-stack">
            {stack.map((itemIndex, i) => (
              <motion.div 
                key={itemIndex}
                className={`stack-card card-${i}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: i === 0 ? 1 : 0.8 / (i + 1),
                  scale: 1 - (i * 0.05),
                  x: i * 25,
                  y: i * -25,
                  zIndex: 10 - i
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="image-wrapper">
                  <img 
                    src={content[itemIndex].img} 
                    alt={`Portfolio ${itemIndex}`} 
                    style={{ objectPosition: content[itemIndex].position || 'center' }}
                  />
                  {i === 0 && (
                    <>
                      <div className="corner-bracket top-left"></div>
                      <div className="corner-bracket bottom-right"></div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 75vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 160px;
          padding-bottom: 60px;
          background: 
            radial-gradient(circle at 90% 10%, rgba(243, 141, 28, 0.08), transparent 40%),
            radial-gradient(circle at 10% 90%, rgba(243, 141, 28, 0.05), transparent 40%);
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        
        .hero-text {
          padding-right: 2rem;
          z-index: 10;
        }

        .badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(243, 141, 28, 0.1);
          color: var(--primary);
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          margin-bottom: 1.5rem;
          color: var(--text-dark);
          line-height: 1.2;
          max-width: 100%;
          min-height: 3.2em;
        }

        .dynamic-text {
          height: 1.2em;
          display: inline-block;
          position: relative;
          width: 100%;
          overflow: visible;
        }

        .dynamic-text span {
          white-space: normal;
          line-height: 1;
        }

        p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 2rem;
          max-width: 550px;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .hero-socials {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .hero-socials a {
          color: #888;
          transition: var(--transition);
        }

        .hero-socials a:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }

        .hero-image {
          position: relative;
          height: 550px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 20px;
        }

        .card-stack {
          position: relative;
          width: 380px;
          height: 480px;
        }

        .stack-card {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: white;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          border: 4px solid white;
          border-radius: 20px;
          overflow: hidden;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .corner-bracket {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 3px solid var(--primary);
          z-index: 15;
          opacity: 0.9;
        }

        .corner-bracket.top-left {
          top: -2px;
          left: -2px;
          border-right: 0;
          border-bottom: 0;
          border-radius: 10px 0 0 0;
        }

        .corner-bracket.bottom-right {
          bottom: -2px;
          right: -2px;
          border-left: 0;
          border-top: 0;
          border-radius: 0 0 10px 0;
        }

        @media (max-width: 992px) {
          .hero {
            padding-top: 140px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-text {
            padding-right: 0;
            order: 2;
          }
          .hero-image {
            order: 1;
            height: 460px;
            padding-left: 0;
            justify-content: center;
          }
          .hero-text p {
            margin: 0 auto 2.5rem;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
          .card-stack {
            max-width: 320px;
            height: 405px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }
          .hero-image {
            height: 380px;
          }
          .card-stack {
            max-width: 260px;
            height: 330px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
