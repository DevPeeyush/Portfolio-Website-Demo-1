/* ============================================
   PEEYUSH VERMA — PORTFOLIO SCRIPTS
   main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CURSOR GLOW ── */
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });


  /* ── TYPING EFFECT ── */
  const phrases = [
    'AI/ML Engineer & Data Analyst',
    'Turning Data into Insights',
    'Building Intelligent Systems',
    'Open to Opportunities'
  ];

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isDeleting   = false;
  const typedEl    = document.getElementById('typed');

  function type() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      typedEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(type, isDeleting ? 40 : 70);
  }

  type();


  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
  });


  /* ── NAV ACTIVE STATE ON SCROLL ── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('nav ul a');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 80;

    sections.forEach((sec) => {
      const inView = scrollY >= sec.offsetTop &&
                     scrollY <  sec.offsetTop + sec.offsetHeight;

      navLinks.forEach((link) => {
        if (link.getAttribute('href') === '#' + sec.id) {
          link.style.color = inView ? 'var(--accent)' : '';
        }
      });
    });
  });

});
