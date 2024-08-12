import { showDataError } from './server-get-messages.js';
import { showFilters, onFilterClick } from './filters.js';
import {
  BASE_URL,
  Route
} from './constants.js';

const getData = (renderFunction) => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      renderFunction(data);
      showFilters();
      onFilterClick(data);
    })
    .catch(() => showDataError());
};

const sendForm = (formData) =>
  fetch(`${BASE_URL}${Route.SEND_DATA}`,
    {
      method: 'POST',
      body: formData,
    }
  );

export { getData, sendForm };
