import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import headerPhoto from '../assets/headerphoto.jpg'

const PageHeader = ({ title }) => {
  return (
    <div className="premium-page-header">
      <div className="ph-bg-container">
        <img src={headerPhoto} alt="Header Background" className="ph-bg-image" />
        <div className="ph-bg-overlay"></div>
      </div>
      
      <div className="container ph-content">
        <motion.div 
          className="ph-text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="ph-title">{title}</h1>
          <div className="ph-breadcrumb">
            <Link to="/">Home</Link> <span className="ph-separator">»</span> <span>{title}</span>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .premium-page-header {
          position: relative;
          height: 450px; /* Tall, massive banner like JK */
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 80px; /* Offset for fixed navbar */
          background-color: #050505;
          overflow: hidden;
        }
        
        .ph-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .ph-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Position right center to try and align portraits similarly to Jeff's */
          object-position: 70% center; 
        }
        
        .ph-bg-overlay {
          position: absolute;
          inset: 0;
          /* Premium dark gradient overlay: darker on edges, slightly transparent in center */
          background: radial-gradient(circle at center, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 100%);
        }
        
        .ph-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .ph-text-center {
          text-align: center;
        }
        
        .ph-title {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          letter-spacing: 1px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }
        
        .ph-breadcrumb {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          color: #ffffff;
          font-weight: 500;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }
        
        .ph-breadcrumb a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .ph-breadcrumb a:hover {
          color: var(--primary, #f38d1c);
        }
        
        .ph-separator {
          margin: 0 10px;
          color: var(--primary, #f38d1c);
          font-weight: 700;
        }
        
        @media (max-width: 992px) {
          .premium-page-header {
            height: 350px;
          }
          .ph-title {
            font-size: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          .premium-page-header {
            height: 300px;
            margin-top: 70px;
          }
          .ph-title {
            font-size: 2.5rem;
          }
          .ph-breadcrumb {
            font-size: 0.95rem;
          }
          .ph-bg-image {
            object-position: center center;
          }
        }
      `}</style>
    </div>
  )
}

export default PageHeader
