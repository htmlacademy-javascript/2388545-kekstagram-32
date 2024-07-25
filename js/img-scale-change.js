import {
  SCALE_STEP,
  SCALE_MIN,
  SCALE_MAX,
  SCALE_DEFAULT
} from './constants.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const isScaleButtonDisabled = () => {
  scaleSmaller.disabled = false;
  scaleBigger.disabled = false;

  if (scaleNumber <= SCALE_MIN) {
    scaleSmaller.disabled = true;
  }

  if (scaleNumber >= SCALE_MAX) {
    scaleBigger.disabled = true;
  }
};

let scaleNumber = parseInt(scaleValue.value, 10);

const setStyle = (scale) => {
  scaleValue.value = scale + '%';
  imgPreview.style.transform = `scale(${scale/100})`;
};

scaleSmaller.addEventListener('click', () => {
  if (scaleNumber > SCALE_MIN) {
    scaleNumber -= SCALE_STEP;
    setStyle(scaleNumber);
    isScaleButtonDisabled();
  }
});

scaleBigger.addEventListener('click', () => {
  if (scaleNumber < SCALE_MAX) {
    scaleNumber += SCALE_STEP;
    setStyle(scaleNumber);
    isScaleButtonDisabled();
  }
});

const resetScale = () => {
  setStyle(SCALE_DEFAULT);
};

export {resetScale};
