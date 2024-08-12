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
