import { getSimilarPhotos } from './data.js';
import { getPhotoList } from './add-pictures.js';

const similarPhotoList = getSimilarPhotos();
getPhotoList(similarPhotoList);

