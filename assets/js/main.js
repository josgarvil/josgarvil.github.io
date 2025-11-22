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

        // Update aria-expanded
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
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

              // Close menu on mobile
              navMenu.classList.remove('active');
              navToggle.classList.remove('active');
              document.body.classList.remove('nav-open');
              navToggle.setAttribute('aria-expanded', 'false');
            }
          }
        });
      });
    }
  }
};

// ===== THEME TOGGLE SYSTEM =====
const themeSystem = {
  init() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    } else if (prefersDarkScheme.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        let theme = 'light';

        if (document.documentElement.getAttribute('data-theme') !== 'dark') {
          theme = 'dark';
        }

        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
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

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;

    // Check if form ID is set
    if (form.action.includes('YOUR_FORM_ID')) {
      alert('Please update the form action in index.html with your Formspree Form ID.');
      return;
    }

    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.showSuccess();
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map(error => error["message"]).join(", "));
        } else {
          alert('Oops! There was a problem submitting your form');
        }
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form');
    } finally {
      button.disabled = false;
      button.innerHTML = originalText;
    }
  },

  showSuccess() {
    const message = document.createElement('div');
    message.className = 'alert alert-success';
    message.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
    message.style.cssText = 'position:fixed;top:20px;right:20px;background:#10b981;color:white;padding:1rem;border-radius:8px;z-index:9999;box-shadow:0 4px 6px rgba(0,0,0,0.1);animation:fadeIn 0.5s ease-out;';
    document.body.appendChild(message);
    setTimeout(() => {
      message.style.opacity = '0';
      message.style.transition = 'opacity 0.5s ease';
      setTimeout(() => message.remove(), 500);
    }, 5000);
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
document.addEventListener('DOMContentLoaded', function () {
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
  themeSystem.init();
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