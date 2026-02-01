// Responsive header + mobile drawer logic
(() => {
  const burger = document.querySelector('.burger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  if (!burger || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('show');
    burger.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    (isOpen ? closeDrawer() : openDrawer());
  });
  overlay.addEventListener('click', closeDrawer);
  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
})();
