import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { Auth } from "./Autenticacao/Auth.js";


const diretor = new Diretor("Raoni", 1000, 12345768541);
diretor.cadastrarSenha("2");

const gerente = new Gerente("Pedro", 5000, 12345768551);
gerente.cadastrarSenha("2");


const diretorEstaLogado =  Auth.login(diretor, "1");
const gerenteEstaLogado =  Auth.login(gerente, "2");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);


