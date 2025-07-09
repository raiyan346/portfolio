import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from 'react-icons/fa';

const icons = [
  { type: 'image', src: '/logos/python-original.svg', alt: 'Python' },  
  { type: 'icon', Icon: FaHtml5, className: 'icon-html' },
  { type: 'icon', Icon: FaCss3Alt, className: 'icon-css' },
  { type: 'icon', Icon: FaJs, className: 'icon-js' },
  { type: 'icon', Icon: FaReact, className: 'icon-react' },
  { type: 'image', src: '/logos/figma-original.svg', alt: 'Figma' },
];

const Skills = () => (
  <motion.section
    className="skills section"
    id="skills"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="section-title">My Toolkit</h2>
    <p className='section-text'>Tools and technologies I use to design clean interfaces and build responsive, scalable web applications.</p>

    <div className="skills-marquee">
      <div className="marquee-track">
        {icons.concat(icons).map((item, i) => (
          <div key={i} className="skill-icon-wrapper">
            {item.type === 'icon' ? (
              <item.Icon className={`skill-icon ${item.className}`} />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="skill-icon"
                style={{ width: '4rem', height: '4rem' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Skills;
