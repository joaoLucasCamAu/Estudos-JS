import chalk from 'chalk'

/*Crie um algoritmo para um terminal de estacionamento rotativo que leia o valor depositado pelo usuário. 
O programa deve informar o tempo de permanência e o troco, seguindo esta regra:
R$ 1,00 = 30 min;
R$ 1,75 = 60 min;
R$ 3,00 = 120 min
.
Condição extra: Se o valor for inferior a R$ 1,00, exiba "Valor Insuficiente"
.
Dica de Clean Code: Tente usar uma estrutura de else if para as faixas de valores e garanta que o troco
seja exibido com duas casas decimais usando .toFixed(2)
*/

let valorDepositado = 0.2;
let tempoDePermanencia = 60;
if(valorDepositado < 1 )  console.log('Condição extra: Se o valor for inferior a R$ 1,00, exiba "Valor Insuficiente"')
else if(tempoDePermanencia == 30)console.log(valorDepositado - 1)
else if(tempoDePermanencia <= 60)console.log(valorDepositado - 1.75)
else if(tempoDePermanencia >= 60)console.log(valorDepositado - 3) 
 