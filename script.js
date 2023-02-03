let modeloCheck, golaCheck, tecidoCheck = false;
let referenciaCheck = false;
let url = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';


const seuNome = prompt("Qual seu nome?")


//Ativar input-mensagem quando dugitar algo
const input = document.querySelector('.input-mensagem');
input.addEventListener("keyup", digitarReferencia);


// pedirNome();




//ativar o botão confirma
function ativarBotao() {

    const botaoConfirmado = document.querySelector('.confirma');
    if (modeloCheck && golaCheck && tecidoCheck && referenciaCheck) {

        botaoConfirmado.classList.add('selecionado');
        botaoConfirmado.removeAttribute('disabled');


    } else {
        botaoConfirmado.classList.remove('selecionado')

    }
}

// seleção de itens
//seleção de modelo
function selecionarModelo(modeloSelecionado) {
    const modeloAnterior = document.querySelector('.modelo .selecionado');
    if (modeloAnterior !== null) {
        modeloAnterior.classList.remove('selecionado');
    }

    modeloSelecionado.classList.add('selecionado');
    modeloCheck = true

    ativarBotao()

}
//seleção de gola
function selecionarGola(golaSelecionado) {
    const golaAnterior = document.querySelector('.gola .selecionado');
    if (golaAnterior !== null) {
        golaAnterior.classList.remove('selecionado');
    }

    golaSelecionado.classList.add('selecionado');
    golaCheck = true

    ativarBotao()
}

//seleção de tecido
function selecionarTecido(tecidoSelecionado) {
    const tecidoAnterior = document.querySelector('.tecido .selecionado');
    if (tecidoAnterior !== null) {
        tecidoAnterior.classList.remove('selecionado');
    }

    tecidoSelecionado.classList.add('selecionado');
    tecidoCheck = true

    ativarBotao()
}

//digitar referência

function digitarReferencia() {
    const referenciaAnterior = document.querySelector('.input-mensagem');
    if (referenciaAnterior.value.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        referenciaCheck = true
    } else {
        referenciaCheck = false
    }

    ativarBotao()
}
//tornar botão confirma clicável


//teste clicar





//mandando pedido

function pedidoEnviadoSucesso(resposta) {
    buscarPedidos();
}

function erroEnviarPedido(error) {
    console.log('Erro ao enviar mensagem');
    console.log(error);
    alert('Ocorreu um erro inesperado ao enviar o pedido! Tente novamente mais tarde');
    window.location.reload();
}


function enviarPedido() {
    
    let modeloEscolhido = document.querySelector('.modelo .selecionado').innerHTML.trim().split("/")[1].split(".")[0];
    if(modeloEscolhido === "tshirt"){
        modeloEscolhido = "t-shirt"
    }
    else if(modeloEscolhido === "Camiseta"){
        modeloEscolhido = "top-tank"
    }
    else{
        modeloEscolhido = "long"
    }

    let golaEscolhido = document.querySelector('.gola .selecionado').innerHTML.trim().split("/")[1].split(".")[0];
    if(golaEscolhido === "GolaV"){
        golaEscolhido = "v-neck"
    }
    else if(golaEscolhido === "GolaRedonda"){
        golaEscolhido = "round"
    }
    else{
        golaEscolhido = "polo"
    }


    let tecidoEscolhido = document.querySelector('.tecido .selecionado').innerHTML.trim().split("/")[1].split(".")[0];
    if(tecidoEscolhido === "Algodão"){
        tecidoEscolhido = "cotton"
    }
    else if(tecidoEscolhido === "Poliester"){
        tecidoEscolhido = "polyester"
    }
    else{
        tecidoEscolhido = "silk"
    }

    let referenciaEscolhido = document.querySelector('.input-mensagem')
    



    const objPedido = {
    "model": modeloEscolhido,
	"neck": golaEscolhido,
	"material": tecidoEscolhido,
	"image": referenciaEscolhido.value,
	"owner": seuNome,
	"author": seuNome
    }

console.log(objPedido);
    const promise = axios.post(url, objPedido);
    promise.then(pedidoEnviadoSucesso);
    promise.catch(erroEnviarPedido);

}

function sucessoAoPegarPedido(resposta){
    console.log(resposta);

    let busca = resposta.data
 console.log("busca", busca)

      const pedidoCamiseta = document.querySelector('.pedidos')

        let html = '';

    for(let i=0; i<10; i++){

        // console.log(busca[i]);
        html = `<div class="pedido">
        <img class = "img-camiseta" src="${busca[i].image}">
        <span><b>Criador: ${busca[i].owner}</b></span>
    </div>`

      pedidoCamiseta.innerHTML = pedidoCamiseta.innerHTML + html; 
    }   
}


function erroAoPegarPedido(error){
    console.log('Erro ao buscar os pedidos');
    alert('Ocorreu um erro ao pegar o pedido! Tente novamente mais tarde!');
}

function buscarPedidos(){
        const promise = axios.get(url);
        promise.then(sucessoAoPegarPedido);
        promise.catch(erroAoPegarPedido);
}
        // console.log(promise.data)
    
    


// function renderizarPedido (pedidos){

//     const ultimoPedido = document.querySelector('.pedido');

//     ultimoPedido.innerHTML = '';

// }

