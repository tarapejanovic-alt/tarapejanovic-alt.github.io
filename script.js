const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const menuItems = document.querySelectorAll('.menu-item');
const slideButtons = document.querySelectorAll('.btn');
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.toggle('active', Number(slide.dataset.slide) === Number(index));
  });

  menuItems.forEach((item) => {
    item.classList.toggle('active', Number(item.dataset.slide) === Number(index));
  });
}

menuBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('open');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    showSlide(item.dataset.slide);
    menu.classList.remove('open');
  });
});

slideButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    showSlide(btn.dataset.slide);
  });
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove('open');
  }
});

showSlide(0);
