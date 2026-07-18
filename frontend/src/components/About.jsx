import React from 'react'
import { Link } from 'react-router-dom'
import kenImg from '../assets/ken stage.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-layout">
          
          {/* Left Column: Image with offset background */}
          <div className="about-image-column">
            <div className="image-wrapper">
              <div className="image-bg-block"></div>
              <img src={kenImg} alt="Kennedy Kioko Mutuku" className="profile-img" />
            </div>
          </div>

          {/* Right Column: Bordered text box */}
          <div className="about-text-column">
            <div className="about-content-box">
              <h2 className="about-heading">ABOUT KENNEDY MUTUKU</h2>
              
              <p>
                Kennedy Mutuku is a Software Engineer, entrepreneur, and digital innovator dedicated to building technology and media solutions that create meaningful impact. As the Founder and CEO of Dominion Softwares Ltd and Dominion Multimedia Group, he leads the development of innovative software systems and creative digital media that empower businesses, institutions, and organizations to embrace digital transformation and communicate with excellence.
              </p>
              
              <Link to="/about" className="read-more-btn">READ MORE</Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        :root {
          --navy-dark: #001333; /* The dark blue from the reference */
        }

        .about {
          background-color: #fdfdfd;
          padding: 4rem 0 2rem;
          font-family: 'Inter', sans-serif;
        }

        .about-layout {
          display: flex;
          align-items: stretch;
          justify-content: center;
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Image Column */
        .about-image-column {
          flex: 0 0 35%;
          position: relative;
          display: flex;
          align-items: stretch;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          padding-left: 20px;
          padding-bottom: 20px;
        }

        .image-bg-block {
          position: absolute;
          top: 50px;
          bottom: -15px;
          left: -15px;
          right: 30px;
          background-color: var(--navy-dark);
          z-index: 0;
        }

        .profile-img {
          position: relative;
          width: 100%;
          height: auto;
          z-index: 1;
          display: block;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        /* Text Column */
        .about-text-column {
          flex: 0 0 65%;
          display: flex;
          align-items: stretch;
        }

        .about-content-box {
          border: 1px solid var(--navy-dark);
          padding: 2.5rem 3rem;
          background: #ffffff;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-heading {
          font-size: 1.5rem;
          color: var(--navy-dark);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .about-content-box p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #4a4a4a;
          margin-bottom: 1.5rem;
        }

        .read-more-btn {
          align-self: flex-start;
          margin-top: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: transparent;
          border: 1px solid var(--navy-dark);
          color: var(--navy-dark);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .read-more-btn:hover {
          background: var(--navy-dark);
          color: #ffffff;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .about-layout {
            flex-direction: column;
            gap: 4rem;
          }
          
          .about-image-column {
            max-width: 500px;
            margin: 0 auto;
          }

          .about-content-box {
            padding: 2.5rem 2rem;
          }
        }

        @media (max-width: 600px) {
          .about-content-box {
            padding: 2rem 1.5rem;
          }
          
          .about-heading {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About
