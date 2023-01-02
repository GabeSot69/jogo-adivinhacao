let numSorteado = Math.floor(Math.random()*100) + 1;
console.log('Numero sorteado: ' + numSorteado);
document.querySelector('#aviso').style.visibility = 'hidden';
let campoNumero = document.querySelector('#numDigitado');
campoNumero.addEventListener('keydown',responderEnter);

function responderEnter(event){
    if(event.key == 'Enter'){
        let numDigitado = document.querySelector('#numDigitado').value;
        document.querySelector('#aviso').style.visibility = 'visible';
        if(numDigitado == numSorteado){
            document.querySelector('#aviso').textContent = 'ACERTOUU!!!';
            
        }
        else if(numDigitado > numSorteado){
            document.querySelector('#aviso').textContent = 'NUMERO SORTEADO MENOR!!!';
        }
        else{
            document.querySelector('#aviso').textContent = 'NUMERO SORTEADO MAIOR!!!';
        }
    }
}