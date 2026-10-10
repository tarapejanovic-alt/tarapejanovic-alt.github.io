const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll('.menu-link');
const slideButtons = document.querySelectorAll('.slide-btn');
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
  });

  const targetSlide = document.querySelector(`.slide[data-index="${index}"]`);
  if (targetSlide) {
    targetSlide.classList.add('active');
  }

  const targetMenu = document.querySelector(`.menu-link[data-slide="${index}"]`);
  if (targetMenu) {
    targetMenu.classList.add('active');
  }

  closeMenu.click();
}

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const slideIndex = link.getAttribute('data-slide');
    showSlide(slideIndex);
  });
});

slideButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const slideIndex = btn.getAttribute('data-slide');
    showSlide(slideIndex);
  });
});

document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    sideMenu.classList.remove('active');
  }
});