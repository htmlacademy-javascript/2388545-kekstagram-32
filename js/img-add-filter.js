import { EFFECTS } from './constants.js';

const imgPreview = document.querySelector('.img-upload__preview img');
const filterList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

const effectsArray = Object.keys(EFFECTS).map(key => EFFECTS[key]);

const setFilter = ({ style, max, unit }) => {
  imgPreview.style.filter = '';
  imgPreview.style.filter = `${style}(${max}${unit})`;
}

const hideSlider = () => {
  sliderElement.classList.add('hidden');
};

const showSlider = () => {
  sliderElement.classList.remove('hidden');
};

const onSliderUpdate = () => {
  const style = document.querySelector('.effects__radio:checked').value;
  valueElement.value = sliderElement.noUiSlider.get();
  imgPreview.style.filter = `${EFFECTS[style].style}(${valueElement.value}${EFFECTS[style].unit})`
}

const createSlider = ({ max, min, step }) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    start: max,
    step,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });

  sliderElement.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: { min, max },
    start: max,
    step,
  });
}

filterList.addEventListener('change', (evt) => {
  const effectItem = effectsArray.find((item) => item.name === evt.target.value);
  setFilter(effectItem);
  updateSlider(effectItem);

  if (evt.target.value !== 'none') {
    showSlider();
  } else {
    hideSlider();
  }
});

const resetSlider = () => {
  setFilter(EFFECTS.none);
  hideSlider();
};

export {createSlider, resetSlider};
