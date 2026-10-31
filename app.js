/**
 * StudySync AI - Glassmorphism Interactive Frontend Script
 * Handles Theme Toggling, Glass Blur Controls, FAQ Accordion, Workflow Tabs, and Mobile Menu
 */

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // 1. Theme Switcher (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('studysync-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersDark) {
    root.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('studysync-theme', newTheme);
    });
  }

  // 2. Interactive Glass Blur Intensity Controller (UI/UX Pro Max Feature)
  const glassCtrlBtns = document.querySelectorAll('.glass-ctrl-btn');
  glassCtrlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      glassCtrlBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const blurVal = btn.getAttribute('data-blur');
      const opacityVal = btn.getAttribute('data-opacity');
      root.style.setProperty('--glass-blur', blurVal);
      if (opacityVal) {
        root.style.setProperty('--glass-surface', opacityVal);
      }
    });
  });

  // 3. Interactive Workflow Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      tabPanels.forEach(panel => {
        if (panel.id === targetTabId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(otherItem => otherItem.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '78px';
      navLinks.style.left = '16px';
      navLinks.style.right = '16px';
      navLinks.style.background = 'var(--glass-surface-heavy)';
      navLinks.style.backdropFilter = 'blur(28px)';
      navLinks.style.padding = 'var(--space-24)';
      navLinks.style.borderRadius = 'var(--radius-xl)';
      navLinks.style.border = '1px solid var(--glass-border)';
      navLinks.style.boxShadow = 'var(--glass-shadow-lg)';
    });
  }

  // 6. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinkElements = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinkElements.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
});
