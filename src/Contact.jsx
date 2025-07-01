import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    className="contact section"
    id="contact"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="section-title">Get in Touch</h2>
    <p className="section-text">
      I’m open to freelance work, collaborations, and design/dev projects. Reach out via email or LinkedIn.
    </p>
    <div className="contact-info">
      <a href="mailto:bn@example.com" className="contact-link">📧 alraiyan03@gmail.com</a>
      <a href="https://www.linkedin.com/in/b-raiyan-73b0082ba/" className="contact-link" target="_blank">🔗 Linkedin</a>
    </div>
  </motion.section>
);

export default Contact;
