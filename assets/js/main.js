// Theme toggle with system preference + localStorage persistence
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const initial = stored || 'light';
  root.setAttribute('data-theme', initial);

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('is-open');
      });
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navLinks.classList.remove('is-open'));
      });
    }

    // Sticky header shadow on scroll
    const header = document.querySelector('.site-header');
    if (header) {
      const onScroll = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 4);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Abstract toggle for each paper card
    document.querySelectorAll('.paper-abstract-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const paper = btn.closest('.paper');
        if (!paper) return;
        const wrap = paper.querySelector('.paper-abstract-wrap');
        if (!wrap) return;
        const open = btn.getAttribute('aria-expanded') === 'true';
        if (open) {
          wrap.hidden = true;
          btn.setAttribute('aria-expanded', 'false');
        } else {
          wrap.hidden = false;
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
})();
