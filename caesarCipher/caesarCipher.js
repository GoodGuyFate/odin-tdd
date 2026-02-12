export function caesarCipher(str, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shift = key % 26;

  return str
    .split("")
    .map((char) => {
      const isUpper = char === char.toUpperCase() && char !== char.toLowerCase()
      const currentIndex = alphabet.indexOf(char.toLowerCase());

      if (currentIndex === -1) return char;

      const newIndex = (currentIndex + shift + 26) % 26;
      const result = alphabet[newIndex]

      return isUpper ? result.toUpperCase() : result
    })
    .join("");
}
