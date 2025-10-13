// script.js - subtle interactivity for the internship page

document.addEventListener('DOMContentLoaded', () => {
  // tiny entry animation
  document.querySelectorAll('.hero-card > *').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    setTimeout(() => {
      el.style.transition = 'opacity 420ms ease, transform 420ms ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 120 + i * 90);
  });

  // add ripple effect for primary buttons
  document.querySelectorAll('.btn.primary, .mini-apply').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
      btn.appendChild(ripple);
      setTimeout(()=> ripple.remove(), 600);
    });
  });

  // accessible keyboard: allow Enter to activate links with .btn class when focused
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
      const focus = document.activeElement;
      if(focus && focus.classList && focus.classList.contains('btn')) {
        focus.click();
      }
    }
  });
});

// Smooth fade-out between pages
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href.startsWith('http')) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(()=> window.location = href, 400);
    }
  });
});
