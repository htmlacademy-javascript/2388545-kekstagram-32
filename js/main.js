const DESCRIPTION = [
  'Красивый вид из окна',
  'Еловый лес',
  'Сосновый бор',
  'Туманное утро',
  'Первые цветы',
  'Лужайка в лесу',
  'Старая избушка',
  'Дождливый вечер'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Василий',
  'Андрей',
  'Кристина',
  'Владислав',
  'Елизавета',
  'Василиса',
  'Виталий',
  'Артем',
  'Константин'
];

const SIMILAR_PHOTOS_COUNT = 25;

//генерирует случайное число в диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//генерирует случайное число в диапазоне без повторений
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateId = createRandomIdFromRangeGenerator(1, 25);

const generateComments = () => {
  return {
    id: getRandomInteger(0, 10000000000),
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME)
  }
}

const createPhoto = () => {
  return {
    id: generateId(),
    url: 'photos/' + generateId() + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, generateComments)
  };
};

const similarPhotos = Array.from({length: 25}, createPhoto);

console.log(similarPhotos);
