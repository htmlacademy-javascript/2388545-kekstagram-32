import {isEscapeKey, isEnterKey} from './utils.js';

const fullSizePhoto = document.querySelector('.big-picture');
const closeFullSizePhoto = fullSizePhoto.querySelector('.cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  fullSizePhoto.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  fullSizePhoto.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

//тут должен быть обработчик на клик по миниатюре (открытие большого фото), но он лежит в render-full-size-photo

closeFullSizePhoto.addEventListener('click', () => {
  closeUserModal();
});

closeFullSizePhoto.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
