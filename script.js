(function () {
  var slides = document.querySelectorAll('.slide');
  var menu = document.getElementById('menu');
  var current = 0;

  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, Number(i)));
    current = i;
    slides.forEach(function (s) { s.classList.toggle('active', Number(s.dataset.i) === i); });
    document.querySelectorAll('.menu-list [data-go]').forEach(function (b) {
      b.classList.toggle('on', Number(b.dataset.go) === i);
    });
    menu.classList.remove('open');
  }

  document.querySelectorAll('[data-go]').forEach(function (b) {
    b.addEventListener('click', function () { go(b.dataset.go); });
  });

  document.getElementById('menuToggle').addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('open');
  });
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) menu.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') go(current + 1);
    if (e.key === 'ArrowLeft') go(current - 1);
  });

  go(0);
})();
