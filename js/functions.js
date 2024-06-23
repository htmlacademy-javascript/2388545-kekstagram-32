function lengthCheck (string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome (string) {
  let newString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }

  return newString === reverseString;
}
