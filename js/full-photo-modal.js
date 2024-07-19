import { isEscapeKey, isEnterKey } from './utils.js';
import { renderFullSizePhoto } from './render-full-size-photo.js';

const fullSizePhoto = document.querySelector('.big-picture');
const closeFullSizePhoto = fullSizePhoto.querySelector('.cancel');

const openUserModal = (photo) => {
  fullSizePhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderFullSizePhoto(photo);
};

const closeUserModal = () => {
  fullSizePhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

closeFullSizePhoto.addEventListener('click', () => {
  closeUserModal();
});

closeFullSizePhoto.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});

export { openUserModal };
