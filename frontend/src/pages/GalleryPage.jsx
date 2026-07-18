import React, { useState } from 'react'
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
    { src: img1, alt: "Kennedy on Stage" },
    { src: img2, alt: "Kennedy Portrait" },
    { src: img3, alt: "Kennedy Profile" },
    { src: img4, alt: "Kennedy Professional" },
    { src: img5, alt: "KSUCU-MC Team" },
    { src: img6, alt: "KSUCU Event" },
    { src: img7, alt: "Gallery Image 1" },
    { src: img8, alt: "Gallery Image 2" },
    { src: img9, alt: "Gallery Image 3" },
    { src: img10, alt: "Gallery Image 4" },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Navbar />
      <PageHeader title="Gallery" />
      
      <section className="gallery-section">
        <div className="container">
          <div className="section-header text-center">
            <h2><span>Featured Photos</span></h2>
            <div className="underline mx-auto"></div>
            <p className="summary-subtitle">A collection of moments from my journey.</p>
          </div>

          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImg(photo.src)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <span>View Photo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <span className="close-lightbox">&times;</span>
          <img src={selectedImg} alt="Enlarged view" />
        </div>
      )}

      <Footer />

      <style>{`
        .gallery-section {
          padding: 5rem 0;
          background-color: var(--bg-cream, #f9f9f9);
        }

        .section-header {
          margin-bottom: 3.5rem;
        }

        .summary-subtitle {
          text-align: center;
          color: #666;
          margin-top: 1rem;
          font-size: 1.1rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          padding: 0 1rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(243, 141, 28, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-overlay span {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-item:hover .gallery-overlay span {
          transform: translateY(0);
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 2rem;
        }

        .lightbox img {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 8px;
          box-shadow: 0 5px 30px rgba(0,0,0,0.3);
          object-fit: contain;
        }

        .close-lightbox {
          position: absolute;
          top: 2rem;
          right: 3rem;
          color: white;
          font-size: 3rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .close-lightbox:hover {
          color: var(--primary, #f38d1c);
        }
      `}</style>
    </>
  )
}

export default GalleryPage
