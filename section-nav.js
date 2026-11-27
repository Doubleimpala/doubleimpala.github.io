// Keep the small section index in sync with the reading position.
(() => {
  let queued = false;
  function update() {
    queued = false;
    const links = [...document.querySelectorAll('.section-nav a')]
      .filter(link => !link.closest('x-dc'));
    const items = links.map(link => ({ link, section: document.querySelector(link.hash) }))
      .filter(item => item.section);
    if (!items.length) return;
    let active = items[0];
    for (const item of items) {
      if (item.section.getBoundingClientRect().top <= Math.max(48, innerHeight * 0.25)) active = item;
    }
    if (scrollY > 0 && scrollY + innerHeight >= document.documentElement.scrollHeight - 2) {
      active = items[items.length - 1];
    }
    for (const item of items) {
      if (item === active) {
        if (item.link.getAttribute('aria-current') !== 'location') item.link.setAttribute('aria-current', 'location');
      } else item.link.removeAttribute('aria-current');
    }
  }
  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('hashchange', schedule);
  // The page runtime mounts and may replace the navigation after initial load.
  new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  schedule();
})();
