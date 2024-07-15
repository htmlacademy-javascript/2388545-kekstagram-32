const checkLength = (string, maxLength) => string.length <= maxLength;

// console.log('Строка меньше. Ожидаю true, получаю', checkLength('Буря мглою небо кроет', 50));
// console.log('Строка равна. Ожидаю true, получаю', checkLength('Вихри ', 6));
// console.log('Строка больше. Ожидаю false, получаю', checkLength('снежные крутя', 5));
checkLength('hello', 8);

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reverseString += normalizedString[i];
  }

  return normalizedString === reverseString;
};

// console.log('Строка - палиндром, регистр одинаковый. Ожидаю true, получаю', isPalindrome('топот'));
// console.log('Строка - палиндром, регистр разный. Ожидаю true, получаю', isPalindrome('ДовОд'));
// console.log('Строка - палиндром с пробелами. Ожидаю true, получаю', isPalindrome('Лёша на полке клопа нашёл ', 5));
// console.log('Строка - не палиндром. Ожидаю false, получаю', isPalindrome('Буря мглою небо кроет'));
isPalindrome('топот');

//Альтернативный вариант решения задачи (информация с созвона)

const checkPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = normalizedString.split('').reverse().join('');
  return normalizedString === reverseString;
};

// console.log('Строка - палиндром, регистр одинаковый. Ожидаю true, получаю', checkPalindrome('топот'));
// console.log('Строка - палиндром, регистр разный. Ожидаю true, получаю', checkPalindrome('ДовОд'));
// console.log('Строка - палиндром с пробелами. Ожидаю true, получаю', checkPalindrome('Лёша на полке клопа нашёл ', 5));
// console.log('Строка - не палиндром. Ожидаю false, получаю', checkPalindrome('Буря мглою небо кроет'));
checkPalindrome('топот');

const getNumber = (string) => {
  const normalizedString = string.toString();
  let resultNumber = '';

  for (let i = 0; i < normalizedString.length; i++) {
    const checkedSymbol = parseInt(normalizedString[i], 10);
    if (!Number.isNaN(checkedSymbol)) {
      resultNumber += checkedSymbol;
    }
  }

  return resultNumber === '' ? NaN : Number(resultNumber);
};

// console.log('Цифры подряд - ECMAScript 2022. Ожидаю 2022, получаю', getNumber('ECMAScript 2022'));
// console.log('Цифры разделены символом - 1 кефир, 0.5 батона. Ожидаю 105, получаю', getNumber('1 кефир, 0.5 батона'));
// console.log('Спереди цифры 0 - агент 007. Ожидаю 7, получаю', getNumber('агент 007'));
// console.log('Цифр нет - а я томат. Ожидаю NaN, получаю', getNumber('а я томат'));
// console.log('Пришло число - 2023. Ожидаю 2023, получаю', getNumber('2023'));
// console.log('Пришло отрцательное число - -5. Ожидаю 5, получаю', getNumber('-5'));
getNumber(45);

//ЗАДАЧА ДЕЛУ-ВРЕМЯ

const converseToMinutes = (timeStroke) => {
  const timeInMinutes = timeStroke.split(':');
  return parseInt(timeInMinutes[0], 10) * 60 + parseInt(timeInMinutes[1], 10);
};

const IsMeetInWork = (workStartTime, workEndTime, meetStartTime, meetDuration) => {
  const workStart = converseToMinutes(workStartTime);
  const workEnd = converseToMinutes(workEndTime);
  const meetStart = converseToMinutes(meetStartTime);

  if (meetStart >= workStart) {
    if ((meetStart + meetDuration) <= workEnd) {
      return true;
    }
  }

  return false;
};

IsMeetInWork('08:00', '17:30', '14:00', 90);

// console.log('Начало во время рабочего дня, встреча укладывается, ожидаю true, получаю', IsMeetInWork('08:00', '17:30', '14:00', 90));
// console.log('Начало во время рабочего дня, встреча укладывается, ожидаю true, получаю', IsMeetInWork('8:0', '10:0', '8:0', 120));
// console.log('Начало во время рабочего дня, встреча не укладывается, ожидаю false, получаю', IsMeetInWork('08:00', '14:30', '14:00', 90));
// console.log('Начало до рабочего дня, встреча не укладывается, ожидаю false, получаю', IsMeetInWork('14:00', '17:30', '08:0', 90));
// console.log('Начало во время рабочего дня, встреча не укладывается, ожидаю false, получаю', IsMeetInWork('8:00', '17:30', '08:00', 900));

