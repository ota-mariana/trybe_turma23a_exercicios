//Ecxercício 1 - Fazer cinco programas utilizando a operação aritmética básica.
const a = 40;
const b = 10;
const c = 150;
const d = -3

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

