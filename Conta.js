// classe absstrata
export class Conta{
    constructor(agencia, cliente, saldo){         
        if (this.constructor ==  Conta){
            throw new Error("A classe conta não pode ser instanciada.");
        }        
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldo;        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
     
    get saldo(){
        return this._saldo;
    }
    
    sacar(valor){
       throw new Error("o método Sacar é abstrato.")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);        
    }
}