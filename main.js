// Reveal on scroll — run immediately on load too
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Set active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link[data-page]').forEach(link => {
  if (link.dataset.page === currentPage) {
    link.classList.add('active');
  }
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + (el.dataset.suffix || '');
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
