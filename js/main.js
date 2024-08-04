import { getPhotoList } from './add-pictures.js';
import { getData } from './server-connect.js';
import './img-upload-form-modal.js';

getData(getPhotoList);
