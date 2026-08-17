/*Aula 3: Operadores e Controle de Fluxo
    Nesta aula vamos falar sobre operadores aritiméticos, relacionais e ternérios, além disso vamos falar também de estruturas
    de controle, como if, else, for,while e switch.*/

/* Operadores aritiméticos : 
São usados para realizar operações matemáticas, como adição, subtração, multiplicação, divisão e resto da divisão.

adição: +
subtração: -
multiplicação: *
divisão: /
resto da divisão: %


Operadores Relacionais:
Igualdade (==) e (===)
O operador de igualdade (==) compara apenas o valor, enquanto o operador de igualdade estrita (===) compara o valor e o tipo de
dado.
Desigualdade (!=) e (!==)
O operador de desigualdade (!=) compara apenas o valor, enquanto o operador de desigualdade estrita (!==) compara o valor e o 
tipo de dado.

Operadores lógicos: 
Permitem analisar múltiplas condições.
E (&&): retorna true se ambas as condições forem verdadeiras.
OU (||): retorna true se pelo menos uma das condições for verdadeira.
Negação (!): inverte o valor de uma condição, se for true retorna false e vice-versa.

Controle de fluxo:
if and else: é a estrutura mais comum, permitindo descios simpples, colpostos ou múltiplos. (Else if) Segue a seguinte estrutura. 

if (media >= 7) {
    console.log("Aprovado");
    } else{
        console.log("Reprovado");
    }

Operador Ternário: é uma forma simplificada de escrever um if e else, segue a seguinte estrutura.
let media = (nota >= 7) ? "Aprovado" : "Reprovado";

Switch case: Recomendado quand oexistem múltiplas tentativas baseadas no conteúdo de uma única variável. Segue a seguinte estrutura.
Exemplo taxa de entrega:
switch(bairro){
case: "Centro":
    console.log("Taxa de entrega: R$ 5,00");
    break; o 'break' é usado para sair do switch, caso contrário ele vai continuar executando os próximos cases.
case: "Zona Sul":
    console.log("Taxa de entrega: R$ 10,00");
    break;
case: "Zona Norte":
    console.log("Taxa de entrega: R$ 15,00");
    break;}

    Estruturas de repetição: são usadas para executar um bloco de código várias vezes, enquanto uma condição for verdadeira.

    For: é usado quando se sabe o número de vezes que o bloco de código será executado. Segue a seguinte estrutura.
    for (let i = 0; i < 10; i++) {
    console.log(i);
}

Partindo agora para comandos While, Do While. 

While: testa a condiçao no inicio. Se for falsa de cara, os comandos nunca executam.
do while: Testa a condição final. Garante que o código execute pelo menos ua vez. 
Exemplo com do...while para validar entrada [20]
do {
    var num = Number(prompt("Número: "));
} while (num == 0 || isNaN(num)); Repete enquanto a entrada for inválida [20]

*/