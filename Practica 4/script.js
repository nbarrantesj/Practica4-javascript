let lista = []; 

for (let i = 0; i < 5; i++){
    let numeros = parseInt(prompt("Ingrese un número"));
    lista.push(numeros);
}  

let max = Math.max.apply (Math, lista);
let min = Math.min.apply (Math, lista);
let sum = lista.reduce ((previous, current) => current += previous);
let prom = sum/lista.length;
lista.sort((a,b)=>a-b);
let median = (lista[(lista.length - 1) >> 1] + lista[lista.length >> 1]) /2;

console.log ('Lista de números' ,lista);
console.log (max);
console.log (min);
console.log (prom);
console.log (median);