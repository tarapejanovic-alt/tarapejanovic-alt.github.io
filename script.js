(function() {
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  const menuClose = document.getElementById('menuClose');
  const slides = document.querySelectorAll('.slide');
  const menuItems = document.querySelectorAll('.menu button[data-slide]');
  const screenBtns = document.querySelectorAll('.btns button');

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    menuItems.forEach(b => b.classList.remove('active'));

    const target = document.querySelector(`.slide[data-slide="${index}"]`);
    if (target) target.classList.add('active');

    const menuItem = document.querySelector(`.menu button[data-slide="${index}"]`);
    if (menuItem) menuItem.classList.add('active');

    menu.classList.remove('open');
  }

  menuBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('open');
  });

  menuItems.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(btn.dataset.slide);
    });
  });

  screenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(btn.dataset.slide);
    });
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  showSlide(0);
})();