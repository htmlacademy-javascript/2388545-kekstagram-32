import { getSimilarPhotos } from './data.js';
import { getPhotoList } from './add-pictures.js';
import { renderFullSizePhoto } from './render-full-size-photo.js';
import { onPhotoOpen } from './full-photo-modal.js';

const similarPhotoList = getSimilarPhotos();
getPhotoList(similarPhotoList);

const photoList = document.querySelectorAll('.picture');
onPhotoOpen(photoList);

//ниже черновик


const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

similarPhotoList.forEach((similarPhotoItem) => {
  const fragment = document.createDocumentFragment();

  similarPhotoItem.comments.forEach((comment) => {
    const newElement = document.createElement('li');
    newElement.classList.add('social__comment');
    newElement.innerHTML = '<img class="social__picture"><p class="social__text"></p>';

    const commentAvatar = newElement.querySelector('.social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentAvatar.width = AVATAR_WIDTH;
    commentAvatar.height = AVATAR_HEIGHT;

    const commentText = newElement.querySelector('.social__text');
    commentText.textContent = comment.message;

    fragment.appendChild(newElement);
  });
  console.log(fragment);
});
