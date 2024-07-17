const fullSizePhoto = document.querySelector('.big-picture');
const imgWrap = fullSizePhoto.querySelector('.big-picture__img');
const img = imgWrap.querySelector('img');
const likes = fullSizePhoto.querySelector('.likes-count');
const commentsShown = fullSizePhoto.querySelector('.social__comment-shown-count');
const commentsTotal = fullSizePhoto.querySelector('.social__comment-total-count');
const description = fullSizePhoto.querySelector('.social__caption');

const renderFullSizePhoto = (list) => {
  list.forEach((item) => {
    const imgSrc = item.querySelector('.picture__img').src;
    const imgAlt = item.querySelector('.picture__img').alt;
    const likesCount = item.querySelector('.picture__likes');
    const commentsCount = item.querySelector('.picture__comments');

    item.addEventListener('click', function () {
      fullSizePhoto.classList.remove('hidden');

      img.src = imgSrc;
      img.alt = imgAlt;
      likes.textContent = likesCount.textContent;
      commentsTotal.textContent = commentsCount.textContent;
      description.textContent = imgAlt;
    })
  });
}

export { renderFullSizePhoto };

