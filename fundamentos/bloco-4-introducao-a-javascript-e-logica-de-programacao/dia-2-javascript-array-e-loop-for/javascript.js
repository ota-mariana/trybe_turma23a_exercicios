//Array numbers para os exercícios do 1 ao 7.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1 - Percorrer o array imprimindo todos os valores contidos.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//Exercício 2 - Imprimir o resultado da soma de todos os valores.
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum = sum + numbers[index];
}
    console.log('The sum result is:' , sum);

//Exercício 3 - Calcular e imprimir a média aritmética dos valores do array.
let average = sum / numbers.length;
console.log('The average is:' , average);
