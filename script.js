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

  document.querySelectorAll('.grid video').forEach(video => {
  video.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    const bigVideo = document.createElement('video');
    bigVideo.src = video.src;
    bigVideo.controls = true;
    bigVideo.autoplay = true;
    overlay.appendChild(bigVideo);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});

  document.querySelectorAll('.grid img, .grid video').forEach(media => {
  media.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    let clone;
    if (media.tagName === 'IMG') {
      clone = document.createElement('img');
      clone.src = media.src;
      clone.alt = media.alt;
    } else if (media.tagName === 'VIDEO') {
      clone = document.createElement('video');
      clone.src = media.src;
      clone.controls = true;
      clone.autoplay = true;
    }

    overlay.appendChild(clone);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => overlay.remove());
  });
});

  const slides = document.querySelectorAll('.slideshow img');
  let current = 0;
  if (slides.length) {
    slides[0].classList.add('active');
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3000);
  }
});
