// GoatCounter-compatible local client. The endpoint stays on the private
// doubleimpala.goatcounter.com site; hosting this file avoids a blocked script host.
(() => {
  const tag = document.querySelector('script[data-goatcounter]');
  const endpoint = tag?.dataset.goatcounter;
  if (!endpoint || location.protocol === 'file:' || /localhost$|^127\./.test(location.hostname)) return;
  if (localStorage.getItem('skipgc') === 't') return;

  const params = new URLSearchParams({
    p: location.pathname + location.search || '/',
    t: document.title,
    r: document.referrer,
    s: String(window.screen.width),
    rnd: Math.random().toString(36).slice(2),
  });
  const url = `${endpoint}?${params}`;
  if (!navigator.sendBeacon || !navigator.sendBeacon(url)) {
    const pixel = new Image(1, 1);
    pixel.alt = '';
    pixel.setAttribute('aria-hidden', 'true');
    pixel.src = url;
  }
})();
