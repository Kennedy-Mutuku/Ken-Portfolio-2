import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import kenImg from '../assets/ken stage.jpg'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="About Kennedy Mutuku" />
      <section className="about-page">
        <div className="about-page-container">

          {/* Main Content */}
          <div className="about-page-layout">

            {/* Left: Image */}
            <div className="about-page-image-col">
              <div className="page-image-wrapper">
                <div className="page-image-bg-block"></div>
                <img src={kenImg} alt="Kennedy Kioko Mutuku" className="page-profile-img" />
              </div>
            </div>

            {/* Right: Full Bio */}
            <div className="about-page-text-col">
              <p>
                Kennedy Mutuku is a Software Engineer, entrepreneur, and digital innovator dedicated to building technology and media solutions that create meaningful impact. As the Founder and CEO of Dominion Softwares Ltd and Dominion Multimedia Group, he leads the development of innovative software systems and creative digital media that empower businesses, institutions, and organizations to embrace digital transformation and communicate with excellence.
              </p>

              <p>
                With expertise in full-stack software development, cloud technologies, and user experience, Kennedy has designed and delivered solutions across education, healthcare, hospitality, media, and organizational management. His ability to combine technical precision with creative thinking has established him as a versatile professional capable of building secure, scalable, and intuitive digital products that solve real-world challenges.
              </p>

              <p>
                Beyond software engineering, Kennedy is an accomplished photographer, videographer, and graphic designer with a passion for visual storytelling. Through Dominion Multimedia Group, he produces compelling digital content, helping brands, organizations, and individuals strengthen their visual identity and connect with their audiences through impactful media.
              </p>

              <p>
                Driven by innovation, excellence, and purpose, Kennedy's vision extends beyond writing code. He is committed to inspiring the next generation of African innovators and demonstrating how technology and creativity can work together to transform industries, create opportunities, and improve lives.
              </p>

              <p className="closing-statement">
                Every project reflects his unwavering commitment to quality, integrity, and building solutions that leave a lasting impact.
              </p>
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
          .about-page {
            padding-top: 4rem;
            padding-bottom: 5rem;
            background: #fdfdfd;
            min-height: 100vh;
            font-family: 'Inter', sans-serif;
          }

          .about-page-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          /* Layout */
          .about-page-layout {
            display: flex;
            gap: 4rem;
            align-items: flex-start;
          }

          /* Image Column */
          .about-page-image-col {
            flex: 0 0 38%;
            position: sticky;
            top: 160px;
          }

          .page-image-wrapper {
            position: relative;
            padding-left: 20px;
            padding-bottom: 20px;
          }

          .page-image-bg-block {
            position: absolute;
            top: 40px;
            bottom: -15px;
            left: -15px;
            right: 15px;
            background-color: #001333;
            z-index: 0;
          }

          .page-profile-img {
            position: relative;
            width: 100%;
            height: auto;
            z-index: 1;
            display: block;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }

          /* Text Column */
          .about-page-text-col {
            flex: 1;
          }

          .about-page-text-col p {
            font-size: 1.1rem;
            line-height: 1.9;
            color: #3a3a3a;
            margin-bottom: 1.8rem;
          }

          .about-page-text-col .closing-statement {
            font-weight: 600;
            color: #001333;
            font-style: italic;
            border-left: 4px solid #001333;
            padding-left: 1.2rem;
            margin-top: 2rem;
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
            border: 1.5px solid #001333;
            color: #001333;
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .back-home-btn:hover {
            background: #001333;
            color: #ffffff;
          }

          /* Responsive */
          @media (max-width: 992px) {
            .about-page-layout {
              flex-direction: column;
              gap: 3rem;
            }

            .about-page-image-col {
              position: static;
              max-width: 450px;
              margin: 0 auto;
            }
          }

          @media (max-width: 600px) {
            .about-page {
              padding-top: 3rem;
            }

            .about-page-text-col p {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  )
}

export default AboutPage
