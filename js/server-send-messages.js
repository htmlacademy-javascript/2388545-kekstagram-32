import { SubmitButtonText } from './constants.js';
import { isEscapeKey } from './utils.js';

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
  //document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onDocumentKeydownForMessage);
  document.addEventListener('click', onDocumentClick);

  const deleteMessage = () => {
    message.remove();
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentKeydownForMessage);
    //document.addEventListener('keydown', onDocumentKeydown);
  };

  function onDocumentKeydownForMessage(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      deleteMessage();
    }
  };

  function onDocumentClick(evt) {
    const messageElement = evt.target.closest(messageInner);
    if (evt.target !== messageElement) {
      deleteMessage();
    }
  }

  button.addEventListener('click', () => {
    deleteMessage();
  });
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
  onShowMessage(successMessage, successButton, successInner)
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

export {
  showSuccessMessage,
  showErrorMessage,
  blockSubmitButton,
  unblockSubmitButton
}
