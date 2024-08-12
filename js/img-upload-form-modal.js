import { isEscapeKey } from './utils.js';
import { isValid, resetValidation } from './img-upload-form-validate.js';
import { resetScale } from './img-scale-change.js';
import { createSlider, resetSlider } from './img-add-filter.js';
import { sendForm } from './server-connect.js';
import { EFFECTS } from './constants.js';
import {
  showSuccessMessage,
  showErrorMessage,
  blockSubmitButton
} from './server-send-messages.js';

const imgUploadform = document.querySelector('.img-upload__form');
const uploadInput = imgUploadform.querySelector('.img-upload__input');
const redactForm = imgUploadform.querySelector('.img-upload__overlay');
const closeFormButton = imgUploadform.querySelector('.img-upload__cancel');
const hashtagField = imgUploadform.querySelector('.text__hashtags');
const commentField = imgUploadform.querySelector('.text__description');

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
  imgUploadform.reset();
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
  evt.preventDefault();

  if (isValid()) {
    blockSubmitButton();

    const formData = new FormData(evt.target);
    sendForm(formData)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeRedactForm();
        showSuccessMessage();
      })
      .catch(() => showErrorMessage())
      .finally(() => {
        blockSubmitButton(false);
      });
  }
});

createSlider(EFFECTS.none);

export { onDocumentKeydown };
