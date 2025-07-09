import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const Contact = () => (
  <motion.section
    className="contact section"
    id="contact"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="section-title">Let’s Connect</h2>
    <p className="section-text max-w-xl mx-auto">
      Whether you're looking to collaborate or just say hi, feel free to drop a message. I'm always up for exciting conversations!
    </p>

    <div className="contact-cards-vibe">
      {/* Email */}
      <motion.a
        href="mailto:alraiyan03@gmail.com"
        className="contact-card-vibe"
        target="_blank"
        rel="noopener noreferrer"
        custom={0}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
      >
        <FaEnvelope className="contact-icon-vibe" />
        <span>alraiyan03@gmail.com</span>
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/b-raiyan-73b0082ba/"
        className="contact-card-vibe"
        target="_blank"
        rel="noopener noreferrer"
        custom={1}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
      >
        <FaLinkedin className="contact-icon-vibe" />
        <span>linkedin.com/in/b-raiyan</span>
      </motion.a>
    </div>
  </motion.section>
);

export default Contact;
