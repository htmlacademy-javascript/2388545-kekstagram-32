import { ALERT_SHOW_TIME } from './constants.js';

const dataErrorTemplate = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

const showDataError = () => {
  const dataErrorMessage = dataErrorTemplate.cloneNode(true);
  document.body.appendChild(dataErrorMessage);

  setTimeout(() => {
    dataErrorMessage.remove();
  }, ALERT_SHOW_TIME);
};

export { showDataError };
