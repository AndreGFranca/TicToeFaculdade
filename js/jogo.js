var vezAtual = 'O';
var jogoAcabou = false;
var JogadorX = 0;
var JogadorO = 0;

function inicializaJogo(){
    let blocos = tabuleiro.querySelectorAll('td');
    blocos.forEach(element => {
        console.log(element)
        element.onclick = ()=>{
            try{
                let ganhador = '';
                if(element.innerHTML == '' && jogoAcabou == false){
                    element.innerHTML = vezAtual                                    
                    ganhador += verificaHorizontal(blocos, vezAtual) || '';
                    console.log(ganhador)
                    ganhador += verificaVertical(blocos, vezAtual) || '';
                    console.log(ganhador)
                    ganhador += verificaDiagonal(blocos, vezAtual) || '';
                    console.log(ganhador)
                    verificaGanhador(ganhador);
                    vezAtual = vezAtual == 'X'? 'O': 'X';    
                }
            }catch(ex){
                while(true){
                    alert('Não quebre o código pf =)')
                }
            }           
        }
    });
}



function verificaGanhador(ganhador){
    if(ganhador != '' && ganhador != null){
        alert(ganhador);
        let placar = tabuleiro.querySelectorAll('th');
        if(vezAtual == 'X'){
            JogadorX += 1;
            placar[2].innerHTML = 'Jogador X: '+JogadorX
        }else{
            JogadorO += 1;
            placar[0].innerHTML = 'Jogador O: '+JogadorO
        }
        jogoAcabou = true;
    }
}

function verificaHorizontal(array, jogadorAtual){
    //horizontal
    //012
    //345
    //678
    if(array[0].innerHTML == jogadorAtual && array[1].innerHTML == jogadorAtual && array[2].innerHTML == jogadorAtual){
        return 'Jogador "'+jogadorAtual+'" Ganhou!!'
    }
    if(array[3].innerHTML == jogadorAtual && array[4].innerHTML == jogadorAtual && array[5].innerHTML == jogadorAtual){
        return 'Jogador "'+jogadorAtual+'" Ganhou!!'
    }
    if(array[6].innerHTML == jogadorAtual && array[7].innerHTML == jogadorAtual && array[8].innerHTML == jogadorAtual){
        return 'Jogador "'+jogadorAtual+'" Ganhou!!'
    }

}
function verificaVertical(array, jogadorAtual){
    //vertical    
    //036
    //147
    //258
    if(array[0].innerHTML == jogadorAtual && array[3].innerHTML == jogadorAtual && array[6].innerHTML == jogadorAtual){
        return 'Jogador "'+jogadorAtual+'" Ganhou!!'
    }
    if(array[1].innerHTML == jogadorAtual && array[4].innerHTML == jogadorAtual && array[7].innerHTML == jogadorAtual){
        return 'Jogador "'+jogadorAtual+'" Ganhou!!'
    }
    if(array[2].innerHTML == jogadorAtual && array[5].innerHTML == jogadorAtual && array[8].innerHTML == jogadorAtual){
        return 'Jogador "'+jogadorAtual+'" Ganhou!!'
    }
}
function verificaDiagonal(array, jogadorAtual){
    //diagonal
    //048
    //246
    if(array[4].innerHTML == jogadorAtual){
        if(array[0].innerHTML == jogadorAtual && array[8].innerHTML == jogadorAtual){
            return 'Jogador "'+jogadorAtual+'" Ganhou!!'
        }
        if(array[2].innerHTML == jogadorAtual && array[6].innerHTML == jogadorAtual){
            return 'Jogador "'+jogadorAtual+'" Ganhou!!'
        }
    }
}
function resetar(){
    let blocos = tabuleiro.querySelectorAll('td');
    blocos.forEach(element => {
            element.innerHTML = '';
        });        
        jogoAcabou = false;
}
inicializaJogo();