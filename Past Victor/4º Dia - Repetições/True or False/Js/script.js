/** script.js
 * 4º Dia - Repetição
 * Script operador NOT
 */

const usuario = "anônimo";
const mensagem = "";

const mensagemValida = mensagem.length > 140;
const usuarioValido = usuario.length > 100 || usuario === "anônimo";
const todosRequisitosValidos = mensagemValida && usuarioValido;

const mensagemInvalida = !mensagemValida && usuarioValido;
const usuarioInvalido = mensagemValida && !usuarioValido;

    if (todosRequisitosValidos){
        document.write("Enviar a mensagem");
    }

    else if (mensagemInvalida) {
        document.write("A mensagem não pode ser enviada, pois possui menos de 140 caracteres");
    }

    else if (usuarioInvalido) {
        document.write("A mensagem não pode ser enviada, pois o nome de usuário é inválido");
    }

    else {
        document.write("A mensagem não pode ser enviada, pois não atende os requisitos para envio");
    }