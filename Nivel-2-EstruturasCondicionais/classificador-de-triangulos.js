import chalk from "chalk"
/*
Elabore um programa que leia três valores representando os lados de um triângulo. O programa deve seguir duas etapas lógicas:
Validação: Primeiro, verifique se os lados podem formar um triângulo (um lado não pode ser maior que a soma dos outros dois)
.
Classificação: Caso forme um triângulo, exiba se ele é Equilátero (3 lados iguais), Isósceles (2 lados iguais) ou Escaleno (3 lados diferentes)
.
Dica de Código: Use operadores lógicos (&&) para comparar os lados simultaneament
*/

let value1 = 4;
let value2 = 2;
let value3 = 1;

if ( value1 === value2 && value1 === value3)console.log(chalk.cyan.bgGray('EQUILÁTERO'))
else if (
    value1 === value2 || value1 === value3||value3 === value2 ){
        console.log(chalk.blueBright.bgGray('ISÓSCELES'))}
else if (value1 != value2 && value1 != value3) console.log(chalk.greenBright.bgGray('ESCALENO'))