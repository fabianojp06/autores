import validador from "validator";

class FormValidator{
    
    constructor(validacao){
        this.validacao = validacao;
    }

    valida(state) {
        
        const campoValor = state[this.validacao.campo.toString()];
        const metodoValidacao = validador[this.validacao.metodo]

        if(metodoValidacao(campoValor, [], state)){
            console.log('Form inválido');
            return false;
        }else{
            console.log('Form valido');
            return true;
        }
    }
}

export default FormValidator;

