document.addEventListener('DOMContentLoaded', () => {
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
});
