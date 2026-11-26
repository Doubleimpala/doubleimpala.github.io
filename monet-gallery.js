// Add new paintings here; each section/page has a unique slot in the daily rotation.
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
    const slot = section.dataset.monetSlot === undefined
      ? index * 2 : Number(section.dataset.monetSlot);
    const painting = monetPaintings[(today + slot) % monetPaintings.length];
    const figure = document.createElement('figure');
    figure.className = 'monet-piece';
    const image = document.createElement('img');
    image.src = `monet/${painting.file}`;
    image.alt = `${painting.title}, a painting by Claude Monet`;
    image.loading = section.classList.contains('project-canvas') ? 'eager' : 'lazy';
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

// The runtime can replace content again after fetching the document. Reattach
// any missing artwork without duplicating figures or changing today's choices.
placeMonetPaintings();
const monetObserver = new MutationObserver(placeMonetPaintings);
monetObserver.observe(document.body, { childList: true, subtree: true });
