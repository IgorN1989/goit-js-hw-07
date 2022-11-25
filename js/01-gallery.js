import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';


const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener("click", onImageClick);

galleryRef.addEventListener("keydown", onEscClick);


function createGalleryMarkup(array) {
    
    return array.map(({preview, original, description}) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");
}

function onImageClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
    instance.show()

    galleryRef.addEventListener("keydown", onEscClick);

    function onEscClick(evt) {
        if (evt.code === "Escape") {
            instance.close()
        }
    }
}