//Array numbers para os exercícios do 1 ao 7.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1 - Percorrer o array imprimindo todos os valores contidos.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//Exercício 2 - Imprimir o resultado da soma de todos os valores.
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
    console.log('The sum result is:' , soma);
