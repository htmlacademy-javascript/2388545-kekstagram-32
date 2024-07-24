const EFFECTS = {
  none: {
    name: 'none',
    style: ' ',
    max: '',
    unit: '',
  },
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    max: '1',
    unit: '',
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    max: '1',
    unit: '',
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    max: '100',
    unit: '%',
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    max: '3',
    unit: 'px',
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    max: '3',
    unit: '',
  },
};

const effectsArray = Object.keys(EFFECTS).map(key => EFFECTS[key]);

const imgPreview = document.querySelector('.img-upload__preview img');
const filterList = document.querySelector('.effects__list');
const filters = document.querySelectorAll('.effects__radio');

const setFilter = ({style, max, unit}) => {
  imgPreview.style.filter = '';
  imgPreview.style.filter = `${style}(${max}${unit})`;
  console.log(imgPreview.style.filter)

}

filterList.addEventListener('click', (evt) => {
  const filterElement = evt.target.closest('.effects__radio');

  if (!filterElement) {
    return;
  }

  const effectItem = effectsArray.find((item) => item.name === filterElement.value);
  setFilter(effectItem);
});

