/** Script 1
 *  Game - 02/11/2021
 */

var jogador= "Victor";
var vidas= 3;
var municao= 100;
var pontos= 0;

document.write("Nome: <span style='color:#F00'>" + jogador + "</span><br>");
document.write("Vidas: <span style='color:#F00'>" + vidas + "</span><br>");
document.write("Munição: <span style='color:#F00'>" + municao + "</span><br>");
document.write("Pontos: <span style='color:#F00'>" + (pontos + (vidas * 10)) + "</span><br>");