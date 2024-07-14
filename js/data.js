import {getRandomInteger, getRandomArrayElement, generateRandomId} from './utils';

const DESCRIPTION = [
  'Красивый вид из окна',
  'Еловый лес',
  'Сосновый бор',
  'Туманное утро',
  'Первые цветы',
  'Лужайка в лесу',
  'Старая избушка',
  'Дождливый вечер'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Василий',
  'Андрей',
  'Кристина',
  'Владислав',
  'Елизавета',
  'Василиса',
  'Виталий',
  'Артем',
  'Константин'
];

const SIMILAR_PHOTOS_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;

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

const similarPhotos = () => Array.from({length: SIMILAR_PHOTOS_COUNT}, (_, index) => createPhoto(index + 1));

export {similarPhotos};
