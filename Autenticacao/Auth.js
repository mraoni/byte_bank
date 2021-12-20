// Para ser usuário deve ter a propriedade senha (cliente, diretor, gerente)
// Ou deve ter o método autenticar encapssulamento da senha
export class Auth{
    
    static login(usuario, senha){
        if (Auth.ehAutenticavel(usuario)) {
            return usuario.autenticar(senha);
        }
        return false;       
    }

    static ehAutenticavel(usuario){
        return "autenticar" in usuario && usuario.autenticar instanceof Function
    }
}