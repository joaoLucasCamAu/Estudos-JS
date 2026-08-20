import chalk from "chalk";

/* =========== variable section ========= */

let carModel = 'Amarock'; // modelo do carro.
let regionUtil = ''; // região onde o carro será utilizado.
let distance = 450; // distância percorrida.
let qtyLite = 100 ;// quantidade de litros consumidos
let speedPermida = ''; // velocidade permitida.
let speedRegistrada = ''; // velocidade registrada.
let valorPagamento = ''; // valor disponível para pagamento

/* =========== Consumo do Veículo ========= */ 

const kmPorLitro = distance / qtyLite;
console.log(chalk.blue.bold.bgBlackBright("========== VEÍCULO =========="))
console.log(chalk.blue.bold(`Modelo: ${carModel}`));
console.log(chalk.blue.bold(`Distância: ${distance}Km`));
console.log(chalk.blue.bold(`Consumo: ${kmPorLitro.toFixed(2)} Km/L`));
if (kmPorLitro > 12)console.log(chalk.blue.bold('Classificação: Excelente'));
else if (kmPorLitro > 8 && kmPorLitro <= 12)console.log(chalk.blue.bold('Classificação: Bom'));
else if (kmPorLitro >= 5 && kmPorLitro < 8)console.log(chalk.blue.bold('Classificação: Regular'));
else console.log(chalk.blue.bold('Classificação: Alto Consumo'));

console.log(chalk.blue.bold.bgBlackBright("============================="))

