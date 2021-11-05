/**
 * Dia 3 - 04/11/2021
 * Script condição - if / else if / else
 */

var semafaro = prompt('Digite uma das Cores: ', 'Verde - Amarelo - Vermelho');

if (semafaro == "Verde"){

    mensagem = "Pode passar";

}

else if (semafaro == "Amarelo"){

    mensagem = "Atenção!";

}

else {

    mensagem = "Pare!!!!";

}
document.write('<br><h2>' + mensagem);