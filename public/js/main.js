// ============================================
// Empório dos Pães – main.js
// ============================================

document.addEventListener('DOMContentLoaded', function () {

  // Navbar scroll effect
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,.3)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

  // Animate cards on scroll (Intersection Observer)
  const cards = document.querySelectorAll('.product-card, .destaque-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = `opacity .5s ease ${i * 0.08}s, transform .5s ease ${i * 0.08}s`;
      observer.observe(card);
    });
  }

  // Botão "Pedir" feedback
  document.querySelectorAll('.btn-add:not(.disabled)').forEach(btn => {
    if (!btn.tagName === 'A') {
      btn.addEventListener('click', function () {
        const original = this.innerHTML;
        this.innerHTML = '<i class="bi bi-check-circle-fill me-1"></i>Adicionado!';
        this.style.background = '#28a745';
        setTimeout(() => {
          this.innerHTML = original;
          this.style.background = '';
        }, 1800);
      });
    }
  });

});
