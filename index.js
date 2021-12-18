import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(18652);
contaCorrenteRicardo.sacar(115.52);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1000);
const conta = new Conta(15,cliente1, 50);

console.log(ContaCorrente.numeroContas)
console.log(contaPoupanca);
console.log(contaCorrenteRicardo);



