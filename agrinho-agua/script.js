
let tamanhoFonte = 100;

function aumentarFonte() {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + '%';
}

function diminuirFonte() {
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + '%';
}

function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}
