/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
* Initialiser un compteur , puis Parcourir chaque lettre 
* si la caractére === à la lettre alors le compteur augemente
* retourner le compteur avec la lettre.
* 
* Pour tester faire npm run test:1 --workspace=algo
*/

function countLetters(givenString: string, letter: string): number {
  let counter = 0;
  for (let i = 0; i < givenString.length; i++) {
    const character = givenString[i];
    if (character === letter) {
      counter = counter + 1;
    }
  }

  return counter;
}

export default countLetters;
