export const DESCRIPTION = [
  'Красивый вид из окна',
  'Еловый лес',
  'Сосновый бор',
  'Туманное утро',
  'Первые цветы',
  'Лужайка в лесу',
  'Старая избушка',
  'Дождливый вечер'
];

export const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const NAME = [
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

export const SIMILAR_PHOTOS_COUNT = 25;
export const LIKES_MIN_COUNT = 15;
export const LIKES_MAX_COUNT = 200;
export const COMMENT_MIN_COUNT = 0;
export const COMMENT_MAX_COUNT = 30;
export const AVATAR_MIN_COUNT = 1;
export const AVATAR_MAX_COUNT = 6;
export const MESSAGE_MIN_COUNT = 1;
export const MESSAGE_MAX_COUNT = 2;
export const AVATAR_WIDTH = 35;
export const AVATAR_HEIGHT = 35;
export const SHOWN_COMMENTS_PORTION = 5;

export const HASHTAG_STANDARD = /^#[a-zа-яё0-9]{1,19}$/i;
export const SPACE = /\s+/g;
export const MAX_HASHTAG_COUNT = 5;
export const MAX_COMMENT_LENGTH = 140;
export const SCALE_DEFAULT = 100;
export const SCALE_STEP = 25;
export const SCALE_MIN = 25;
export const SCALE_MAX = 100;


export const EFFECTS = {
  none: {
    name: 'none',
    style: ' ',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

export const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
export const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикация...'
};

export const ALERT_SHOW_TIME = 5000;

export const RANDOM_FILTER_COUNT = 10;
export const RERENDER_DELAY = 500;
