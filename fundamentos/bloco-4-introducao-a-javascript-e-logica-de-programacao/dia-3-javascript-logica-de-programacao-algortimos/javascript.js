//Exercício 1 - Criar um algoritmo que retorne o fatorial de 10.
let factorialNumber = 1;

for (let index = 10; index >= 1; index -= 1) {
    factorialNumber *= index;
}
    console.log('O fatorial de 10 é:' , factorialNumber);


    //Exercício 3 - Retorne a maior e a menor palavra do array.
    let array = ['java', 'javascript', 'python', 'html', 'css'];
    let higherWord = [0];
    let smallestWord = [0];
    
    for (let index = 1; index < array.length; index += 1) {
        if (array[index].length > higherWord.length) {
            higherWord = array[index];
        }
    }

    for (let index = 1; index < array.length; index += 1) {
        if (array[index].length < smallestWord.length) {
            smallestWord = array[index];
        }
    }

        console.log(higherWord);
        console.log(smallestWord);