import { getSimilarPhotos } from './data.js';
import { getPhotoList } from './add-pictures.js';
import { renderFullSizePhoto } from './render-full-size-photo.js';
import { onPhotoOpen } from './full-photo-modal.js';

const similarPhotoList = getSimilarPhotos();
getPhotoList(similarPhotoList);

const photoList = document.querySelectorAll('.picture');
onPhotoOpen(photoList, similarPhotoList);

