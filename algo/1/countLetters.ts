// Crée un compteur à 0.

// Parcourir les lettres une à une.

// Trouvé si des lettres sont identiques.

// additionner les lettres identiques

// Retourner le total du compteur.

function countLetters(givenString: string, letter: string): number {
  let compteur = 0;
  for (let i = 0; i < givenString.length; i++)
    if (givenString[i] === letter) {
      compteur++;
    }
  return compteur;
}

export default countLetters;
