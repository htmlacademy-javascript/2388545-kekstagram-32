import {
  getRandomInteger,
  getRandomArrayElement,
  generateRandomId
} from './utils';

import {
  DESCRIPTION,
  MESSAGE,
  NAME,
  SIMILAR_PHOTOS_COUNT,
  LIKES_MIN_COUNT,
  LIKES_MAX_COUNT,
  COMMENT_MIN_COUNT,
  COMMENT_MAX_COUNT,
  AVATAR_MIN_COUNT,
  AVATAR_MAX_COUNT,
  MESSAGE_MIN_COUNT,
  MESSAGE_MAX_COUNT
} from './constants';

const createMessage = () => Array.from({length: getRandomInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT)}, () => getRandomArrayElement(MESSAGE)).join(' ');

const generateComments = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME)
});

const createPhoto = (inputId) => ({
  id: inputId,
  url: `photos/${inputId}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)}, generateComments)
});

const getSimilarPhotos = () => Array.from({length: SIMILAR_PHOTOS_COUNT}, (_, index) => createPhoto(index + 1));

export {getSimilarPhotos};
