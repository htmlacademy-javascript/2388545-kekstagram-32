import { getPhotoList } from './add-pictures.js';
import { getRandomArrayElement, debounce } from './utils.js';
import {
  RANDOM_FILTER_COUNT,
  RERENDER_DELAY
} from './constants.js';

const filters = document.querySelector('.img-filters');
const filtersContainer = filters.querySelector('.img-filters__form');
const defaultButton = filters.querySelector('#filter-default');
const randomButton = filters.querySelector('#filter-random');
const discussedButton = filters.querySelector('#filter-discussed');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  filters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const setDefaultFilter = (photos) => {
  getPhotoList(photos);
};

const setRandomFilter = (photos) => {
  const randomPhotos = [];
  while (randomPhotos.length !== RANDOM_FILTER_COUNT) {
    const randomElement = getRandomArrayElement(photos);
    if (!randomPhotos.includes(randomElement)) {
      randomPhotos.push(randomElement);
    }
  }
  getPhotoList(randomPhotos);
};

const setDiscussedFilter = (photos) => {
  const unsortedPhotos = photos.map((photo) => ({ id: photo.id, comments: photo.comments.length }));
  const sortedPhotos = unsortedPhotos.sort((a, b) => {
    if (a.comments > b.comments) {
      return -1;
    }
    if (a.comments < b.comments) {
      return 1;
    }
    return 0;
  });
  const discussedPhotos = sortedPhotos.map((photo) => photos[photo.id]);
  getPhotoList(discussedPhotos);
};

const onFilterClick = (photos) => {
  filtersContainer.addEventListener('click', debounce((evt) => {
    if (evt.target === defaultButton) {
      setDefaultFilter(photos);
    }
    if (evt.target === randomButton) {
      setRandomFilter(photos);
    }
    if (evt.target === discussedButton) {
      setDiscussedFilter(photos);
    }
  }, RERENDER_DELAY));
};

filters.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    setActiveButton(evt.target);
  }
});

export { showFilters, onFilterClick };
