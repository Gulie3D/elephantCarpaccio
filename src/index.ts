console.log("Hello World"); //tache 1

console.log("1000€"); //tache 2

console.log("Quantité : 5"); // tache 3
console.log("Prix : 100 €");

// tache 4 
const quantity = 5;
const price = 100;
const total = quantity * price;

console.log(`Quantité : ${quantity}`);
console.log(`Prix : ${price} €`);
console.log(`Total : ${total} €`);

//tache 5
const taxUT = 6.85 / 100;
const totalWithTaxUT = total * (1 + taxUT);

console.log(`Prix avec taxe (UT) : ${totalWithTaxUT.toFixed(2)} €`);

//tache 6
const taxNV = 8 / 100;
const totalWithTaxNV = total * (1 + taxNV);

console.log(`Prix avec taxe (NV) : ${totalWithTaxNV.toFixed(2)} €`);
