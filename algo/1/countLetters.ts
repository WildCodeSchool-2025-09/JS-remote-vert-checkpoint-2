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
  // Ma fonction attend en parametre 2 strings : givenString et letter. elle devra retourner un number
  // givenString aura plein de lettres, et letter devra compter le nombre de cette lettre en particulier
  // si aucune letter n'est dans la givenString, retourner 0

  const givenLetters = givenString.split("");

  const result = givenLetters.filter((t) => t === letter);

  return result.length;
}

console.log(countLetters("fddaaaaaaabbbbb", "c"));

export default countLetters;
