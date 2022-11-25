import { galleryItems } from "./gallery-items.js";

const bodyRef = document.querySelector("body");
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener("click", onImageClick);

bodyRef.addEventListener("keydown", onEscapeClick);

let instance = null;

function createGalleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt="${evt.target.alt}" width="800" height="600">
`);
  instance.show();
}

function onEscapeClick(evt) {
  if (onImageClick && evt.code === "Escape") {
    instance.close();
  }
}