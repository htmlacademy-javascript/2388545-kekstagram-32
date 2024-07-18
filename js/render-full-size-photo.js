import {
  AVATAR_WIDTH,
  AVATAR_HEIGHT
} from './constants';

const fullSizePhoto = document.querySelector('.big-picture');
const imgWrap = fullSizePhoto.querySelector('.big-picture__img');
const img = imgWrap.querySelector('img');
const likes = fullSizePhoto.querySelector('.likes-count');
const shownCommentCount = fullSizePhoto.querySelector('.social__comment-shown-count');
const commentsTotal = fullSizePhoto.querySelector('.social__comment-total-count');
const description = fullSizePhoto.querySelector('.social__caption');
const commentContainer = fullSizePhoto.querySelector('.social__comments');
const commentsLoader = fullSizePhoto.querySelector('.comments-loader');

const renderFullSizePhoto = (photoItem, dataItem) => {
  const imgSrc = photoItem.querySelector('.picture__img').src;
  const imgAlt = photoItem.querySelector('.picture__img').alt;
  const likesCount = photoItem.querySelector('.picture__likes');
  const commentsCount = photoItem.querySelector('.picture__comments');
  const fragment = document.createDocumentFragment();

  img.src = imgSrc;
  img.alt = imgAlt;
  likes.textContent = likesCount.textContent;
  commentsTotal.textContent = commentsCount.textContent;
  description.textContent = imgAlt;

  commentContainer.innerHTML = '';

  dataItem.comments.forEach((comment) => {
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

  commentContainer.appendChild(fragment);
};

const showComment = () => {
  const commentList = fullSizePhoto.querySelectorAll('.social__comment');

  let shownCommentTotal = commentList.length;

  if (commentList.length > 5) {
    shownCommentTotal = 5;
    commentsLoader.classList.remove('hidden');

    for (let i = 5; i < commentList.length; i++) {
      commentList[i].classList.add('hidden');
    }
  } else {
    commentsLoader.classList.add('hidden');
  }

  shownCommentCount.textContent = shownCommentTotal;

  commentsLoader.addEventListener('click', () => {
    let showCounter = 0;

    for (let i = 0; i < commentList.length; i++) {
      if (commentList[i].classList.contains('hidden')) {
        commentList[i].classList.remove('hidden');
        showCounter += 1;
        shownCommentTotal += 1;
      }

      if (showCounter === 5) {
        break;
      }
    }

    if (shownCommentTotal === commentList.length) {
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
    }

    shownCommentCount.textContent = shownCommentTotal;
  });
};

export { renderFullSizePhoto, showComment };

