import React, { useState } from 'react'
import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', msg: '' })

  const validate = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields.' })
      return false
    }
    if (!formData.email.includes('@')) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' })
      return false
    }
    return true
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    if (!validate()) return
    const text = `Hello Kennedy, My name is ${formData.name} (${formData.email}).\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    window.open(`https://wa.me/254740881485?text=${encodeURIComponent(text)}`, '_blank')
    setStatus({ type: 'success', msg: 'Redirecting to WhatsApp...' })
  }

  const handleEmail = (e) => {
    e.preventDefault()
    if (!validate()) return
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    window.location.href = `mailto:mutukukennedy5@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`
    setStatus({ type: 'success', msg: 'Opening Email Client...' })
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
                  <h4>Call & WhatsApp</h4>
                  <p>
                    <a href="tel:0740881485" className="link-item">0740881485</a> 
                    <span className="separator">|</span> 
                    <a href="https://wa.me/254740881485" target="_blank" rel="noopener noreferrer" className="link-item highlight">Chat Now</a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Me</h4>
                  <p><a href="mailto:mutukukennedy5@gmail.com" className="link-item">mutukukennedy5@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Machakos, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name *" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address *" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Subject (Optional)" 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message *" 
                rows="5" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <div className="form-submit-options">
              <button onClick={handleWhatsApp} className="btn btn-whatsapp">
                Send via WhatsApp <MessageSquare size={18} />
              </button>
              <button onClick={handleEmail} className="btn btn-primary">
                Send via Email <Send size={18} />
              </button>
            </div>

            {status.msg && (
              <div className={`status-banner ${status.type}`}>
                {status.type === 'success' ? '✓' : '⚠'} {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .contact {
          background-color: var(--bg-cream);
          padding-top: 1.5rem;
        }

        .section-header {
          margin-bottom: 1rem;
          text-align: center;
        }

        .underline {
          width: 50px;
          height: 4px;
          background: var(--primary);
          margin: 0.8rem auto 1.5rem;
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
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
          color: var(--text-dark);
          font-weight: 700;
        }

        .info-item p {
          margin-bottom: 0;
          font-size: 1rem;
          color: var(--text-muted);
        }

        .info-item p a:hover {
          color: var(--primary);
        }

        .contact-form {
          background: white;
          padding: 3.5rem;
          border-radius: 24px;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 1.1rem;
          background: #fafafa;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: var(--transition);
        }

        input:focus, textarea:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px rgba(243, 141, 28, 0.1);
        }

        .contact-form, .form-group input, .form-group textarea, .btn, .icon {
          border-radius: 0 !important;
        }

        .form-submit-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        @media (max-width: 600px) {
          .form-submit-options {
            grid-template-columns: 1fr;
          }
        }

        .btn-whatsapp {
          background-color: #25D366;
          color: white;
        }

        .btn-whatsapp:hover {
          background-color: #128C7E;
          transform: translateY(-2px);
        }

        .info-item p .separator {
          margin: 0 0.5rem;
          color: #ccc;
        }

        .link-item.highlight {
          color: #25D366; /* WhatsApp Green */
          font-weight: 700;
        }

        .status-banner {
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: 0;
          font-weight: 600;
          font-size: 0.95rem;
          text-align: center;
        }

        .status-banner.success {
          background: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #c8e6c9;
        }

        .status-banner.error {
          background: #ffebee;
          color: #c62828;
          border: 1px solid #ffcdd2;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: left;
          }
          .contact-form {
            padding: 2rem 1.5rem;
          }
          .info-items {
            align-items: flex-start;
          }
          .info-item {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
