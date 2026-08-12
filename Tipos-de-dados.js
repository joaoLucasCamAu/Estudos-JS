// Aula 1: TIPOS DE DADOS EM JAVASCRIPT

/*Bom para iniciar a aula vamos falar dos tipos é necessário ter em mente o conceito de variáveis.
Váriaveis são como caixas na memória onde os dados são guardados. Então todo tipo de dado é guardado em uma variável.
Para criar um variável em Javascript usamos as palavras reservadas: var, let e const.*/
// - exemplo:
var nome = "Lucas"; //string
let idade = 20; //number
const altura = 1.75; //number

// QUANDO USAR VAR, LET E CONST?

/*Var: é um método antigo de declarar variáveis, não é mais recomendado seu uso, pois tem um escopo global
e pode gerar alguns problemas de manutenção do código.*/

/*Tipos de dados primitivos: São os tipos de dados mais simples, que não possuem métodos e propriedades. São eles:
String, Number, Boolean, Undefined, Null, Symbol e BigInt.*/

/*String: é um tipo de dado que representa uma sequência de caracteres. É usado para armazenar textos.*/
//exemplo:
let nome = "Lucas";
let sobrenome = 'Silva';
let titulo = `Desenvolvedor`;
/*Sempre busque usar nomes de variáveis que façam sentido com o valor que ela armazena, para facilitar a leitura do código.
Você também pode usar aspas simples, duplas ou crase(interpolação de string) para declarar uma string.*/

/*Number: é um tipo de dado que representa números, tanto inteiros quanto decimais.*/
//exemplo:
let idade = 20; //inteiro
let altura = 1.75; //decimal
const pi = 3.14; //constante
const numero_negativo = -10; //negativo
/* Números são usados decimais reais são apresentados com "."(ponto) e não com ","(vírgula).*/

/*Boolean: é um tipo de dado que representa valores lógicos, podendo ser verdadeiro (true) ou falso (false).*/
//exemplo:
let verdadeiro = true;
let falso = false;
/*Boolean é muito usado em estruturas de controle, como if, while e for.*/

/*undefined: é um tipo de dado que é automaticamente atribuído a uma variável que foi declarada, mas não inicializada.*/
//exemplo:
let variavel;
console.log(variavel); //undefined
/*Quando uma variável é declarada, mas não recebe nenhum valor, ela é automaticamente atribuída como undefined.*/

/*null: é um tipo de dado que representa a ausência de valor. É usado para indicar que uma variável não possui nenhum valor.*/
//exemplo:
let variavel = null;
console.log(variavel); //null
/*Null é usado para indicar que uma variável não possui nenhum valor, diferente do undefined que indica que a variável
 foi declarada, mas não inicializada.*/

 /*Symbol: é um tipo de dado que representa um valor único e imutável. É usado para criar identificadores únicos para propriedades de objetos.*/
//exemplo:
const simbolo1 = Symbol('simbolo');
const simbolo2 = Symbol('simbolo');
console.log(simbolo1 === simbolo2); //false
/*Symbol é usado para criar identificadores únicos para propriedades de objetos, evitando conflitos de nomes.*/

/*FALANDO AGORA SOBRE CONVERSÃO DE TIPOS DE DADOS EM JAVASCRIPT*/
/*Em Javascript, é possível converter um tipo de dado para outro. Essa conversão pode ser feita de forma implícita ou explícita.
A conversão implícita é feita pelo próprio Javascript, enquanto a conversão explícita é feita pelo desenvolvedor.

Muitas vezes dados de entrada chegam com string, mesmo sendo número e cabe ao desenvolvedor realizar a conversão para o tipo de 
dado apropriado.
*/

/*Number(): é uma função que converte um valor para o tipo number.*/
//exemplo:
let numeroString = "20";
let numero = Number(numeroString);
console.log(numero); //20
console.log(typeof numero); //number
/*parseInt(): é uma função que converte um valor para o tipo number, mas retorna apenas a parte inteira do número.*/
//exemplo:
let numeroString = "20.5";
let numero = parseInt(numeroString);
console.log(numero);    //20
console.log(typeof numero); //number
/*parseFloat(): é uma função que converte um valor para o tipo number, retornando o número com casas decimais.*/
//exemplo:  
let numeroString = "20.5";
let numero = parseFloat(numeroString);
console.log(numero);   //20.5
console.log(typeof numero); //number

/*string(): é uma função que converte um valor para o tipo string.*/
//exemplo:
let numero = 20;
let numeroString = String(numero);
console.log(numeroString); //20
console.log(typeof numeroString); //string

/*Boolean(): é uma função que converte um valor para o tipo boolean.*/
//exemplo:
let numero = 20;
let booleano = Boolean(numero);
console.log(booleano); //true
console.log(typeof booleano); //boolean 
/*toString(): é um método que converte um valor para o tipo string.*/
//exemplo:
let numero = 20;
let numeroString = numero.toString();
console.log(numeroString); //20
console.log(typeof numeroString); //string  





