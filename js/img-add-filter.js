const EFFECTS = {
  none: {
    name: 'none',
    style: ' ',
    max: '',
    min: '',
    step: '',
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

const effectsArray = Object.keys(EFFECTS).map(key => EFFECTS[key]);

const imgPreview = document.querySelector('.img-upload__preview img');
const filterList = document.querySelector('.effects__list');
const filters = document.querySelectorAll('.effects__radio');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: { min: 0, max: 100 },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => Number(value),
    from: (value) => Number(value),
  }
});

const setFilter = ({ style, max, unit }) => {
  imgPreview.style.filter = '';
  imgPreview.style.filter = `${style}(${max}${unit})`;
}

const updateSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: { min, max },
    start: max,
    step,
  });
}

sliderElement.noUiSlider.on('update', () => {
  const style = document.querySelector('.effects__radio:checked').value;
  valueElement.value = sliderElement.noUiSlider.get();
  imgPreview.style.filter = `${EFFECTS[style].style}(${valueElement.value}${EFFECTS[style].unit})`
});

filterList.addEventListener('change', (evt) => {
  const effectItem = effectsArray.find((item) => item.name === evt.target.value);
  setFilter(effectItem);
  updateSlider(effectItem);
});
