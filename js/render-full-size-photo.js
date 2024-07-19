import {
  AVATAR_WIDTH,
  AVATAR_HEIGHT,
  SHOWN_COMMENTS_PORTION
} from './constants';

const fullSizePhoto = document.querySelector('.big-picture');
const imgElement = fullSizePhoto.querySelector('.big-picture__img img');
const likesElement = fullSizePhoto.querySelector('.likes-count');
const descriptionElement = fullSizePhoto.querySelector('.social__caption');
const shownCommentCount = fullSizePhoto.querySelector('.social__comment-shown-count');
const commentsTotal = fullSizePhoto.querySelector('.social__comment-total-count');
const commentContainer = fullSizePhoto.querySelector('.social__comments');
const commentsLoader = fullSizePhoto.querySelector('.comments-loader');

const localComments = [];
let countRenderedComments = 0;
let totalComments = 0;

const renderComment = ({ avatar, message, name }) => {
  const newElement = document.createElement('li');
  newElement.classList.add('social__comment');
  newElement.innerHTML = '<img class="social__picture"><p class="social__text"></p>';

  const commentAvatar = newElement.querySelector('.social__picture');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentAvatar.width = AVATAR_WIDTH;
  commentAvatar.height = AVATAR_HEIGHT;

  const commentText = newElement.querySelector('.social__text');
  commentText.textContent = message;

  return newElement;
};

const renderLoaderButton = () => {
  if (countRenderedComments < totalComments) {
    commentsLoader.classList.remove('hidden')
  } else {
    commentsLoader.classList.add('hidden')
  }
};

const renderStatistic = () => {
  shownCommentCount.textContent = countRenderedComments;
}

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  localComments.splice(0, SHOWN_COMMENTS_PORTION).forEach((item) => {
    fragment.append(renderComment(item));
    countRenderedComments++;
  })

  commentContainer.append(fragment);
  renderLoaderButton();
  renderStatistic();
};

const renderFullSizePhoto = ({ likes, comments, url, description }) => {
  imgElement.src = url;
  imgElement.alt = description;
  likesElement.textContent = likes;
  descriptionElement.textContent = description;
  commentsTotal.textContent = comments.length;

  localComments.length = 0;
  countRenderedComments = 0;
  localComments.push(...comments.slice());
  commentContainer.innerHTML = '';
  totalComments = comments.length;
  renderComments();
};

commentsLoader.addEventListener('click', renderComments);

export { renderFullSizePhoto };

