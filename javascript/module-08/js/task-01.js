const refs = {
  gallery: document.querySelector(".gallery"),
  lightbox: document.querySelector(".lightbox"),
  lightboxImage: document.querySelector(".lightbox__image"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  leftButton: document.querySelector(".left"),
  rightButton: document.querySelector(".right"),
};

let currentIndex = 0;

import galleryItems from "./gallery-items.js";

function createGalleryItem(element, index) {
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
  galleryImage.setAttribute("data-index", `${index}`);
  galleryImage.setAttribute("alt", `${element.description}`);
  itemLink.appendChild(galleryImage);
  return galleryItem;
}

function createGalleryItems(elements) {
  return elements.map((element, index) => createGalleryItem(element, index));
}

function renderGalleryItems() {
  refs.gallery.append(...createGalleryItems(galleryItems));
}
function escHendler(event) {
  if (event.code === "Escape") {
    onCloseButton();
  }
}

function next() {
  if (currentIndex > galleryItems.length - 2) return;
  ++currentIndex;
  refs.lightboxImage.src = galleryItems[currentIndex].original;
}

function previous() {
  if (currentIndex < 1) return;
  --currentIndex;
  refs.lightboxImage.src = galleryItems[currentIndex].original;
}

function arrowHendler(event) {
  if (event.code === "ArrowRight") {
    next();
  } else if (event.code === "ArrowLeft") {
    previous();
  }
}

function onClickImage(event) {
  event.preventDefault();
  window.addEventListener("keydown", escHendler);
  window.addEventListener("keydown", arrowHendler);
  if (event.target.nodeName === "IMG") {
    refs.lightbox.classList.add("is-open");
    refs.lightboxImage.src = event.target.dataset.source;
    refs.lightboxImage.alt = event.target.alt;
  }
  currentIndex = +event.target.dataset.index;
}

function onCloseButton() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
  window.removeEventListener("keydown", escHendler);
  window.removeEventListener("keydown", arrowHendler);
}

function onLightboxClick(event) {
  if (event.target.classList.contains("lightbox__content")) onCloseButton();
}

refs.closeButton.addEventListener("click", onCloseButton);
refs.gallery.addEventListener("click", onClickImage);
refs.lightbox.addEventListener("click", onLightboxClick);
refs.leftButton.addEventListener("click", previous);
refs.rightButton.addEventListener("click", next);
renderGalleryItems();
