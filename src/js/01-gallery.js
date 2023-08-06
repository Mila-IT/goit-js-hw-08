// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ original, description, preview }) => {
    return `<a class='gallery__item' href='${original}'>
              <img class='gallery__image' src='${preview}' alt='${description}'>
           </a>`;
  })
  .join('');

galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
