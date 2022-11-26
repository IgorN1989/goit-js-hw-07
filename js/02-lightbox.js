import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

const optionsForLightbox = {
    captionsData: "alt",
    captionDelay: 250,
}

galleryRef.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', optionsForLightbox); 

function createGalleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      loading="lazy"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    )
    .join("");
}