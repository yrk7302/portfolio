document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
  document.querySelectorAll('.grid img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      const big = document.createElement('img');
      big.src = img.src;
      big.alt = img.alt;
      overlay.appendChild(big);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.remove());
    });
  });

  const slides = document.querySelectorAll('.slideshow .slide');
  let current = 0;
  if (slides.length) {
    slides[current].classList.add('fade-in');
    setInterval(() => {
      const next = (current + 1) % slides.length;
      slides[current].classList.remove('fade-in');
      slides[current].classList.add('fade-out');
      slides[next].classList.remove('fade-out');
      slides[next].classList.add('fade-in');
      setTimeout(() => {
        slides[current].classList.remove('fade-out');
      }, 1000);
      current = next;
    }, 3000);
  }
});
