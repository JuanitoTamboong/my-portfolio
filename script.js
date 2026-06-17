// ========== HAMBURGER MENU TOGGLE ==========
function toggleMenu() {
  const btn = document.querySelector('.hamburger-btn');
  const menu = document.querySelector('.menu-links');
  if (!btn || !menu) return;

  btn.classList.toggle('open');
  menu.classList.toggle('open');
}

// ========== CLOSE MENU (when link clicked) ==========
function closeMenu() {
  const btn = document.querySelector('.hamburger-btn');
  const menu = document.querySelector('.menu-links');
  if (!btn || !menu) return;

  btn.classList.remove('open');
  menu.classList.remove('open');
}

// ========== AUTO-CLOSE ON OUTSIDE CLICK ==========
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

// ========== CLOSE ON ESC KEY ==========
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const btn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu-links');
    if (!btn || !menu) return;
    btn.classList.remove('open');
    menu.classList.remove('open');
  }
});

// ========== CLOSE ON RESIZE TO DESKTOP ==========
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