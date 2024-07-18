import { isEscapeKey, isEnterKey } from './utils.js';
import { renderFullSizePhoto, showComment } from './render-full-size-photo.js';

const onPhotoOpen = (photoArray, dataArray) => {
  const fullSizePhoto = document.querySelector('.big-picture');
  const closeFullSizePhoto = fullSizePhoto.querySelector('.cancel');

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  };

  function openUserModal() {
    fullSizePhoto.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  }

  function closeUserModal() {
    fullSizePhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  for (let i = 0; i < photoArray.length; i++) {
    photoArray[i].addEventListener('click', () => {
      renderFullSizePhoto(photoArray[i], dataArray[i]);
      showComment();
      openUserModal();
    });
  }

  closeFullSizePhoto.addEventListener('click', () => {
    closeUserModal();
  });

  closeFullSizePhoto.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      closeUserModal();
    }
  });
};

export { onPhotoOpen };
