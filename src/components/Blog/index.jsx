import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';
import { blogPosts } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import coffeeImg from '../../assets/coffee.png';

function BlogCard({ post, i = 0 }) {
  const handleClick = () => {
    if (post.link) {
      window.open(post.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: `0 24px 64px rgba(0,0,0,0.55), 0 0 32px ${post.color}20` }}
      onClick={handleClick}
      className="glass-card"
      style={{
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        maxWidth: '540px',
        width: '100%',
        margin: '2rem auto 0',
        border: '1px solid var(--border)',
      }}
    >
      {/* Top Banner Cover Image */}
      <div 
        style={{ 
          width: '100%', 
          height: '270px', 
          overflow: 'hidden', 
          borderBottom: '1px solid var(--border)', 
          position: 'relative' 
        }}
      >
        <img 
          src={coffeeImg} 
          alt={post.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        {/* Soft shadow gradient overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.45))',
            pointerEvents: 'none',
          }} 
        />
      </div>

      {/* Card Content details */}
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Category + date row */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          <span
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.72rem',
              fontWeight: 600,
              background: post.color + '15',
              color: post.color,
              border: `1px solid ${post.color}25`,
              textShadow: `0 0 8px ${post.color}20`,
            }}
          >
            {post.category}
          </span>
          <span style={{ color: 'var(--muted)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <FiCalendar size={12} /> {post.date}
          </span>
          <span style={{ color: 'var(--muted)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginLeft: 'auto' }}>
            <FiClock size={12} /> {post.readTime}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: '1.5rem',
            color: 'var(--text)',
            lineHeight: 1.3,
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          {post.title}
        </h3>

        <p style={{ color: 'var(--text-2)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
          {post.tags.map(tag => (
            <span key={tag} className="chip" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>#{tag}</span>
          ))}
        </div>

        {/* Read more -> Visit Site */}
        <motion.div
          style={{
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.45rem',
            color: 'var(--accent)', 
            fontSize: '0.88rem', 
            fontWeight: 600,
            marginTop: 'auto',
          }}
          whileHover={{ x: 4 }}
        >
          Visit Website <FiArrowRight size={14} />
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const [featured] = blogPosts;

  return (
    <section id="blog" className="section-pad" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="section-container" style={{ width: '100%' }}>
        <SectionHeading
          tag="Design Showcase"
          title="Featured Website"
          description="A showcase of creative layout designs, modern responsive architectures, and aesthetic UI concepts."
          centered
        />

        {/* Centered single card */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'visible' }}>
          {featured && <BlogCard post={featured} i={0} />}
        </div>
      </div>
    </section>
  );
}
