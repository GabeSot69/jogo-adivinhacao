let numSorteado = Math.floor(Math.random()*100) + 1;
let numTentativas = 10;
let tentativas = [];

console.log('Numero sorteado: ' + numSorteado);

let campoNumero = document.querySelector('#numDigitado');
campoNumero.addEventListener('keydown',responderEnter);

let botao = document.querySelector('#botaoAdivinhar');
botao.addEventListener('click',adivinharNumero);

function reiniciar(){
    numSorteado = Math.floor(Math.random()*100) + 1;
    numTentativas = 10;
    document.querySelector('#aviso').style.visibility = 'hidden';
    document.querySelector('#numeroTentativas').style.visibility = 'visible';
    document.querySelector('#numeroTentativas').textContent = 'Você tem ' + numTentativas + ' tentativas';
    botao.removeEventListener('click',reiniciar);
    botao.textContent = 'ADIVINHAR';

}

function responderEnter(event){
    if(event.key == 'Enter'){
        botao.click();
    }
}

function adivinharNumero(event){
    let numDigitado = document.querySelector('#numDigitado').value;
    campoNumero.value = '';
    document.querySelector('#aviso').style.visibility = 'visible';
    if(numDigitado == numSorteado){
        document.querySelector('#aviso').textContent = 'ACERTOUU!!!';
        document.querySelector('#numeroTentativas').style.visibility = 'hidden';
        botao.textContent = 'TENTAR DE NOVO';
        botao.addEventListener('click', reiniciar);

    }
    else{
        numTentativas--;
        let quantTentativas = tentativas.push(numDigitado);
        console.log(tentativas);
        if(numTentativas == 0){
            document.querySelector('#aviso').textContent = 'VOCÊ PERDEU O JOGO :(';
            document.querySelector('#numeroTentativas').style.visibility = 'hidden';
            botao.textContent = 'TENTAR DE NOVO';
            botao.addEventListener('click', reiniciar);
            
        }
        else if(numDigitado > numSorteado){
            document.querySelector('#aviso').textContent = 'NUMERO SORTEADO MENOR!!!';
            document.querySelector('#numeroTentativas').textContent = 'Você tem ' + numTentativas + ' tentativas';
            document.querySelector('#tentativas').textContent += tentativas[quantTentativas-1];    
            document.querySelector('#tentativas').textContent += '  ';    

        }   


        else{
            document.querySelector('#aviso').textContent = 'NUMERO SORTEADO MAIOR!!!';
            document.querySelector('#numeroTentativas').textContent = 'Você tem ' + numTentativas + ' tentativas';
            document.querySelector('#tentativas').textContent += tentativas[quantTentativas-1];    
            document.querySelector('#tentativas').textContent += '  ';    

        }
    }    

}