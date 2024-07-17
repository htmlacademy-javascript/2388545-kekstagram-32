import {getSimilarPhotos} from './data.js';
import {getPhotoList} from './add-pictures.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';
import './full-photo-modal.js';

getPhotoList(getSimilarPhotos());

const photoList = document.querySelectorAll('.picture');
renderFullSizePhoto(photoList);




