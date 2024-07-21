import { getSimilarPhotos } from './data.js';
import { getPhotoList } from './add-pictures.js';
import './img-upload-form-modal.js';
import './img-upload-form-validate.js';

const similarPhotoList = getSimilarPhotos();
getPhotoList(similarPhotoList);

