import chalk from 'chalk'

/*Classificador de Multas:
 Elabore um programa que leia a velocidade permitida e a velocidade do condutor.
Sem multa se velocidade_condutor <= velocidade_permitida.
Multa Leve se a velocidade for até 20% acima da permitida.
Multa Grave se for superior a 20% acima da permitida.*/

const velocidadePermitida = 80;
const velocidadeDoCondutor = 90;
const percentual = velocidadePermitida * 0.2;
if (velocidadeDoCondutor >= velocidadePermitida && velocidadeDoCondutor <= (velocidadePermitida + percentual)) {
    console.log(chalk.yellowBright.bgGray("Multa por excesso de velocidade\nCategoria: Leve"))}
else if (velocidadeDoCondutor >= velocidadePermitida && velocidadeDoCondutor > (velocidadePermitida + percentual)){
    console.log(chalk.red.bgBlack('Multa por excesso de velocidade\nCategoria: Grave'))}
else{
    console.log(chalk.green.bold('Você é um bom condutor, Parabéns!'))
}

