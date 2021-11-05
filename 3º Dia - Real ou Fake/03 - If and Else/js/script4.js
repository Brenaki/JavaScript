/**
 * Dia 3 - 04/11/2021
 * Script condição switch / case
 */

var semafaro = prompt('Digite uma das cores: ', 'Verde - Amarelo - Vermelho');

semafaro = semafaro.toUpperCase();

switch (semafaro) {

    case "VERMELHO":
        mensagem = "Pare!!!";
        break;

    case "AMARELO":
        mensagem = "Atenção!";
        break;
    
    case "VERDE":
        mensagem = "Pode Passar";
        break;

    default:
        mensagem = "Não existe essa cor no semáfaro.";
        break;

}

document.write('<br><h2>' +mensagem);