import {getSimilarPhotos} from './data.js';
import {getPhotoList} from './add-pictures.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';
import {onePhotoOpen} from './full-photo-modal.js';

getPhotoList(getSimilarPhotos());

const photoList = document.querySelectorAll('.picture');
onePhotoOpen(photoList);





