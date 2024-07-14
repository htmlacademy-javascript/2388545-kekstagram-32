import {similarPhotos} from './data';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photosList = similarPhotos();

const photoListFragment = document.createDocumentFragment();

photosList.forEach((photo) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoListFragment.appendChild(photoElement);
});

pictureList.append(photoListFragment);
