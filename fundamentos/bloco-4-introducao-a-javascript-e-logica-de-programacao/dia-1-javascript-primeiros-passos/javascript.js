//Valores das constantes usadas nos exercícios.
const a = 40;
const b = 10;
const c = 150;
const d = -3

//Ecxercício 1 - Fazer cinco programas utilizando a operação aritmética básica.
console.log('O resultado da soma é: ' + (a+b));
console.log('O resultado da subtração é: ' + (a-b));
console.log('O resultado da multiplicação é: ' + (a*b));
console.log('O resultado da divisão é: ' + (a/b));
console.log('O resultado do módulo é: ' + (a%b));

//Exercício 2 - Retornar o maior de dois números.
if (a > b) {
    console.log('O maior número é: ' + a);
} else {
    console.log('O maior número é: ' + b);
}

//Exercício 3 - Retornar o maior de três números.
if (a > b && a > c) {
    console.log('O maior número é: ' + a);
} else if (b > a && b > c) {
    console.log('O maior número é: ' + b);
} else {
    console.log('O maior número é: ' + c);
}

//Exercício 4 - Retornar o valor positivo, negativo ou zero definido na constante.
if (d > 0) {
    console.log('Positive!');
} else if (d < 0) {
    console.log('Negative!');
} else {
    console.log('Zero');
}

//Exercício 5 - Retornar true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
const angleTri1 = 30;
const angleTri2 = 70;
const angleTri3 = 80;

const sumOfAngles = angleTri1 + angleTri2 + angleTri3;


//Exercício 8 - Retornar true se pelo menos uma das três constantes for par ou false, caso contrário.
const number1 = 15;
const number2 = 27;
const number3 = 70;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    console.log('True');
} else {
    console.log('False');
}



