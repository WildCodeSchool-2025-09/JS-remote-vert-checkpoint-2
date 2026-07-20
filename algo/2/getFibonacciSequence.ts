/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  // Ton code ici !
  // je veux ajouter les 2 premiers nombres 0 et 1, puis ajouter le prochain nombre à ce résultat, etc.
  // si j'écris 9 en param, ce sera : [0,1,1,2,3,5,8,13,21]
  // le param est un nombre, et la fonction renvoit un tableau de nombres
  // si le param est 0, la fonction doit retourner un tableau vide.

  const fibonacci = [0, 1];
  let sum = 0;
  let n1 = 0;
  let n2 = 1;

  if (size <= 0) {
    return [];
  }

  if (size === 1) {
    return [0];
  }

  for (let i = 2; i < size; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    fibonacci.push(sum);
  }

  return fibonacci;
}

export default getFibonacciSequence;
