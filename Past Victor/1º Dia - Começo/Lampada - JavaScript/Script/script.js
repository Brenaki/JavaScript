function acesa() {
    var txt = document.getElementById('txt');
    txt.innerHTML = "Você Ligou a Luz";
    document.querySelector('img').src = "./Styles/imgs/LuzAcesa.jpg";
}

function apagada() {
    var txt = document.getElementById('txt');
    txt.innerHTML = "Você Apagou a Luz!";
    document.querySelector('img').src = "./Styles/imgs/LuzApagada.jpg";
}