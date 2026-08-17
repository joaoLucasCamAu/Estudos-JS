import chalk from "chalk"


// Um e-commerce cobra frete baseado na região: "Sudeste" (R$ 10,00), "Sul" (R$ 15,00), "Norte" (R$ 25,00). 
// Use switch...case para ler a região e exibir o valor. Caso a região não seja uma dessas, defina um valor default de 
// R$ 30,00

let regiao = "norte";
let taxaDeEntrega;

switch(regiao){
    case "Sudeste" :
        taxaDeEntrega =10.00;
        break
    case "sul" :
        taxaDeEntrega =15.00;
        break
    case "norte":
       taxaDeEntrega = 25.00;
       break
    default: 
        taxaDeEntrega = 30.00
        break
}

console.log(chalk.blueBright.bold(`O valot da Tx de entrega ficou\nR$${taxaDeEntrega.toFixed(2)}`))
