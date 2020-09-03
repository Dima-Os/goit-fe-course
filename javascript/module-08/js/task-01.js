const refs = {
  gallery: document.querySelector('.gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  leftButton: document.querySelector('.left'),
  rightButton: document.querySelector('.right'),
};

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
  const linkAttributes = {
    class: 'gallery__link',
    href: `${element.original}`,
  };
  const itemLink = createElement('a', linkAttributes);
  galleryItem.appendChild(itemLink);
  const imgAttributes = {
    class: 'gallery__image',
    src: `${element.preview}`,
    'data-source': `${element.original}`,
    alt: `${element.description}`,
    'data-index': `${index}`,
  };
  const galleryImage = createElement('img', imgAttributes);
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
  const currentIndex = galleryItems.findIndex(
    element => element.original === refs.lightboxImage.src,
  );
  refs.lightboxImage.src =
    currentIndex < galleryItems.length - 1
      ? galleryItems[currentIndex + 1].original
      : galleryItems[0].original;
}

function previous() {
  const currentIndex = galleryItems.findIndex(
    element => element.original === refs.lightboxImage.src,
  );
  refs.lightboxImage.src =
    currentIndex === 0
      ? galleryItems[galleryItems.length - 1].original
      : galleryItems[currentIndex - 1].original;
}

function keyBoardHendler(event) {
  const pushedKey = event.code;
  if (pushedKey === 'ArrowRight') next();
  if (pushedKey === 'ArrowLeft') previous();
  if (pushedKey === 'Escape') onCloseButton();
}

function onClickImage(event) {
  event.preventDefault();
  window.addEventListener('keydown', keyBoardHendler);
  if (event.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightboxImage.src = event.target.dataset.source;
    refs.lightboxImage.alt = event.target.alt;
  }
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
refs.lightbox.addEventListener('click', onLightboxClick);
refs.leftButton.addEventListener('click', previous);
refs.rightButton.addEventListener('click', next);
refs.gallery.addEventListener('click', onClickImage);

renderGalleryItems();
