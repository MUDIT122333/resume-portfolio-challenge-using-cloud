// ── TYPED.JS ANIMATION ──
new Typed('.typed', {
  strings: ['Python Developer', 'Backend Engineer', 'DevOps / Cloud Enthusiast'],
  typeSpeed: 75,
  backSpeed: 40,
  backDelay: 1400,
  loop: true
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── REVEAL ELEMENTS ON SCROLL ──
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => revealObserver.observe(r));

// ── CONTACT FORM SUBMISSION ──
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.textContent = 'Sending...';
    status.style.color = 'var(--muted2)';
    await new Promise(r => setTimeout(r, 800));
    status.textContent = "✓ Thanks! I'll get back to you soon.";
    status.style.color = 'var(--green)';
    form.reset();
    setTimeout(() => status.textContent = '', 4000);
  });
}

// ── SKILL BAR ANIMATION ON SCROLL ──
const bars = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const targetWidth = e.target.style.width;
      e.target.style.width = '0';
      setTimeout(() => e.target.style.width = targetWidth, 100);
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

bars.forEach(b => barObserver.observe(b));