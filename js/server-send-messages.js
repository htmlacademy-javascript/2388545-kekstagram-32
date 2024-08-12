import { SubmitButtonText } from './constants.js';
import { isEscapeKey } from './utils.js';
import { onDocumentKeydown } from './img-upload-form-modal.js';

const submitButton = document.querySelector('.img-upload__submit');
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const errorMessage = errorTemplate.cloneNode(true);
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const successMessage = successTemplate.cloneNode(true);

const onShowMessage = (message, button, messageInner) => {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onDocumentKeydownForMessage);
  document.addEventListener('click', onDocumentClick);

  const deleteMessage = () => {
    message.remove();
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentKeydownForMessage);
    if (message.classList.contains('error')) {
      document.addEventListener('keydown', onDocumentKeydown);
    }
    button.removeEventListener('click', deleteMessage);
  };

  function onDocumentKeydownForMessage(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      deleteMessage();
    }
  }

  function onDocumentClick(evt) {
    const messageElement = evt.target.closest(messageInner);
    if (evt.target !== messageElement) {
      deleteMessage();
    }
  }

  button.addEventListener('click', deleteMessage);
};

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  const errorButton = errorMessage.querySelector('.error__button');
  const errorInner = '.error__inner';
  onShowMessage(errorMessage, errorButton, errorInner);
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  const successButton = successMessage.querySelector('.success__button');
  const successInner = '.success__inner';
  onShowMessage(successMessage, successButton, successInner);
};

const blockSubmitButton = (isBlock = true) => {
  submitButton.disabled = isBlock;
  submitButton.textContent = isBlock ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

export {
  showSuccessMessage,
  showErrorMessage,
  blockSubmitButton
};
