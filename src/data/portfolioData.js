// ============================================================
// PORTFOLIO DATA — All content in one place
// ============================================================

export const personalInfo = {
  name: 'Raiyan',
  title: 'Web Engineer & UI/UX Designer',
  roles: ['Web Engineer', 'UI/UX Designer'],
  email: 'alraiyan03@gmail.com',
  github: 'https://github.com/raiyan346',
  linkedin: 'https://www.linkedin.com/in/b-raiyan-73b0082ba/',
  twitter: 'https://x.com/AlRaiyan03',
  instagram: 'https://www.instagram.com/raiyan_003_/',
  location: 'Chennai, Tamil Nadu, India',
  bio: "I am a recent Computer Science Engineering graduate seeking an entry-level Frontend Developer role. I specialize in building responsive React applications with smooth GSAP animations and clean UI/UX designs.",
  bioLong: `I am a Computer Science Engineering graduate from B.S. Abdur Rahman Crescent Institute looking for an opportunity to launch my career as a Frontend Developer.

I love translating wireframes and Figma designs into clean, responsive, and interactive React applications. I am committed to writing modular, efficient code and creating user interfaces that look premium and function flawlessly.`,
  stats: [
    { label: 'Projects Built', value: 5, suffix: '+' },
    { label: 'Technologies Used', value: 12, suffix: '+' },
  ],
  achievements: [
    { title: 'Academic Project', desc: 'Top Grades for Capstone App', icon: '💻' },
    { title: 'Hackathon Winner', desc: '1st Place — CodeSprint 2023', icon: '🏆' },
    { title: 'Certifications', desc: 'Meta Frontend Certificate', icon: '📜' },
    { title: 'UI Design', desc: '20+ Figma Mockups', icon: '🎨' },
  ],
};

// ============================================================
// EXPERIENCES
// ============================================================
export const experiences = [
  {
    id: 1,
    title: 'Software Development Intern',
    company: 'Headers Software Solutions Pvt Ltd',
    duration: 'Jun 2024 — Jul 2024',
    description: 'Learned problem-solving techniques, code optimization, and software development fundamentals while working on practical development tasks and improving debugging skills.'
  },
  {
    id: 2,
    title: 'AI Training Engineer Intern',
    company: 'Tamil Nadu e-Governance Agency (TNeGA)',
    duration: 'Jun 2025 — Jul 2025',
    description: 'Worked on agricultural dataset annotation using CVAT, and YOLOv8 models for computer vision applications under a Tamil Nadu Government initiative, supporting AI training workflows and data preparation.'
  }
];

// ============================================================
// PROJECTS
// ============================================================
export const projects = [

  {
    id: 1,
    title: 'Figma App Prototype',
    description: 'An interactive food delivery app designed in Figma to streamline native food orders with smooth UX.',
    tech: ['Figma', 'lottielab', 'iconify'],
    live: 'https://www.figma.com/proto/nASJ3Z9Kmdg7GGltBfpN4t/cloud-kitchen?page-id=0%3A1&node-id=2-2&viewport=-1166%2C-190%2C0.84&t=rSdst2PLrRa8Ml2Y-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1',
    category: 'ui',
    featured: false,
    color: '#7C3AED',
  },
  {
    id: 2,
    title: 'College Website-React',
    description: 'Developed a responsive college website with React, featuring contact forms, image galleries, and smooth animations for an engaging user experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'ReactBits'],
    github: 'https://github.com/raiyan346/college-website',
    live: 'https://college-website-mocha.vercel.app/',
    category: 'Frontend',
    featured: false,
    color: '#06B6D4',
  },
  {
    id: 3,
    title: 'Github Finder',
    description: 'Built frontend projects using JavaScript to strengthen problem-solving skills and understand core web development concepts. Focused on creating responsive interfaces and improving user experience.',
    tech: ['React', 'Materialed CSS', 'Bootstrap', 'Iconify'],
    github: 'https://github.com/raiyan346/Github_Finder',
    // live: 'https://framerkit.demo',
    category: 'Frontend',
    featured: false,
    color: '#7C3AED',
  },
  {
    id: 4,
    title: 'Book List',
    description: 'Created a Book List project using JavaScript to practice frontend development and dynamic user interactions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/raiyan346/Book-List',
    // live: 'https://chatbot.demo',
    category: 'Frontend',
    featured: false,
    color: '#06B6D4',
  },
  {
    id: 5,
    title: 'Portfolio OS Theme',
    description: 'An interactive OS-themed portfolio with draggable windows, a working terminal, file system navigation, and app launcher.',
    tech: ['React', 'Framer Motion', 'XTerm.js', 'Zustand'],
    github: 'https://github.com/raiyan346/portfolio',
    live: 'https://www.raiyan.tech/',
    category: 'frontend',
    featured: false,
    color: '#7C3AED',
  },
];

export const projectCategories = ['all', 'frontend', 'ui', 'fullstack', 'ai'];

// ============================================================
// SKILLS
// ============================================================
export const skillsByCategory = {
  frontend: [
    { name: 'React', icon: 'SiReact', color: '#FFFFFF' },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#E5E5E5' },
    { name: 'TypeScript', icon: 'SiTypescript', color: '#CCCCCC' },
    { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF' },
    { name: 'TailwindCSS', icon: 'SiTailwindcss', color: '#CCCCCC' },
    { name: 'HTML5', icon: 'SiHtml5', color: '#A3A3A3' },
    { name: 'CSS3', icon: 'SiCss3', color: '#A3A3A3' },
    { name: 'Vite', icon: 'SiVite', color: '#E5E5E5' },
  ],
  backend: [
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#E5E5E5' },
    { name: 'Express', icon: 'SiExpress', color: '#FFFFFF' },
    { name: 'MongoDB', icon: 'SiMongodb', color: '#CCCCCC' },
    { name: 'Firebase', icon: 'SiFirebase', color: '#E5E5E5' },
    { name: 'PostMan', icon: 'SiPostman', color: '#A3A3A3' }
  ],
  design: [
    { name: 'Figma', icon: 'SiFigma', color: '#FFFFFF' },
    { name: 'Framer', icon: 'SiFramer', color: '#CCCCCC' },
    { name: 'GSAP', icon: 'SiGreensock', color: '#E5E5E5' },
    { name: 'Framer Motion', icon: 'SiFramer', color: '#FFFFFF' }
  ],
  tools: [
    { name: 'Git', icon: 'SiGit', color: '#CCCCCC' },
    { name: 'GitHub', icon: 'SiGithub', color: '#FFFFFF' },
    { name: 'VS Code', icon: 'SiVisualstudiocode', color: '#E5E5E5' },
    { name: 'Docker', icon: 'SiDocker', color: '#CCCCCC' },
    { name: 'Vercel', icon: 'SiVercel', color: '#FFFFFF' }
  ],
};

// Flat list for marquee
export const allSkills = [
  ...skillsByCategory.frontend,
  ...skillsByCategory.backend,
  ...skillsByCategory.design,
  ...skillsByCategory.tools,
];

// ============================================================
// BLOG POSTS
// ============================================================
export const blogPosts = [
  {
    id: 1,
    title: 'Design & Coffee',
    excerpt: 'Explore an aesthetic coffee-themed web experience featuring clean layouts, modern typography, and curated design resources.',
    category: 'Framer Site',
    readTime: 'Design Inspiration',
    date: 'June 2026',
    featured: true,
    color: '#06B6D4',
    tags: ['UI/UX', 'Framer', 'Coffee', 'Aesthetics'],
    link: 'https://designcoffee.framer.website/',
  }
];
