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
  // Add an aspect ratio flag for masonry layout variety
  const photos = [
    { src: img1, alt: "Kennedy on Stage", type: "wide" },
    { src: img2, alt: "Kennedy Portrait", type: "tall" },
    { src: img3, alt: "Kennedy Profile", type: "tall" },
    { src: img4, alt: "Kennedy Professional", type: "square" },
    { src: img5, alt: "KSUCU-MC Team", type: "wide" },
    { src: img6, alt: "KSUCU Event", type: "square" },
    { src: img7, alt: "Gallery Image 1", type: "tall" },
    { src: img8, alt: "Gallery Image 2", type: "wide" },
    { src: img9, alt: "Gallery Image 3", type: "square" },
    { src: img10, alt: "Gallery Image 4", type: "tall" },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Navbar />
      <PageHeader title="Gallery" />
      
      <section className="gallery-premium-section">
        <div className="container">
          <motion.div 
            className="gallery-premium-header text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>MOMENTS IN <span>FOCUS</span></h2>
            <div className="premium-underline mx-auto"></div>
            <p className="premium-subtitle">A curated collection of impactful moments, leadership highlights, and creative journey.</p>
          </motion.div>

          <div className="masonry-grid">
            {photos.map((photo, index) => (
              <motion.div 
                key={index} 
                className={`masonry-item ${photo.type}`}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 0.98 }}
                onClick={() => setSelectedImg(photo.src)}
              >
                <div className="masonry-img-wrapper">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <div className="masonry-overlay">
                    <span className="view-text">ENLARGE VIEW</span>
                  </div>
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
          background-color: #fcfcfc;
        }

        .gallery-premium-header {
          margin-bottom: 4rem;
        }

        .gallery-premium-header h2 {
          font-family: 'Inter', sans-serif;
          font-size: 3rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #111;
          margin-bottom: 1rem;
        }

        .gallery-premium-header h2 span {
          color: var(--primary, #f38d1c);
        }

        .premium-underline {
          height: 3px;
          width: 60px;
          background-color: var(--primary, #f38d1c);
          margin-bottom: 1.5rem;
        }

        .premium-subtitle {
          color: #666;
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Masonry Layout */
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 250px;
          gap: 1.5rem;
          padding: 0 1rem;
        }

        .masonry-item {
          position: relative;
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transform-origin: center;
        }

        /* Span multiple rows/cols for masonry effect */
        .masonry-item.tall {
          grid-row: span 2;
        }
        
        .masonry-item.wide {
          grid-column: span 2;
        }

        .masonry-item.square {
          grid-row: span 1;
          grid-column: span 1;
        }

        .masonry-img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          background-color: #e0e0e0;
        }

        .masonry-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(80%) contrast(1.1); /* Desaturated default */
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .masonry-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: all 0.5s ease;
        }

        .view-text {
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 2px;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        /* Hover Effects */
        .masonry-item:hover .masonry-img-wrapper img {
          filter: grayscale(0%) contrast(1); /* Full color on hover */
          transform: scale(1.08);
        }

        .masonry-item:hover .masonry-overlay {
          opacity: 1;
        }

        .masonry-item:hover .view-text {
          transform: translateY(0);
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
        @media (max-width: 768px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-rows: 200px;
          }
          
          .masonry-item.wide {
            grid-column: span 1; /* Turn off wide on small screens */
          }
          
          .gallery-premium-header h2 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  )
}

export default GalleryPage
