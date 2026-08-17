/* Simule um caixa eletrônico. O programa deve ler o saldo atual de um  cliente e o valor que ele deseja sacar. 
Se o valor for menor ou igual ao saldo, informe "Saque Realizado". Se for maior, informe "Saldo Insuficiente". 
Use o operador ternário para essa resposta */

console.log('==========ATM MACHINE==========')
const saldoAtual = 73.50;
const valorParaSacar = 94.3;
const valorSolicitado = (valorParaSacar <= saldoAtual)
 ? `O seu Saque solicitado de R$ ${valorParaSacar.toFixed(2)}, foi aprovado...` 
 : `O seu Saque solicitado de R$ ${valorParaSacar.toFixed(2)}, foi reprovado...`;
 console.log(valorSolicitado)

const valorRestante = saldoAtual - valorParaSacar;
console.log(`O valor restante é R$ ${valorRestante.toFixed(2)}`)


