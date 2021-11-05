/**
 * Dia 3 - 04/11/2021
 * Script operador OR
 */

const usuario = "anônimo";

if (usuario.length > 100 || usuario == "anônimo" ){
    document.write("<br> Enviar a mensagem");
}
else {
    document.write("<br> A mensagem não pode ser enviada");
}