import {
  HASHTAG_STANDARD,
  SPACE,
  MAX_HASHTAG_COUNT,
  MAX_COMMENT_LENGTH
} from './constants.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const hashtagField = imgUploadForm.querySelector('.text__hashtags');
const commentField = imgUploadForm.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-error'
});

const normalizeHashtag = (value) => !value.length ? [] : hashtagField.value.toLowerCase().replaceAll(SPACE, ' ').trim().split(' ');

const validateFormatHashtag = (value) => {
  const hashes = normalizeHashtag(value);
  return hashes.every((hashtag) => HASHTAG_STANDARD.test(hashtag));
};

const checkUnique = (value) => {
  const hashes = normalizeHashtag(value);
  const uniques = [...new Set(hashes)];
  return hashes.length === uniques.length;
};

const checkCount = (value) => {
  const hashes = normalizeHashtag(value);
  return hashes.length <= MAX_HASHTAG_COUNT;
};

pristine.addValidator(
  hashtagField,
  validateFormatHashtag,
  'Хэштег состоит из букв и цифр, максимальная длина 20 символов',
  1,
  true
);

pristine.addValidator(
  hashtagField,
  checkUnique,
  'Хэштеги не могут повторяться',
  2,
  true
);

pristine.addValidator(
  hashtagField,
  checkCount,
  'Разрешено не более пяти хэштегов',
  3,
  true
);

const validateComment = () => commentField.value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(
  commentField,
  validateComment,
  `Длина комментария не может превышать ${MAX_COMMENT_LENGTH} символов`);

const isValid = () => pristine.validate();

const resetValidation = () => {
  pristine.reset();
};

export { isValid, resetValidation };
