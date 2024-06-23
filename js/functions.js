function lengthCheck (string, maxLength) {
  return string.length <= maxLength;
}

lengthCheck();

function isPalindrome (string) {
  const newString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }

  return newString === reverseString;
}

isPalindrome();
