import chalk from "chalk";
/* 
Elabore um programa que leia um número e exiba "estrelas" (*) em linhas diferentes
A cada nova linha, a quantidade de estrelas deve ser incrementada

Saída esperada (se o número for 4): * ** *** ****
*/

let qtyStar = 18;
for ( let i = 1; i <= qtyStar; i ++){
    console.log(chalk.blue.bgWhite("*".repeat(i)))
} 




