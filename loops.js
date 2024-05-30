/* Loops */
/* 

for (iterador; condicion; incremento){
    // codigo
}

for ( indice in coleccion){
    // codigo
}

for (valor of coleccion){
    // codigo
}

while (condicion){
    // codigo
}

do {
    // codigo
} while (condicion)

*/
//           1              2               4
for(let iterador = 1; iterador <= 10; iterador++){ // iterador = iterador + 1 // iterador += 1
    //          3
    console.log(iterador) 
}
// 1
// 2
// 3
// 9
// 10

console.log("Hola")

let frutas = ["Pera", "Manzana", "Banana", "Uva", "Maracuya", "Piña", "Kiwi", "Nispero"];

let size = frutas.length
for(let indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice])
}
// Pera
// Manzana
// Banana
// Uva
// Maracuya
// Piña


for(let indice in frutas){
    console.log(indice)
    console.log(frutas[indice])
}

for(let valor of frutas){
    console.log(valor)
}


let numero = 1;
while (numero <= 10) {
    console.log(numero)
    numero++
}

let indice = 0;
while(indice < size){
    console.log(frutas[indice])
    indice++
}


let num = 1;
do {
    console.log(num)
    num++
} while(num <= 10)

console.log("Fin")