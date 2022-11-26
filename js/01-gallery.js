import { galleryItems } from "./gallery-items.js";

const bodyRef = document.querySelector("body");
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance = null;

galleryRef.innerHTML = galleryMarkup;

galleryRef.addEventListener("click", onImageClick);


function createGalleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      loading="lazy"
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
  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" alt="${evt.target.alt}" width="800" height="600">`,
    {
    onShow: (instance) => { bodyRef.classList.add("no-scroll"); bodyRef.addEventListener("keydown", onEscapeClick) },
    onClose: (instance) => {bodyRef.classList.remove("no-scroll"); bodyRef.removeEventListener("keydown", onEscapeClick)},
  });
  instance.show();
}

function onEscapeClick(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}