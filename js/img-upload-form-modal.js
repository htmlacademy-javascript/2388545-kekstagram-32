import { isEscapeKey } from './utils.js';
import { isValid } from './img-upload-form-validate.js';

const imgUploadform = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('.img-upload__input');
const redactForm = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

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

hashtagField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

commentField.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

imgUploadform.addEventListener('submit', (evt) => {
  if(!isValid()){
    evt.preventDefault();
  }
});
