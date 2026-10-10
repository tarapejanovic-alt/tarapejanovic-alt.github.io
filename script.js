// Get all menu items and slides
const menuItems = document.querySelectorAll('.menu-item');
const slides = document.querySelectorAll('.slide');
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.querySelector('.close-btn');

// Handle menu item clicks
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    const slideIndex = item.getAttribute('data-slide');
    showSlide(slideIndex);
    sideMenu.classList.remove('open');
  });
});

// Handle nav button clicks
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const slideIndex = btn.getAttribute('data-slide');
    showSlide(slideIndex);
  });
});

// Show specific slide
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Remove active class from all menu items
  menuItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Show selected slide
  const slide = document.querySelector(`.slide[data-slide="${index}"]`);
  if (slide) {
    slide.classList.add('active');
  }

  // Highlight menu item
  const menuItem = document.querySelector(`.menu-item[data-slide="${index}"]`);
  if (menuItem) {
    menuItem.classList.add('active');
  }
}

// Menu toggle
menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

// Close menu
closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    sideMenu.classList.remove('open');
  }
});
