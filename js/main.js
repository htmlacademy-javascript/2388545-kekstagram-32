import {getSimilarPhotos} from './data.js';
import {getPhotoList} from './add-pictures.js';

getPhotoList(getSimilarPhotos());

//код ниже открывает большое фото

const photoList = document.querySelectorAll('.picture');
const fullSizePhoto = document.querySelector('.big-picture');
const closeFullSizePhoto = fullSizePhoto.querySelector('.cancel');

photoList.forEach((photoItem) => {
  const photoItemChildren = photoItem.children;
  const imgSrc = photoItemChildren[0].src;
  const imgAlt = photoItemChildren[0].alt;
  const fullSizePhotoImgWrap = document.querySelector('.big-picture__img');
  const fullSizePhotoImg = fullSizePhotoImgWrap.querySelector('img');

  photoItem.addEventListener('click', function () {
    fullSizePhoto.classList.remove('hidden');

    fullSizePhotoImg.src = imgSrc;
    fullSizePhotoImg.alt = imgAlt;
  })
});



closeFullSizePhoto.addEventListener('click', () => {
  console.log(1);
  fullSizePhoto.classList.add('hidden');
});



