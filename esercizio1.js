let numeri = [1, 10, 8, 21, 12];
console.log(numeri);
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
	somma += numeri[i];
  };
console.log("La somma degli elementi è:" + somma);


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
const array2= array.filter(n => n %2 === 0).map (n => n *2);
console.log(array2); 


let persona = [
    {nome: "Luigi", età: 15},
    {nome: "Maria", età: 32},
    {nome: "Savino", età: 18}
];
persona.sort((a,b) => a.età - b.età);
console.log(persona);
const maggiorenne= persona.filter( persona => persona.età >=18).map (persona => persona.nome);
console.log(maggiorenne);
