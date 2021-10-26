function isPalindrome(value) {
  const n = value.length;
  for (let i = 0; i < n / 2; i++) {
    if (value[i] !== value[n - 1 - i]) return `${value} is not palindrome`;
  }
  return `${value} is palindrome`;
}

console.log(isPalindrome(1221)); //1221 is palindrome
console.log(isPalindrome("8881")); //8888 is palindrome
