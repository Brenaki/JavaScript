/**
 * Dia 3 - 04/11/2021
 * Script condição 1 - if
 */

var pedido = prompt('Digite um número: ', 'Entre 1 à 5');

var numero = Math.round(Math.random() * + 1);

if (pedido == numero){
    document.write('<br><h2>Parabéns, você acertou');
}
else {
    document.write('<br><h2>Que Azar, você errou!!');
}