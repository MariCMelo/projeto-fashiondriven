let modeloCheck, golaCheck, tecidoCheck = false;
let referenciaCheck = false
//const seuNome = prompt("Qual seu nome?")

const input = document.querySelector('.input-mensagem');
input.addEventListener("keyup", digitarReferencia);





// pedirNome();

//ativar o botão confirma
function ativarBotao(){

    const botaoConfirmado = document.querySelector('.confirma');
    if(modeloCheck && golaCheck && tecidoCheck && referenciaCheck){
        
        botaoConfirmado.classList.add('selecionado')
    }else{
        console.log("cc")
        botaoConfirmado.classList.remove('selecionado')
        
    }
}

// seleção de itens
//seleção de modelo
function selecionarModelo (modeloSelecionado){
    const modeloAnterior = document.querySelector('.modelo .selecionado');
    if(modeloAnterior!== null){
        modeloAnterior.classList.remove('selecionado');
    }

    modeloSelecionado.classList.add('selecionado');
    modeloCheck = true

    ativarBotao()

}
//seleção de gola
function selecionarGola (golaSelecionado){
    const golaAnterior = document.querySelector('.gola .selecionado');
    if(golaAnterior!== null){
        golaAnterior.classList.remove('selecionado');
    }

    golaSelecionado.classList.add('selecionado');
    golaCheck = true

    ativarBotao()
}

//seleção de tecido
function selecionarTecido (tecidoSelecionado){
    const tecidoAnterior = document.querySelector('.tecido .selecionado');
    if(tecidoAnterior!== null){
        tecidoAnterior.classList.remove('selecionado');
    }

tecidoSelecionado.classList.add('selecionado');
tecidoCheck = true

ativarBotao()
}

//digitar referência

function digitarReferencia(){
    console.log("olá")
    const referenciaAnterior = document.querySelector('.input-mensagem');
        if(referenciaAnterior.value.match(/\.(jpeg|jpg|gif|png)$/) != null){
            referenciaCheck = true
        }else{
           referenciaCheck = false 
        }

        ativarBotao()
    }
    