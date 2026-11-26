// Add new paintings here; three are selected each day in a stable rotation.
// Keep paths relative to the homepage. Titles are optional for unidentified works.
const monetPaintings = [
  { file: 'the-cliff-walk-pourville-repro.jpg', title: 'The Cliff Walk at Pourville' },
  { file: 'base_8145565.jpg', title: 'The Japanese Footbridge' },
  { file: 'the-flowered-garden-reproducti.jpg', title: 'The Flowered Garden' },
  { file: 'antibes-in-the-morning-reprodu.jpg', title: 'Antibes in the Morning' },
  { file: 'the-walk-woman-with-a-parasol-.jpg', title: 'Woman with a Parasol' },
  { file: 'Pathway.jpg', title: 'Garden Path' },
];

function placeMonetPaintings() {
  const sections = [...document.querySelectorAll('.art-section')]
    .filter(section => !section.closest('x-dc'));
  // The document wrapper can mount after this script executes.
  if (!sections.length) return false;
  const today = Math.floor(Date.now() / 86400000);
  sections.forEach((section, index) => {
    if (section.querySelector('.monet-piece')) return;
    const painting = monetPaintings[(today + index * 2) % monetPaintings.length];
    const figure = document.createElement('figure');
    figure.className = 'monet-piece';
    const image = document.createElement('img');
    image.src = `monet/${painting.file}`;
    image.alt = `${painting.title}, a painting by Claude Monet`;
    image.loading = 'lazy';
    image.decoding = 'async';
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

if (!placeMonetPaintings()) {
  const observer = new MutationObserver(() => {
    if (placeMonetPaintings()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
