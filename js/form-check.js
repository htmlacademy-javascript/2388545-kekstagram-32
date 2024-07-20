import { isEscapeKey } from './utils.js';

const uploadInput = document.querySelector('.img-upload__input');
const redactForm = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('.img-upload__cancel');

const openRedactForm = () => {
  redactForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeRedactForm = () => {
  redactForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
};

uploadInput.addEventListener('change', () => {
  openRedactForm();
});

closeFormButton.addEventListener('click', () => {
  closeRedactForm();
});

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeRedactForm();
  }
}
