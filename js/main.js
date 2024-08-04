import { getPhotoList } from './add-pictures.js';
import './img-upload-form-modal.js';
import { showDataError } from './data-get-form-message.js';
import {
  BASE_URL,
  Route,
} from './constants.js';

fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => response.json())
  .then((photos) => getPhotoList(photos))
  .catch(() => showDataError());
