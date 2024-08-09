import { openUserModal } from './full-photo-modal';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const localPhotos = [];

const clearPhotos = () => {
  document.querySelectorAll('.picture').forEach((card) => card.remove());
}

const getPhotoList = (photoArray) => {
  clearPhotos();
  localPhotos.length = 0;
  localPhotos.push(...photoArray.slice());
  const photoListFragment = document.createDocumentFragment();

  photoArray.forEach(({ id, url, description, likes, comments }) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    photoElement.dataset.marker = id;
    photoListFragment.appendChild(photoElement);
  });

  pictureList.append(photoListFragment);
};

pictureList.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if (pictureElement) {
    const photoId = Number(pictureElement.dataset.marker);
    const photoDataItem = localPhotos.find((item) => item.id === photoId);
    openUserModal(photoDataItem);
  }
});

export { getPhotoList };
