let resultado = document.querySelector(".resultado");
let numeros = document.querySelectorAll(".numeros button");
let apagar = document.querySelector(".apagar");
let igual = document.querySelector(".igual");
let operacoes = document.querySelectorAll(".operacao button");

let operacao = '';
let numeroAtual = '';
let numeroAnterior = '';
let resultados = '';

function calcular() {
    numeroAnterior = parseFloat(numeroAnterior);
    numeroAtual = parseFloat(numeroAtual);

    if (operacao === '+') {
        resultados = numeroAnterior + numeroAtual;
    } else if (operacao === '-') {
        resultados = numeroAnterior - numeroAtual;
    } else if (operacao === '×') {
        resultados = numeroAnterior * numeroAtual;
    } else if (operacao === '÷') {
        if (numeroAtual !== 0) {
            resultados = numeroAnterior / numeroAtual;
        } else {
            resultados = 'Erro! Não existe divisão por zero.';
        }
    }

    resultado.textContent = resultados;
    numeroAnterior = resultados.toString();  // Para continuar o cálculo
    numeroAtual = resultados;
    operacao = '';
}

operacoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
        if (numeroAtual !== '') {
            if (numeroAnterior === '') {
                numeroAnterior = numeroAtual;
            } else {
                calcular();
            }
            operacao = botao.textContent;
            resultado.textContent += ' ' + operacao + ' ';
            numeroAtual = '';
        }
    });
});

numeros.forEach(function (botao) {
    botao.addEventListener('click', function () {
        if (botao.classList.contains('apagar')) {
            operacao = '';
            numeroAtual = '';
            numeroAnterior = '';
            resultados = '';
            resultado.textContent = '';
        } else if (botao.classList.contains('ponto')) {
            if (!numeroAtual.includes('.')) {
                numeroAtual += '.';
                resultado.textContent += '.'; 
            }
        } else {
            numeroAtual += botao.textContent;
            resultado.textContent += botao.textContent;  
        }
    });
});


igual.addEventListener('click', function () {
    if (numeroAtual !== '' && numeroAnterior !== '') {
        calcular();
    }
});








