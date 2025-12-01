/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []

si n < 0 -> []
si n = 1 -> [0]
si n = 2 -> [0,1]
array = [0,1]
arr = [0,1] 
Tant que le tableau n'a pas "n" élément 
-> ajouter au tableau ((arr[arr.length-1]) + (arr[arr.length-2])

*/

function getFibonacciSequence(size: number): number[] {
  const array = [0, 1];
  if (size <= 0) {
    return [];
  }
  if (size === 1) {
    return [0];
  }
  if (size === 2) {
    return [0, 1];
  }

  for (let i = 0; i < size - 2; i++) {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }

  return array;
}

export default getFibonacciSequence;
