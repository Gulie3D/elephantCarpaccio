const taxesParEtat: { [etat: string]: number } = {
  UT: 6.58,
  NV: 8.0,
  TX: 6.25,
  AL: 4.0,
  CA: 8.25,
};

function calculerRemise(sousTotal: number): number {
  if (sousTotal >= 50000) {
    return 15;
  } else if (sousTotal >= 10000) {
    return 10;
  } else if (sousTotal >= 7000) {
    return 7;
  } else if (sousTotal >= 5000) {
    return 5;
  } else if (sousTotal >= 1000) {
    return 3;
  }
  return 0;
}

function calculerPrixTotalAvecRemiseEtTaxe(
  prixUnitaire: number,
  quantite: number,
  etat: string
): number {
  if (prixUnitaire < 0 || quantite < 0) {
    throw new Error(
      "Le prix unitaire et la quantité doivent être des valeurs positives."
    );
  }

  if (!taxesParEtat[etat]) {
    throw new Error(`L'état "${etat}" n'est pas pris en charge.`);
  }

  const sousTotal = prixUnitaire * quantite;
  const remisePourcentage = calculerRemise(sousTotal);
  const montantRemise = (remisePourcentage / 100) * sousTotal;
  const sousTotalApresRemise = sousTotal - montantRemise;

  const taxe = (taxesParEtat[etat] / 100) * sousTotalApresRemise; // Calcul de la taxe sur le sous-total après remise
  return sousTotalApresRemise + taxe;
}

const prixUnitaire: number = 1500;
const quantite: number = 5;
const etat: string = "NV";

const prixTotal: number = calculerPrixTotalAvecRemiseEtTaxe(
  prixUnitaire,
  quantite,
  etat
);
console.log(
  `Le prix total pour l'état ${etat} est de ${prixTotal.toFixed(2)} euros.`
);
