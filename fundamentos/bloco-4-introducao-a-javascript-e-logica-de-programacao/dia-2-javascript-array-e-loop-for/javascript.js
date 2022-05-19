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

//Exercício 4 - Imprimir a mensagem de acordo com o resultado do exercício anterior.
if (average > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

//Exercício 5 - Imprima o maior valor contido no array utilizando for.
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}
    console.log('The biggest number is:' , higherNumber);

//Exercício 6 - Descubra quantos valores impares existem no array e imprima o resultado.
let oddValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        oddValue += 1;
    }
}
if (oddValue === 0) {
    console.log('No odd value found');
} else {
    console.log('Number of odd values:' , oddValue);
}

//Exercício 7 - Imprima o menor valor contido no array utilizando for.
let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index]
    }
}

    console.log('The smallest number is:' , smallestNumber);
