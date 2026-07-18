import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

// Import photos
import img1 from '../assets/ken stage.jpg'
import img2 from '../assets/ken.jpeg'
import img3 from '../assets/ken.jpg.jpeg'
import img4 from '../assets/kennnnn.jpg'
import img5 from '../assets/ksucu-mc 2.png'
import img6 from '../assets/ksucu-mc1.jpeg'
import img7 from '../assets/WhatsApp Image 2026-04-04 at 1.51.35 AM.jpeg'
import img8 from '../assets/WhatsApp Image 2026-04-04 at 1.52.06 AM.jpeg'
import img9 from '../assets/WhatsApp Image 2026-04-04 at 1.52.30 AM.jpeg'
import img10 from '../assets/WhatsApp Image 2026-04-04 at 1.52.46 AM.jpeg'

const GalleryPage = () => {
  const photos = [
    { src: img2, caption: "Professional studio portrait.", type: "large-center" }, // Moved to first for mobile priority
    { src: img1, caption: "Speaking on stage during the annual tech summit.", type: "small" },
    { src: img3, caption: "Profile shot at the corporate office.", type: "small" },
    { src: img4, caption: "In action during a leadership seminar.", type: "small" },
    { src: img5, caption: "With the incredible KSUCU-MC Team.", type: "small" },
    { src: img6, caption: "Hosting the main event at KSUCU.", type: "small" },
    { src: img7, caption: "Collaborative session with the board.", type: "small" },
    { src: img8, caption: "Receiving the innovation award.", type: "small" },
    { src: img9, caption: "Presenting the new software architecture.", type: "small" },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Navbar />
      <PageHeader title="Gallery" />
      
      <section className="gallery-premium-section">
        <div className="container gallery-container">
          <motion.div 
            className="gallery-premium-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>GALLERY</h2>
          </motion.div>

          <div className="jk-masonry-grid">
            {photos.map((photo, index) => (
              <motion.div 
                key={index} 
                className={`jk-masonry-item ${photo.type}`}
                // "Winging in" drop animation
                initial={{ opacity: 0, y: -50, scale: 0.95, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1, 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 12 
                }}
              >
                <div 
                  className="jk-img-wrapper"
                  onClick={() => setSelectedImg(photo.src)}
                >
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                  <div className="jk-hover-overlay">
                    <span className="zoom-icon">+</span>
                  </div>
                </div>
                <div className="jk-caption">
                  <p>{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="premium-lightbox" 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedImg(null)}
          >
            <span className="premium-close">&times;</span>
            <motion.img 
              src={selectedImg} 
              alt="Enlarged view" 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      <style>{`
        .gallery-premium-section {
          padding: 6rem 0;
          background-color: #ffffff;
        }

        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .gallery-premium-header {
          margin-bottom: 3rem;
        }

        .gallery-premium-header h2 {
          font-family: 'Inter', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1rem;
        }

        /* JK Inspired Masonry Layout */
        .jk-masonry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-flow: dense;
          gap: 2rem;
          padding: 0;
        }

        .jk-masonry-item {
          display: flex;
          flex-direction: column;
          transform-origin: top center;
        }

        /* The large center item spans 2 rows */
        .jk-masonry-item.large-center {
          grid-row: span 2;
          grid-column: 2 / 3; /* Forces it to the middle column on desktop */
        }

        .jk-img-wrapper {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          background-color: #f0f0f0;
          width: 100%;
          /* Fix height to make the grid align nicely */
          height: 250px; 
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 4px;
        }

        .jk-masonry-item.large-center .jk-img-wrapper {
          height: 550px; /* Taller height for the prominent image */
        }

        .jk-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .jk-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .zoom-icon {
          color: white;
          font-size: 3rem;
          font-weight: 300;
          transform: scale(0.5);
          transition: transform 0.3s ease;
        }

        .jk-img-wrapper:hover img {
          transform: scale(1.05);
        }

        .jk-img-wrapper:hover .jk-hover-overlay {
          opacity: 1;
        }

        .jk-img-wrapper:hover .zoom-icon {
          transform: scale(1);
        }

        /* Captions below images */
        .jk-caption {
          margin-top: 1rem;
          text-align: center;
        }

        .jk-caption p {
          font-family: 'Inter', sans-serif;
          color: #1a4b8c; /* Dark blue similar to the screenshots */
          font-size: 1.05rem;
          line-height: 1.5;
          font-weight: 500;
          margin: 0;
        }

        /* Premium Lightbox */
        .premium-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 10, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          cursor: zoom-out;
        }

        .premium-lightbox img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          border-radius: 4px;
        }

        .premium-close {
          position: absolute;
          top: 2rem;
          right: 3rem;
          color: #ffffff;
          font-size: 3rem;
          font-weight: 300;
          transition: all 0.3s ease;
        }

        .premium-close:hover {
          color: var(--primary, #f38d1c);
          transform: rotate(90deg);
        }

        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .jk-masonry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .jk-masonry-item.large-center {
            grid-column: span 1; /* Reset center column placement */
          }
        }

        @media (max-width: 768px) {
          .jk-masonry-grid {
            /* Mobile specific layout: 3 tiny columns */
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          
          /* The first item takes full width and is large */
          .jk-masonry-item:nth-child(1) {
            grid-column: 1 / -1;
          }

          /* The first item wrapper height */
          .jk-masonry-item:nth-child(1) .jk-img-wrapper {
            height: 400px; 
          }

          /* The rest are tiny thumbnails */
          .jk-masonry-item:not(:nth-child(1)) .jk-img-wrapper {
            height: 120px; 
          }

          .jk-masonry-item:not(:nth-child(1)) .jk-caption {
            display: none; /* Hide captions for tiny thumbnails to save space */
          }
        }
      `}</style>
    </>
  )
}

export default GalleryPage
