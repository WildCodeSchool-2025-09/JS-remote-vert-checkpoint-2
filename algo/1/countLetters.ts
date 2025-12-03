/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
* 1/ créer une fonction soit function countLetters (){}
* 2/ dans une string donnée soit le paramétre de la fonction (string)
* 3/compter le nombre de fois ou la lettre apparait 
* 
* comment compter le nombre de fois ou la lettre apparait? 
* a/ parcourir le mot en entier givenString lettre par lettre pour pouvoir compter les lettres qui ce répétes 
*  d'aprés la doc boule for:
*  
*  for ([expressionInitiale]; [condition]; [expressionIncrément])
   instruction 
La boucle for est basé sur la position index des éléments de la chaîne 

* trouver dans mes recherches la boucle for of 

      L'instruction for...of crée une boucle qui fonctionne avec les objets itérables 
      (qui incluent Array, Map, Set, l'objet arguments, etc.). La boucle appelle un mécanisme d'itération 
      propre à l'objet utilisé et elle parcourt l'objet et les valeurs de ses différentes propriétés.

      J'ai demander à l'ia de m'expliquer comme un enfant la boucle for of 

      Imagine que la givenString est un train 🚂.

      Chaque caractère est un wagon 📦.

      La boucle for...of ne te donne pas le numéro du wagon (l'index i), mais elle te donne directement le contenu du wagon (le caractère char).

  https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Loops_and_iteration
* 
*  création de la fonction anonyme char pour pour character soit la représentation d'un caractére du mot. 
* si char === letter soit si le caractére corespond à la lettre alors on augement le compteur de +1. 
* 
* b/ compter les lettres égales sur la lecture du tableau  pour compter il faut créer un compteur 
*  let count = 0 initie le compteur à 0 pour pouvoir lui ajouter un nombre de +1 à chaque passage de la boucle lorsque 
* qu'une lettre est comptée plusieurs fois. 
* 
* c/ retourner le résultat 
* 
* phase de test npm run algo:test:1 
*/

function countLetters(givenString: string, letter: string): number {
  let count = 0;
  const lettermini = letter.toLowerCase();
  const givenStringmini = givenString.toLowerCase();
  for (const char of givenStringmini) {
    if (char === lettermini) {
      count++;
    }
  }
  return count;
}

export default countLetters;
