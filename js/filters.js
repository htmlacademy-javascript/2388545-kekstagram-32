import { getPhotoList } from './add-pictures.js';
import { getRandomArrayElement } from './utils.js'

const filters = document.querySelector('.img-filters');
const filtersContainer = document.querySelector('.img-filters__form');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');

const RANDOM_FILTER_COUNT = 10;

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const setDefaultFilter = (photos, button) => {
  setActiveButton(button)
  getPhotoList(photos);
};

const setRandomFilter = (photos, button) => {
  setActiveButton(button);
  const randomPhotos = [];
  while (randomPhotos.length !== RANDOM_FILTER_COUNT) {
    const randomElement = getRandomArrayElement(photos);
    if (!randomPhotos.includes(randomElement)) {
      randomPhotos.push(randomElement);
    }
  }
  getPhotoList(randomPhotos);
};

const setDiscussedFilter = (photos, button) => {
  setActiveButton(button);
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
  filtersContainer.addEventListener('click', (evt) => {
    if (evt.target === defaultButton) {
      setDefaultFilter(photos, defaultButton);
    }
    if (evt.target === randomButton) {
      setRandomFilter(photos, randomButton);
    }
    if (evt.target === discussedButton) {
      setDiscussedFilter(photos, discussedButton);
    }
  });
}

export { showFilters, onFilterClick };
