import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaProjectDiagram, FaRProject } from 'react-icons/fa';
import { FaDiagramProject } from 'react-icons/fa6';

const NavBar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="side-navbar">
      <div onClick={() => scrollTo('hero')} className="nav-icon" title="Home">
        <FaHome />
      </div>
      <div onClick={() => scrollTo('about')} className="nav-icon" title="About Me">
        <FaUserAlt />
      </div>
      <div onClick={() => scrollTo('skills')} className="nav-icon" title="Skills">
        <FaCode />
      </div>
      <div onClick={() => scrollTo('projects')} className="nav-icon" title="Projects">
        <FaProjectDiagram />
      </div>
      <div onClick={() => scrollTo('contact')} className="nav-icon" title="Contact">
        <FaEnvelope />
      </div>
      
    </div>
  );
};

export default NavBar;
