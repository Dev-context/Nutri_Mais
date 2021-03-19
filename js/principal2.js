let paciente = document.querySelector(".paciente");
console.log(paciente);

let linhas = document.querySelectorAll(".paciente");


for (let i = 0; i < linhas.length; i++) {
    let peso = obterValorElemento(linhas[i], ".info-peso");
    let nome = obterNomeElemento(linhas[i], ".info-nome");
    let altura = obterValorElemento(linhas[i], ".info-altura");

    let elImc = linhas[i].querySelector(".info-imc");
    elImc.textContent = calcularIMC(peso, altura);

    if (peso < 0 || peso > 150) {
        alert("Peso inválido!! " + nome);
    }

    if (altura < 0.50 || altura > 2.50) {
        alert("Altura inválida!!");
    }
}

function obterValorElemento(linha, classeElemento) {
    let el = linha.querySelector(classeElemento);
    return parseFloat(el.textContent);
}

function obterNomeElemento(linha, classeElemento) {
    let el = linha.querySelector(classeElemento);
    return el.textContent;
}

function calcularIMC(peso, altura) {
    let resultado = peso / (altura * altura);
    return resultado.toFixed(2);
}

// let despesaCategoria = 1532;
// let rendaToral = 6255;

// let percentCategoria = (despesaCategoria * 100) / rendaToral;
// console.log(percentCategoria.toFixed(2));
