// Para ser usuário deve ter a propriedade senha (cliente, diretor, gerente)
// Ou deve ter o método autenticar encapssulamento da senha
export class Auth{
    static login(usuario, senha){
        return usuario.autenticar(senha);
    }
}