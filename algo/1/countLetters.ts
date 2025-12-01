/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  const source = givenString;
  const target = letter;

  let count = 0;
  for (const char of source) {
    if (char === target) {
      count++;
    }
  }
  return count;
}

export default countLetters;
