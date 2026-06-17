// Hamburger menu toggle
// Expected markup:
// - Button calls toggleMenu()
// - .hamburger-icon receives .open class
// - .menu-links receives .open class

function toggleMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  if (!hamburgerIcon || !menuLinks) return;

  hamburgerIcon.classList.toggle('open');
  menuLinks.classList.toggle('open');
}

// Optional: close menu when clicking a link
function closeMenuOnLinkClick() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  if (!menuLinks || !hamburgerIcon) return;

  menuLinks.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;

    hamburgerIcon.classList.remove('open');
    menuLinks.classList.remove('open');
  });
}

document.addEventListener('DOMContentLoaded', closeMenuOnLinkClick);


