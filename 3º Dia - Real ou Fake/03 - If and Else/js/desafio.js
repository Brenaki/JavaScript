/**
 * Dia 3 - 04/11/2021
 * Script - links de vídeos do youtube
 * Não funciona
 */

var resposta = prompt('Digite um número:', 'de 1 à 10');

if (resposta >= 6){
    
    resposta.toUpperCase();

    switch (resposta){

        case 6:
            link = '<a src="https://www.youtube.com/watch?v=6ShWtI6geWw"><h1>Clique em mim!!</h1></a>';
            break;

        case 7:
            link = '<a src="https://www.youtube.com/watch?v=lqtPC2q4we0"><h1>Clique em mim!!</h1></a>';
            break;

        case 8:
            link = '<a src="https://www.youtube.com/watch?v=KXXs0nWlfcI"><h1>Clique em mim!!</h1></a>';
            break;

        case 9:
            link = '<a src="https://www.youtube.com/watch?v=fPl-20XpSDM"><h1>Clique em mim!!</h1></a>';
            break;
        
        default:
            link = '<a src="https://www.youtube.com/watch?v=e1JjkZzs_s0"><h1>Clique em mim!!</h1></a>';
            break;
    }
    document.write(link);
}

else {

    document.write('<h1>Se jogo um número muito baixo</h1>');
    document.write('<a src="https://www.youtube.com/watch?v=IQ1p_993LC4"><h2>Mas tá aqui seu link</h2></a>');

}