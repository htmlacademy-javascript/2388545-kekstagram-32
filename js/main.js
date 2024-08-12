import { getPhotoList } from './add-pictures.js';
import { getData } from './server-connect.js';
import './img-upload-form-modal.js';
import './upload-photo.js';

getData(getPhotoList);
