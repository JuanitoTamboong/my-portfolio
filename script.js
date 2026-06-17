function toggleMenu() {
  const btn = document.querySelector('.hamburger-btn');
  const menu = document.querySelector('.menu-links');
  if (!btn || !menu) return;

  btn.classList.toggle('open');
  menu.classList.toggle('open');
}

function closeMenu() {
  const btn = document.querySelector('.hamburger-btn');
  const menu = document.querySelector('.menu-links');
  if (!btn || !menu) return;

  btn.classList.remove('open');
  menu.classList.remove('open');
}

document.addEventListener('click', function (e) {
  const menu = document.querySelector('.menu-links');
  const btn = document.querySelector('.hamburger-btn');
  const hamburger = document.querySelector('.hamburger-menu');
  if (!menu || !btn || !hamburger) return;

  if (!hamburger.contains(e.target)) {
    btn.classList.remove('open');
    menu.classList.remove('open');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const btn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu-links');
    if (!btn || !menu) return;
    btn.classList.remove('open');
    menu.classList.remove('open');
  }
});

let resizeTimer;
window.addEventListener('resize', function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768) {
      const btn = document.querySelector('.hamburger-btn');
      const menu = document.querySelector('.menu-links');
      if (btn && menu) {
        btn.classList.remove('open');
        menu.classList.remove('open');
      }
    }
  }, 150);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const button = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    button.classList.add('visible');
  } else {
    button.classList.remove('visible');
  }
});