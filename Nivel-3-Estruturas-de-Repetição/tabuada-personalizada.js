/*
Tabuada Personalizada: 
Leia um número e, utilizando um laço for, apresente a sua tabuada do 1 ao 10 no console
*/

let operationType = '+';
let value = 70;

switch(operationType){
    case '-':
        {
        console.log(`Tabuada de Subtração do valor: ${value}`)
        for( let i = 1; i <= 10; i++){
           console.log(value --);
        }}
    case '+':
        {
        console.log(`Tabuada de Adição do valor: ${value}`)
        for( let i = 1; i <= 10; i++){
           console.log(value + 1);
        }}
    case '*':
        {
        console.log(`Tabuada de Adição do valor: ${value}`)
        for( let i = 1; i <= 10; i++){
           console.log(value = value * i);
        }

    }
}