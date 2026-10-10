(function () {
  var slides = document.querySelectorAll('.slide');
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menuBtn');
  var menuClose = document.getElementById('menuClose');
  var current = 0;

  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, Number(i)));
    current = i;
    slides.forEach(function (s) {
      s.classList.toggle('active', Number(s.dataset.i) === i);
    });
    document.querySelectorAll('.menu [data-go]').forEach(function (b) {
      b.classList.toggle('on', Number(b.dataset.go) === i);
    });
    menu.classList.remove('open');
  }

  document.querySelectorAll('[data-go]').forEach(function (b) {
    b.addEventListener('click', function () { go(b.dataset.go); });
  });

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.add('open');
  });
  menuClose.addEventListener('click', function () { menu.classList.remove('open'); });
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) menu.classList.remove('open');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(current + 1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(current - 1);
  });

  go(0);
})();
