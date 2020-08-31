const refs = {
  gallery: document.querySelector(".gallery"),
  lightbox: document.querySelector(".lightbox"),
  lightboxImage: document.querySelector(".lightbox__image"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
};

import galleryItems from "./gallery-items.js";

function createGalleryItem(element) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");
  const itemLink = document.createElement("a");
  itemLink.classList.add("gallery__link");
  galleryItem.appendChild(itemLink);
  itemLink.setAttribute("href", `${element.original}`);
  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.setAttribute("src", `${element.preview}`);
  galleryImage.setAttribute("data-source", `${element.original}`);
  galleryImage.setAttribute("alt", `${element.description}`);
  itemLink.appendChild(galleryImage);
  return galleryItem;
}

function createGalleryItems(elements) {
  return elements.map((element) => createGalleryItem(element));
}

function renderGalleryItems() {
  refs.gallery.append(...createGalleryItems(galleryItems));
}
function escHendler(event) {
  if (event.code === "Escape") {
    onCloseButton();
  }
}
function onClickImage(event) {
  event.preventDefault();
  window.addEventListener("keydown", escHendler);
  if (event.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightboxImage.src = event.target.dataset.source;
    refs.lightboxImage.alt = event.target.alt;
  }
}

function onCloseButton() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
  window.removeEventListener("keydown", escHendler);
}

function onLightboxClick(event) {
  if (event.target.nodeName !== "IMG") onCloseButton();
}

refs.closeButton.addEventListener("click", onCloseButton);
refs.gallery.addEventListener("click", onClickImage);
refs.lightbox.addEventListener("click", onLightboxClick);

renderGalleryItems();
