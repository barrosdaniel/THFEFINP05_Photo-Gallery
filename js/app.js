/* ============================================================ 
Lightbox jQuery Plugin Options
============================================================ */
lightbox.option({
  'showImageNumberLabel': false,
  'wrapAround': true
});

/* ============================================================ 
Image Caption Filter
============================================================ */
// UI elements
const filter = document.querySelector('.header__search');

// Event listeners
filter.addEventListener('keyup', filterImages);

// App logic
function filterImages(e) {
  // Get value of filter field
  const text = e.target.value.toLowerCase();

  // Get all images
  const imageLinks = document.querySelectorAll('.gallery__image-link');

  // Render only images that match search items
  imageLinks.forEach((imageLink) => {
    const caption = imageLink.getAttribute('data-title');
    if (caption.toLowerCase().indexOf(text) != -1) {
      imageLink.style.display = 'block';
    } else {
      imageLink.style.display = 'none';
    }
  });
}