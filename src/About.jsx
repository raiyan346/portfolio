import { motion } from 'framer-motion';
import profilePic from './techraiyan.jpg';   

const About = () => (
  <motion.section
    className="about section"
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="about-img-wrapper">
      <img src={profilePic} alt="BN portrait" className="about-img" />
    </div>

    <h2 className="section-title">About Me</h2>

    <p className="section-text">
      I’m <strong>Raiyan</strong>, a <span className="highlight">UI/UX Designer</span> and
      <span className="highlight"> Front-end Developer</span> who turns ideas into
      delightful digital experiences.
    </p>

    <p className="education-text">
      <strong className="title">EDUCATION</strong><br/>
      <span>B.S.Abur Rahman Crescent Institute of Science And Technology</span><br/>
      <span>B.Tech Computer Science And Engineering</span>
      <p>Vandalur,Chennai,India.</p>
    </p>
  </motion.section>
);

export default About;
