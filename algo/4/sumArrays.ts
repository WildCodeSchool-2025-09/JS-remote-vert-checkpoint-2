/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex:
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arrayA: string[], arrayB: string[]): string[] {
  const resultArray = [];
  const arrayAInteger = arrayA.map((element) => Number(element));
  const arrayBInteger = arrayB.map((element) => Number(element));
  const arrayLength =
    arrayA.length >= arrayB.length ? arrayA.length : arrayB.length;
  console.log(arrayAInteger);

  for (let i = 0; i < arrayLength; i++) {
    resultArray.push(
      (
        (arrayAInteger[i] ? arrayAInteger[i] : 0) +
        (arrayBInteger[i] ? arrayBInteger[i] : 0)
      ).toString(),
    );
  }
  return resultArray;
}

export default sumArr;
