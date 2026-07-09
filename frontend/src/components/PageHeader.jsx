import React from 'react'
import { Link } from 'react-router-dom'
import headerPhoto from '../assets/headerphoto.jpg'
import logoImg from '../assets/Kennedy Mutuku logo.png'

const PageHeader = ({ title }) => {
  return (
    <div className="page-header-strip">
      <div className="ph-left">
        <div className="ph-logo-bg">
          <img src={logoImg} alt="Kennedy Mutuku" className="ph-logo" />
        </div>
      </div>
      
      <div className="ph-center">
        <h1 className="ph-title">{title}</h1>
        <div className="ph-breadcrumb">
          <Link to="/">Home</Link> <span className="ph-separator">»</span> <span>{title}</span>
        </div>
      </div>
      
      <div className="ph-right">
        <img src={headerPhoto} alt="Header background" className="ph-bg-img" />
        <div className="ph-overlay"></div>
      </div>
      
      <style>{`
        .page-header-strip {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 120px; /* Minimal vertical space */
          background-color: #0f172a;
          overflow: hidden;
          margin-top: 134px; /* Offset for fixed navbar */
          color: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .ph-left {
          z-index: 2;
          display: flex;
          align-items: center;
          width: 30%;
          height: 100%;
        }
        
        .ph-logo-bg {
          background: rgba(255, 255, 255, 0.95);
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }
        
        .ph-logo {
          height: 100px;
          max-height: 90%;
          width: auto;
          object-fit: contain;
        }
        
        .ph-center {
          z-index: 2;
          text-align: center;
          width: 40%;
        }
        
        .ph-title {
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 0.2rem 0;
          letter-spacing: 1px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .ph-breadcrumb {
          font-size: 0.9rem;
          color: #e2e8f0;
          font-weight: 600;
        }
        
        .ph-breadcrumb a {
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .ph-breadcrumb a:hover {
          color: var(--primary, #f38d1c);
        }
        
        .ph-separator {
          margin: 0 8px;
          color: var(--primary, #f38d1c);
        }
        
        .ph-right {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 65%;
          z-index: 1;
        }
        
        .ph-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
        }
        
        .ph-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #0f172a 0%, rgba(15,23,42,0.85) 30%, rgba(15,23,42,0.1) 100%);
        }
        
        /* Make the left side background seamless with the overlay */
        .page-header-strip::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          background: #0f172a;
          z-index: 0;
        }
        
        @media (max-width: 992px) {
          .ph-logo {
            height: 75px;
          }
          .ph-logo-bg {
            padding: 0 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .page-header-strip {
            height: 110px;
            margin-top: 110px; /* Reduced navbar height on mobile */
          }
          
          .ph-left {
            width: auto;
          }
          
          .ph-logo-bg {
            padding: 0 1.5rem 0 1rem;
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          }
          
          .ph-logo {
            height: 65px;
          }
          
          .ph-center {
            width: 100%;
            text-align: right;
            padding-right: 1.5rem;
          }
          
          .ph-title {
            font-size: 1.5rem;
          }
          
          .ph-right {
            width: 100%;
          }
          
          .ph-overlay {
            background: linear-gradient(to right, #0f172a 0%, rgba(15,23,42,0.9) 40%, rgba(15,23,42,0.4) 100%);
          }
        }
        
        @media (max-width: 480px) {
          .ph-logo-bg {
            padding: 0 1rem 0 0.5rem;
          }
          .ph-logo {
            height: 50px;
          }
          .ph-title {
            font-size: 1.3rem;
          }
          .ph-center {
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default PageHeader
