/*Crie um algoritmo que leia uma temperatura em graus Celsius e a converta para Fahrenheit. 
A fórmula é: F = (C * 1.8) + 32. Informe o tipo de dado resultante da operação*/

const temperaturC = 21;
const convertToF = (temperaturC * 1.8) +32;
console.log(`O valor em Graus C convertido é ${convertToF.toFixed(2)} Fahrenheit`);
