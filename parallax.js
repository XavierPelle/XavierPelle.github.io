// Parallaxe « coupe de terrain » : seuls les calques décoratifs [data-depth] bougent, jamais le texte.
// depth = retard du calque sur le défilement (0 = suit la page, 0.5 = moitié moins vite => paraît loin).
// Positions des conteneurs mises en cache (pas de getBoundingClientRect pendant le défilement).
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var contact = document.querySelector('.contact'), gauge = document.querySelector('.gauge'), gLine = gauge && gauge.querySelector('i'),
      gVal = gauge && gauge.querySelector('.gauge-val');
  var layers = [].slice.call(document.querySelectorAll('[data-depth]')).map(function (el) {
    var box = el.closest('.scene,.terrain,.band,.deco,section') || el.parentElement;
    return { el: el, box: box, depth: parseFloat(el.dataset.depth), top: 0, h: 0, hero: !!el.closest('.hero') };
  });
  var vh = 0, maxS = 1, ticking = false;
  // léger décalage horizontal à la souris (ordinateur uniquement), amorti
  var mx = 0, tx = 0, fine = matchMedia('(pointer: fine)').matches;

  function measure() {
    vh = innerHeight;
    maxS = Math.max(1, document.documentElement.scrollHeight - vh);
    // position de repos de CHAQUE calque (transform retirée le temps de la mesure) :
    // un motif est à sa place exacte quand il passe au centre de l'écran, quelle que soit la hauteur de la section
    layers.forEach(function (l) { l.el.style.transform = 'none'; });
    layers.forEach(function (l) {
      var r = l.el.getBoundingClientRect();
      l.top = r.top + scrollY; l.h = r.height;
    });
  }
  function update() {
    var s = scrollY;
    tx += (mx - tx) * 0.08;
    if (!reduce) layers.forEach(function (l) {
      var top = l.top - s;
      if (top + l.h < -vh * .5 || top > vh * 1.5) return;
      // 0 quand le conteneur est à sa place de repos (haut de page pour l'accueil, centre d'écran sinon)
      var ref = l.top < vh ? l.top : vh / 2 - l.h / 2;
      // décalage plafonné : le décor ne s'éloigne jamais trop de sa place

      var dy = (ref - top) * l.depth;
      // sections : décalage plafonné ; accueil : libre (les plans s'enfoncent derrière le premier plan)
      if (!l.hero) dy = Math.max(-vh * .35, Math.min(vh * .35, dy));
      // souris : le premier plan glisse plus que le lointain (vraie parallaxe horizontale)
      var dx = fine && l.hero ? -tx * (0.7 - l.depth) * 70 : (fine ? tx * l.depth * 40 : 0);
      l.el.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0)';
    });
    if (gauge) {
      var p = Math.min(1, s / maxS);
      gLine.style.transform = 'scaleY(' + p.toFixed(3) + ')';
      gVal.textContent = String(Math.round(p * 240)).padStart(3, '0') + ' m';
      gauge.classList.toggle('on-ink', !!contact && contact.getBoundingClientRect().top < vh / 2);
    }
    ticking = Math.abs(mx - tx) > 0.002;
    if (ticking) requestAnimationFrame(update);
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', function () { measure(); req(); });
  addEventListener('load', function () { measure(); req(); });
  if (fine && !reduce) addEventListener('pointermove', function (e) {
    mx = e.clientX / innerWidth - 0.5; req();
  }, { passive: true });
  // les polices et images peuvent décaler la page après le chargement : on remesure
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); req(); });
  if (window.ResizeObserver) new ResizeObserver(function () { measure(); req(); }).observe(document.body);
  var head = document.querySelector('.top');
  function setHead() { if (head) document.documentElement.style.setProperty('--head', head.offsetHeight + 8 + 'px'); }
  addEventListener('resize', setHead); setHead();
  measure(); update();
})();
