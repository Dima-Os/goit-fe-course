const refs = {
  gallery: document.querySelector('.gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  leftButton: document.querySelector('.left'),
  rightButton: document.querySelector('.right'),
};

let currentIndex = 0;

import galleryItems from './gallery-items.js';

function createElement(name, attr = {}) {
  const createdElement = document.createElement(`${name}`);
  Object.keys(attr).map(attribute => {
    createdElement.setAttribute(`${attribute}`, `${attr[attribute]}`);
  });
  return createdElement;
}

function createGalleryItem(element, index) {
  const galleryItem = createElement('li', { class: 'gallery__item' });
  const itemLink = createElement('a', {
    class: 'gallery__link',
    href: `${element.original}`,
  });
  galleryItem.appendChild(itemLink);
  const galleryImage = createElement('img', {
    class: 'gallery__image',
    src: `${element.preview}`,
    'data-source': `${element.original}`,
    alt: `${element.description}`,
    'data-index': `${index}`,
  });
  itemLink.appendChild(galleryImage);
  return galleryItem;
}

function createGalleryItems(elements) {
  return elements.map((element, index) => createGalleryItem(element, index));
}

function renderGalleryItems() {
  refs.gallery.append(...createGalleryItems(galleryItems));
}

function next() {
  if (currentIndex > galleryItems.length - 2) currentIndex = -1;
  ++currentIndex;
  refs.lightboxImage.src = galleryItems[currentIndex].original;
}

function previous() {
  if (currentIndex < 1) currentIndex = galleryItems.length;
  --currentIndex;
  refs.lightboxImage.src = galleryItems[currentIndex].original;
}

function keyBoardHendler(event) {
  switch (event.code) {
    case 'ArrowRight':
      next();
      break;
    case 'ArrowLeft':
      previous();
      break;
    case 'Escape':
      onCloseButton();
      break;
  }
}

function onClickImage(event) {
  event.preventDefault();
  window.addEventListener('keydown', keyBoardHendler);
  if (event.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightboxImage.src = event.target.dataset.source;
    refs.lightboxImage.alt = event.target.alt;
  }
  currentIndex = +event.target.dataset.index;
}

function onCloseButton() {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.src = '';
  refs.lightboxImage.alt = '';
  window.removeEventListener('keydown', keyBoardHendler);
}

function onLightboxClick(event) {
  if (event.target.classList.contains('lightbox__content')) onCloseButton();
}

refs.closeButton.addEventListener('click', onCloseButton);
refs.gallery.addEventListener('click', onClickImage);
refs.lightbox.addEventListener('click', onLightboxClick);
refs.leftButton.addEventListener('click', previous);
refs.rightButton.addEventListener('click', next);
renderGalleryItems();

console.dir(refs.gallery);
