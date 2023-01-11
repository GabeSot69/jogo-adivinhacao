let numSorteado = Math.floor(Math.random()*100) + 1;
let numTentativas = 10;

console.log('Numero sorteado: ' + numSorteado);

let campoNumero = document.querySelector('#numDigitado');
campoNumero.addEventListener('keydown',responderEnter);

let botao = document.querySelector('#botaoAdivinhar');
botao.addEventListener('click',adivinharNumero);

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
    }
    else{
        numTentativas--;
        if(numTentativas == 0){
            document.querySelector('#aviso').textContent = 'VOCÊ PERDEU O JOGO :(';
            document.querySelector('#numeroTentativas').style.visibility = 'hidden';
            
        }
        else if(numDigitado > numSorteado){
            document.querySelector('#aviso').textContent = 'NUMERO SORTEADO MENOR!!!';
            document.querySelector('#numeroTentativas').textContent = 'Você tem ' + numTentativas + ' tentativas';
                
        }
        else{
            document.querySelector('#aviso').textContent = 'NUMERO SORTEADO MAIOR!!!';
            document.querySelector('#numeroTentativas').textContent = 'Você tem ' + numTentativas + ' tentativas';
        }
    }    

}