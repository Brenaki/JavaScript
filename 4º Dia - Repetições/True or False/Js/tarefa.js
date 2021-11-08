/** script.js
 * 4º Dia - Repetição
 * Tarefa números inteiros
 */

// Primiero coletamos os valores

var n1, n2;

n1 = prompt('Digite o 1º Valor: ', 'Digite aqui');

n2 = prompt('Digite o 2º Valor: ', 'Digite aqui');

//Depois criamos as varieveis que vão trazer os resultados esperados

var soma = parseInt(n1)+parseInt(n2);
var sub = parseInt(n1)-parseInt(n2);
var multi = parseInt(n1)*parseInt(n2);
var divi = parseInt(n1)/parseInt(n2);
var resto = parseInt(n1)%parseInt(n2);
var media = soma / 2;

// E agora é só escrever os resultados.

document.write("<p>" +n1 +" + " +n2 +" = " +soma +"<p>");
document.write("<p>" +n1 +" - " +n2 +" = " +sub +"<p>");
document.write("<p>" +n1 +" * " +n2 +" = " +multi +"<p>");
document.write("<p>" +n1 +" / " +n2 +" = " +divi +"<p>");
document.write("<p>" +n1 +" % " +n2 +" = " +resto +"<p>");
document.write("<p>(" +n1 +" + " +n2 +") / 2 = " +media +"<p>");