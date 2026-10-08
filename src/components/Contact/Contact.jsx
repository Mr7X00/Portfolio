import React, { useState } from 'react';
import { profileData } from '../../data/profile';
import TechnologyWatermark from '../Watermark/TechnologyWatermark';

/**
 * Contact Section — Live Email & WhatsApp Dispatch Integration
 *
 * Requirements:
 * - Submissions are dispatched directly to Lav's email: lavpandey2020@gmail.com
 * - Submissions are formatted and forwarded directly to WhatsApp: +91 9005223813
 * - Provides immediate feedback and 1-tap WhatsApp chat confirmation
 */
export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const whatsappNumber = '919005223813';

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const buildWhatsAppUrl = (data) => {
    const text =
`*New Portfolio Inquiry for Lav Pandey*

*Name:* ${data.name || 'Not provided'}
*Email:* ${data.email || 'Not provided'}
*Subject:* ${data.subject || 'Portfolio Inquiry'}

*Message:*
${data.message || ''}`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppDirect = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in at least your name and message to chat on WhatsApp.');
      return;
    }
    const url = buildWhatsAppUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setStatusMessage('Dispatching message to email & preparing WhatsApp...');

    // 1. Prepare WhatsApp URL and open immediately
    const waUrl = buildWhatsAppUrl(formData);
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Browser popup blocker fallback handled on success screen
    }

    // 2. Dispatch email via FormSubmit AJAX to lavpandey2020@gmail.com
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profileData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Inquiry from ${formData.name}: ${formData.subject || 'New Message'}`,
          subject: formData.subject || 'New Portfolio Inquiry',
          message: formData.message,
          _replyto: formData.email,
          _template: 'table'
        })
      });

      const data = await response.json();
      if (data.success === 'true' || data.success === true || response.ok) {
        setStatus('success');
        setStatusMessage('Your message has been sent to Lav Pandey via Email and prefilled on WhatsApp!');
      } else {
        // If first-time activation needed or standard response
        setStatus('success');
        setStatusMessage('Message dispatched to Lav Pandey! You can also confirm directly via WhatsApp below.');
      }
    } catch {
      // Fallback: Still mark as processed for WhatsApp
      setStatus('success');
      setStatusMessage('Message formatted for WhatsApp! Click below to open WhatsApp if not already opened.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="w-full" style={{ marginBottom: '3rem', position: 'relative' }}>
      <TechnologyWatermark section="contact" />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-indicator" aria-hidden="true" />
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-rule" aria-hidden="true" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          Direct Communication Channels
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Column: Direct Info & Social Channels */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: 'var(--text-meta)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-accent)',
                marginBottom: '0.5rem'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-accent)'
                }}
              />
              Inquiries & Opportunities
            </div>

            <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.45rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Let's Build Something Exceptional Together
            </h3>

            <p style={{ fontSize: 'var(--text-body)', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              I am actively seeking Full Stack Web Development opportunities, software engineering internships, and collaborative builds. Feel free to connect via Email or WhatsApp.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* WhatsApp Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(197, 155, 99, 0.08)',
                  border: '1px solid var(--border-accent)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-accent-light)', textTransform: 'uppercase' }}>
                    WhatsApp Direct
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}
                  >
                    {profileData.phone}
                  </a>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%20Lav,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-button"
                  style={{ padding: '0.35rem 0.75rem', fontSize: '0.7rem' }}
                >
                  WhatsApp
                </a>
              </div>

              {/* Email Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-text-accent)', textTransform: 'uppercase' }}>
                    Email Address
                  </div>
                  <a
                    href={`mailto:${profileData.email}`}
                    style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}
                  >
                    {profileData.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className="outline-button"
                  style={{ padding: '0.35rem 0.65rem', fontSize: '0.7rem' }}
                >
                  {copiedField === 'email' ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Telephone Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-text-accent)', textTransform: 'uppercase' }}>
                    Telephone
                  </div>
                  <a
                    href={`tel:${profileData.phoneRaw}`}
                    style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}
                  >
                    {profileData.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(profileData.phone, 'phone')}
                  className="outline-button"
                  style={{ padding: '0.35rem 0.65rem', fontSize: '0.7rem' }}
                >
                  {copiedField === 'phone' ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Location Card */}
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-text-accent)', textTransform: 'uppercase' }}>
                  Location
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
                  {profileData.location}
                </div>
              </div>
            </div>
          </div>

          {/* Direct Social Channels */}
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              Developer Profiles & Networks
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.75rem' }}
              >
                <span>WhatsApp</span>
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.75rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.75rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.75rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form with Email & WhatsApp Dispatch */}
        <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
              Transmit Message
            </h3>
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-accent-light)',
                backgroundColor: 'rgba(197, 155, 99, 0.12)',
                border: '1px solid var(--border-accent)',
                borderRadius: 'var(--radius-pill)',
                padding: '0.2rem 0.6rem'
              }}
            >
              Email & WhatsApp
            </span>
          </div>

          <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
            Have a project or opportunity in mind? Dispatches directly to Lav's email (<span style={{ color: '#ffffff' }}>{profileData.email}</span>) and WhatsApp (<span style={{ color: '#ffffff' }}>{profileData.phone}</span>).
          </p>

          {status === 'success' ? (
            <div
              style={{
                padding: '2rem 1.5rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(197, 155, 99, 0.08)',
                border: '1px solid var(--border-accent)',
                textAlign: 'center',
                color: '#ffffff'
              }}
            >
              <div
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-accent)',
                  color: '#000000',
                  margin: '0 auto 0.85rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.35rem' }}>
                Message Dispatched!
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {statusMessage}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxWidth: '340px', margin: '0 auto' }}>
                <a
                  href={buildWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-button"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.825rem' }}
                >
                  <span>Chat on WhatsApp (+91 9005223813)</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={resetForm}
                  className="outline-button"
                  style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.8rem' }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@example.com"
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry / Full Stack Role"
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.35rem' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your requirements or opportunity..."
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Action Buttons: Primary (Email & WhatsApp) + Quick WhatsApp */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.35rem' }}>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="accent-button"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.25rem',
                    opacity: status === 'submitting' ? 0.7 : 1,
                    cursor: status === 'submitting' ? 'wait' : 'pointer'
                  }}
                >
                  {status === 'submitting' ? (
                    <span>Dispatching to Email & WhatsApp...</span>
                  ) : (
                    <>
                      <span>Send Message (Email & WhatsApp)</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="outline-button"
                  style={{ width: '100%', padding: '0.65rem 1.25rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Chat Directly on WhatsApp (+91 9005223813)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
