const imgUploadform = document.querySelector('.img-upload__form');

const pristine = new Pristine(imgUploadform, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-error'
});

const hashtagField = imgUploadform.querySelector('.text__hashtags');
const hashtagCheck = /^#[a-zа-яё0-9]{1,19}$/i;

const validateHashtag = () => {
  const hashtagArray = hashtagField.value.split(' ');
  const checkingArray = [];

  for (let i = 0; i < hashtagArray.length; i++) {
    if (hashtagCheck.test(hashtagArray[i]) && !checkingArray.includes(hashtagArray[i]) && hashtagArray.length <= 5) {
      checkingArray.push(hashtagArray[i]);
    } else {
      return false;
    }
  }
  return true;
};

pristine.addValidator(hashtagField, validateHashtag, 'Неверный формат');

const commentField = imgUploadform.querySelector('.text__description');

const validateComment = () => commentField.value.length <= 140;

pristine.addValidator(commentField, validateComment, 'Длина комментария не может превышать 140 символов');

imgUploadform.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

