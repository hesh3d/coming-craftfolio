// GSAP Animation s
gsap.from('.brand-name', {
  duration: 2,
  y: -50,
  opacity: 0,
  ease: 'power4.out'
});

gsap.from('.coming-soon', {
  duration: 2,
  delay: 0.5,
  y: 50,
  opacity: 0,
  ease: 'power4.out'
});

gsap.from('.description', {
  duration: 2,
  delay: 1,
  y: 50,
  opacity: 0,
  ease: 'power4.out'
});

// GSAP Animation for social media icons
gsap.to('.social-icon', {
  duration: 2,
  delay: 1.5,
  opacity: 1,
  y: 0,
  ease: 'power4.out',
  stagger: 0.2 // stagger animation for each icon
});