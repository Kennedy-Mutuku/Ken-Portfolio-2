import React, { useState } from 'react'
import axios from 'axios'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // Connect to backend
      await axios.post('http://localhost:5000/api/contact', formData)
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Error sending message. Please try again.')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In <span>Touch</span></h2>
          <div className="underline"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Collaborate</h3>
            <p>I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon"><Phone size={20} /></div>
                <div>
                  <h4>Call Me</h4>
                  <p>0740881485</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Me</h4>
                  <p>mutukukennedy5@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                rows="5" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <Send size={18} />
            </button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>

      <style>{`
        .contact {
          background-color: var(--bg-cream);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: flex-start;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .contact-info p {
          margin-bottom: 2.5rem;
          color: #666;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .info-item .icon {
          width: 50px;
          height: 50px;
          background: white;
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow);
        }

        .info-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }

        .info-item p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .contact-form {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 1rem;
          background: var(--bg-cream);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 10px;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: var(--transition);
        }

        input:focus, textarea:focus {
          border-color: var(--primary);
          background: white;
        }

        .status-msg {
          margin-top: 1rem;
          font-weight: 600;
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
