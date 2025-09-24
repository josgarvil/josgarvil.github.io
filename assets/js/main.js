/**
 * Production-Ready JavaScript for José García Villalón's Professional Website
 * Optimized for performance, accessibility, and user experience
 */

'use strict';

// ===== MODERN NAVIGATION SYSTEM =====
const modernNav = {
  init() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.classList.toggle('nav-open');
      });
      
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
              // Smooth scroll with header offset to avoid clipping under fixed header
              const header = document.getElementById('header');
              const offset = header ? header.offsetHeight + 8 : 80;
              const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
              window.scrollTo({ top: y, behavior: 'smooth' });
              navMenu.classList.remove('active');
              navToggle.classList.remove('active');
              document.body.classList.remove('nav-open');
            }
          }
        });
      });
    }
  }
};

// ===== CONTACT FORM HANDLER =====
const contactHandler = {
  init() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  },
  
  handleSubmit(e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission
    setTimeout(() => {
      this.showSuccess();
      e.target.reset();
      button.disabled = false;
      button.innerHTML = originalText;
    }, 2000);
  },
  
  showSuccess() {
    const message = document.createElement('div');
    message.className = 'alert alert-success';
    message.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
    message.style.cssText = 'position:fixed;top:20px;right:20px;background:#10b981;color:white;padding:1rem;border-radius:8px;z-index:9999;';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 5000);
  }
};

// ===== LOADING SCREEN =====
const loadingScreen = {
  init() {
    const loading = document.getElementById('loading');
    if (loading) {
      setTimeout(() => {
        loading.classList.add('hidden');
        setTimeout(() => loading.remove(), 300);
      }, 1000);
    }
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
  
  // Initialize other components
  modernNav.init();
  contactHandler.init();
  loadingScreen.init();
  
  // Initialize scroll to home and navigation
  initScrollToHome();
  initHeaderScroll();
  
  // Set current year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Initialize scroll to home on page load
function initScrollToHome() {
  // Avoid auto-scrolling on load to prevent hero being hidden under fixed header on some devices.
  // Just ensure the Home link is marked active.
  updateActiveNavLink('home');
}

// Update active navigation link
function updateActiveNavLink(activeId) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${activeId}`) {
      link.classList.add('active');
    }
  });
}

// Initialize header scroll effects
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}