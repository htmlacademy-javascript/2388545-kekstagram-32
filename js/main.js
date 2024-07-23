import { getSimilarPhotos } from './data.js';
import { getPhotoList } from './add-pictures.js';
import './img-upload-form-modal.js';
import './img-scale-change.js';

const similarPhotoList = getSimilarPhotos();
getPhotoList(similarPhotoList);

