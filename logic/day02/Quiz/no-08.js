function isPalindrome(string) {
  const lowerString = string.toLowerCase();
  const characters = lowerString.replace(/[\W_]/g, "");
  const len = characters.length;

  for (let i = 0; i < len / 2; i++) {
    if (characters[i] !== characters[len - 1 - i])
      return `${string} is not palindrome`;
  }
  return `${string} is palindrome`;
}

console.log(isPalindrome("Kasurr ini ruSak"));
