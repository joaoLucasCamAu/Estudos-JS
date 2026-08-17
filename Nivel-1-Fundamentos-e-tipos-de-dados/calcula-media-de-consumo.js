/*Elabore um programa que receba o nome de um modelo de carro e a distância percorrida (em km)
 com um tanque de combustível cheio. Sabendo que o tanque comporta 45 litros, calcule e informe 
 quantos quilômetros o carro faz por litro*/

const nameModelCar = "Camaro";
const KmTraveled = 200;
const valueKmToLiter = (KmTraveled / 45);
console.log(`A quantidade de Km feitos por litro é ${valueKmToLiter.toFixed(2)}`);

 