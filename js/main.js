import { getSimilarPhotos } from './data.js';
import { getPhotoList } from './add-pictures.js';
import './form-check.js';

const similarPhotoList = getSimilarPhotos();
getPhotoList(similarPhotoList);

