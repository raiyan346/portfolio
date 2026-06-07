import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiMapPin, FiCalendar } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
    { icon: FiInstagram, href: personalInfo.instagram, label: 'Instagram' },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="section-container">
        <SectionHeading
          tag="Contact"
          title="Get In Touch"
          description="Have a project in mind? Let's work together to create something amazing."
          centered
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* ---- LEFT: CTA copy ---- */}
          <div>
            <ScrollReveal>
              <div style={{ marginBottom: '1rem' }}>
                <span
                  className="chip pulse-glow"
                  style={{ display: 'inline-flex', marginBottom: '1.5rem' }}
                >
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: '#4ade80', boxShadow: '0 0 8px #4ade80',
                  }} />
                  Open to opportunities
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  color: 'var(--text)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.25rem',
                }}
              >
                Let's Build Something{' '}
                <span className="gradient-text-animated">Amazing</span>
              </h2>

              <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '380px' }}>
                Whether you have a project in mind, an exciting opportunity, or just want to say hi — my inbox is always open.
              </p>
            </ScrollReveal>

            {/* Info chips */}
            <ScrollReveal delay={0.1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { icon: FiMail, label: personalInfo.email },
                  { icon: FiMapPin, label: personalInfo.location },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    className="glass"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius)',
                    }}
                    whileHover={{
                      borderColor: 'var(--accent)',
                      boxShadow: '0 0 16px var(--accent-glow)',
                    }}
                  >
                    <Icon size={16} style={{
                      color: 'var(--accent)', flexShrink: 0,
                      filter: 'drop-shadow(0 0 4px var(--accent-glow))',
                    }} />
                    <span style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>{label}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Social icons */}
            <ScrollReveal delay={0.2}>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Find me on
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: '42px', height: '42px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      borderRadius: '12px',
                      background: 'var(--glass)',
                      border: '1px solid var(--border)',
                      color: 'var(--muted)',
                      transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.boxShadow = '0 0 16px var(--accent-glow)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--muted)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ---- RIGHT: Glass form ---- */}
          <ScrollReveal delay={0.15}>
            <div
              className="glass-card"
              style={{ padding: '2.5rem' }}
            >
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--text)',
                  marginBottom: '1.75rem',
                }}
              >
                Send a Message 👋
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Raiyan"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration"
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="form-input"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  disabled={sending}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Sending…' : sent ? '✅ Message Sent!' : (
                    <><FiSend /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
