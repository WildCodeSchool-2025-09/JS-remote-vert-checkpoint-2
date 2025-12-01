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
  let count = 0;

  for (let i = 0; i < givenString.length; i++) {
    const element = givenString[i];

    if (element === letter) {
      count++;
    }
  }
  return count;
}
export default countLetters;
