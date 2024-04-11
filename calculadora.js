function calcularIMC() {
    let altura = document.getElementById("altura").value
    altura = Number(altura)

    let peso = document.getElementById("peso").value
    peso = Number(peso)

    let IMC = peso/altura**2

    return(IMC)
}

function exibirResultado() {
    let userIMC = calcularIMC()
    let mensagem = ''

    if (userIMC <= 18.5) {
        mensagem = 'Abaixo do peso'
    } else if (userIMC < 24.9) {
        mensagem = 'Peso ideal'       
    } else if (userIMC < 29.9) {
        mensagem = 'Sobrepeso'    
    } else if (userIMC < 35) {
        mensagem = 'Faixa de obesidade grau I'       
    } else if (userIMC < 40) {
        mensagem = 'Faixa de obesidade grau II'    
    } else {  
        mensagem = 'Obesidade mórbida'
    }

let resultadoIMC = document.querySelector("#resultado_imc");

resultadoIMC.innerHTML = `<span class="size">${mensagem}</span> <br> <span class="cor">Seu IMC é ${userIMC.toFixed(1)}</span>`
}