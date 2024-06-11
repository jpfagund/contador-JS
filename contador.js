let numeroAtual = document.getElementById("numeroAtual")
let numero = 0

function atualizar(){
    numeroAtual.innerHTML = numero
}

function diminuir(){
    numero--
    atualizar()
}
function resetar(){
    numero = 0
    atualizar()
}
function aumentar(){
    numero++
    atualizar()
}

