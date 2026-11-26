// Known titles and offline fallback. Published images are discovered automatically.
const bundledPaintings = [
  { file: 'the-cliff-walk-pourville-repro.jpg', title: 'The Cliff Walk at Pourville' },
  { file: 'base_8145565.jpg', title: 'The Japanese Footbridge' },
  { file: 'the-flowered-garden-reproducti.jpg', title: 'The Flowered Garden' },
  { file: 'antibes-in-the-morning-reprodu.jpg', title: 'Antibes in the Morning' },
  { file: 'the-walk-woman-with-a-parasol-.jpg', title: 'Woman with a Parasol' },
  { file: 'Pathway.jpg', title: 'Garden Path' },
];
let monetPaintings = bundledPaintings;
bundledPaintings.sort((a, b) => a.file < b.file ? -1 : a.file > b.file ? 1 : 0);
// Reuse the last discovered list immediately, without waiting for GitHub.
try {
  const cached = JSON.parse(localStorage.getItem('monet-paintings'));
  if (Array.isArray(cached) && cached.length && cached.every(p =>
    typeof p.file === 'string' && !/[\\/]/.test(p.file) && typeof p.title === 'string'
  )) monetPaintings = cached;
} catch { /* Storage is optional. */ }

function placeMonetPaintings() {
  const sections = [...document.querySelectorAll('.art-section')]
    .filter(section => !section.closest('x-dc'));
  // The document wrapper can mount after this script executes.
  if (!sections.length) return false;
  const today = Math.floor(Date.now() / 86400000);
  sections.forEach((section, index) => {
    if (section.querySelector('.monet-piece')) return;
    const slot = section.dataset.monetSlot === undefined
      ? index * 2 : Number(section.dataset.monetSlot);
    const painting = monetPaintings[(today + slot) % monetPaintings.length];
    const figure = document.createElement('figure');
    figure.className = 'monet-piece';
    const image = document.createElement('img');
    image.src = `monet/${encodeURIComponent(painting.file)}`;
    image.alt = `${painting.title}, a painting by Claude Monet`;
    image.loading = section.classList.contains('project-canvas') ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      // Discovery can see a new file before Pages finishes deploying it.
      // Fall back to a bundled painting rather than leaving empty sidebars.
      const fallback = bundledPaintings[(today + slot) % bundledPaintings.length];
      image.src = `monet/${encodeURIComponent(fallback.file)}`;
      image.alt = `${fallback.title}, a painting by Claude Monet`;
      caption.textContent = `${fallback.title} — Claude Monet`;
    }, { once: true });
    const caption = document.createElement('figcaption');
    caption.textContent = painting.title;
    const artist = document.createElement('span');
    artist.textContent = 'Claude Monet';
    caption.append(artist);
    figure.append(image, caption);
    section.append(figure);
  });
  return true;
}

// The runtime can replace content again after fetching the document. Reattach
// any missing artwork without duplicating figures or changing today's choices.
async function startMonetGallery() {
  // Paint immediately, including when API requests are slow or unavailable.
  placeMonetPaintings();
  const monetObserver = new MutationObserver(placeMonetPaintings);
  monetObserver.observe(document.body, { childList: true, subtree: true });
  try {
    // GitHub Pages does not provide directory listings. Discover the published
    // folder through GitHub; keep the bundled selection if discovery is offline.
    const response = await fetch(
      'https://api.github.com/repos/Doubleimpala/doubleimpala.github.io/contents/monet?ref=main',
      { signal: AbortSignal.timeout(2500) }
    );
    if (!response.ok) throw new Error('Painting discovery unavailable');
    const files = await response.json();
    const known = new Map(monetPaintings.map(p => [p.file, p.title]));
    const discovered = files
      .filter(f => f.type === 'file' && /\.(jpe?g|png|webp|avif|gif)$/i.test(f.name))
      .map(f => ({
        file: f.name,
        title: known.get(f.name) || f.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
      }))
      .sort((a, b) => a.file < b.file ? -1 : a.file > b.file ? 1 : 0);
    if (discovered.length) {
      // Use discoveries on the next page load, avoiding a visible image swap.
      localStorage.setItem('monet-paintings', JSON.stringify(discovered));
    }
  } catch {
    // The original paintings remain usable without GitHub or network access.
  }
}
startMonetGallery();
