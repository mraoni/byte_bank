export class Funcionario{
    contructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._senha;
        this._bonificacao = 1;
    }

    autenticar(senha){
        return this._senha == senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }    
}