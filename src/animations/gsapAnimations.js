import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-in + slide-up on scroll
 */
export function scrollFadeUp(targets, options = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.9,
      ease: options.ease || 'power3.out',
      stagger: options.stagger || 0.12,
      scrollTrigger: {
        trigger: options.trigger || targets,
        start: options.start || 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    }
  );
}

/**
 * Animated counter (number count-up)
 */
export function animateCounter(element, target, options = {}) {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration: options.duration || 2,
    ease: options.ease || 'power2.out',
    onUpdate() {
      element.textContent = Math.round(obj.value);
    },
    scrollTrigger: {
      trigger: element,
      start: options.start || 'top 85%',
      toggleActions: 'play none none none',
      once: true,
    },
  });
}

/**
 * Draw a line (height from 0 to 100%)
 */
export function drawLine(target, options = {}) {
  return gsap.fromTo(
    target,
    { height: '0%' },
    {
      height: '100%',
      duration: options.duration || 1.5,
      ease: options.ease || 'power2.inOut',
      scrollTrigger: {
        trigger: options.trigger || target,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        scrub: options.scrub || true,
      },
    }
  );
}

/**
 * Stagger reveal for a group of elements
 */
export function staggerReveal(targets, trigger, options = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.7,
      ease: 'power3.out',
      stagger: options.stagger || 0.1,
      scrollTrigger: {
        trigger,
        start: options.start || 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
}

/**
 * Scroll progress bar width
 */
export function scrollProgressBar(barElement) {
  return gsap.to(barElement, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
  });
}

/**
 * Text character split reveal
 */
export function splitTextReveal(target, options = {}) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  const text = el.textContent;
  el.innerHTML = text
    .split('')
    .map(c => `<span style="display:inline-block;overflow:hidden"><span style="display:inline-block">${c === ' ' ? '&nbsp;' : c}</span></span>`)
    .join('');

  const spans = el.querySelectorAll('span > span');
  return gsap.fromTo(
    spans,
    { y: '100%' },
    {
      y: '0%',
      duration: 0.05,
      stagger: 0.018,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: options.start || 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}
