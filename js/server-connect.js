import { showDataError } from './server-get-messages';

const getData = (renderFunction) => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error()
      }
      return response.json()
    })
    .then((data) => renderFunction(data))
    .catch(() => showDataError());
};

const sendForm = (formData) =>
  fetch('https://32.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: formData,
    }
  )
  ;

export { getData, sendForm }
