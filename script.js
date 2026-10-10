(function() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const slides = document.querySelectorAll('.slide');
  const slideNavBtns = document.querySelectorAll('.slide-nav button');

  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));

    const slide = document.querySelector(`.slide[data-slide="${index}"]`);
    if (slide) slide.classList.add('active');

    const btn = document.querySelector(`.nav-btn[data-slide="${index}"]`);
    if (btn) btn.classList.add('active');
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goToSlide(btn.dataset.slide);
    });
  });

  slideNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      goToSlide(btn.dataset.slide);
    });
  });

  goToSlide(0);
})();
