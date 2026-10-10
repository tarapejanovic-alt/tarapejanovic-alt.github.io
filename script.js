const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.menu-item');
const jumpButtons = document.querySelectorAll('.jump-btn');
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.toggle('active', Number(slide.dataset.index) === Number(index));
  });

  menuItems.forEach((item) => {
    item.classList.toggle('active', Number(item.dataset.index) === Number(index));
  });
}

menuToggle.addEventListener('click', () => {
  const isOpen = sideMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    showSlide(item.dataset.index);
    sideMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

jumpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showSlide(button.dataset.index);
  });
});

document.addEventListener('click', (event) => {
  const clickInsideMenu = sideMenu.contains(event.target);
  const clickToggle = menuToggle.contains(event.target);
  if (!clickInsideMenu && !clickToggle) {
    sideMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
