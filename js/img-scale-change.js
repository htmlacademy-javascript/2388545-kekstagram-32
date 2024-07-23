const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;


scaleSmaller.addEventListener('click', () => {
  let scaleNumber = parseInt(scaleValue.value, 10);
  if (scaleNumber > SCALE_MIN) {
    scaleBigger.disabled = false;
    scaleNumber -= SCALE_STEP;
    scaleValue.value = scaleNumber + '%';
    scaleNumber /= 100;
    imgPreview.style.transform = `scale(${scaleNumber})`;
  } else {
    scaleSmaller.disabled = true;
  }
});

scaleBigger.addEventListener('click', () => {
  let scaleNumber = parseInt(scaleValue.value, 10);
  if (scaleNumber < SCALE_MAX) {
    scaleSmaller.disabled = false;
    scaleNumber += SCALE_STEP;
    scaleValue.value = scaleNumber + '%';
    scaleNumber /= 100;
    imgPreview.style.transform = `scale(${scaleNumber})`;
  }else {
    scaleBigger.disabled = true;
  }
});
