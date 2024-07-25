import { isEscapeKey } from './utils.js';
import { isValid, resetValidation } from './img-upload-form-validate.js';
import {resetScale} from './img-scale-change.js';
import { EFFECTS } from './constants.js';
import { createSlider, resetSlider } from './img-add-filter.js';

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
  resetValidation();
  resetScale();
  resetSlider();
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

createSlider(EFFECTS.none);
