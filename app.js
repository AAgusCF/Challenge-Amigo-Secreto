// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosArray = [];
let amigosLength = 0;
let indiceAleatorio;

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    if (!nombre){
        alert('Por favor, inserte un nombre válido.');
        
    }else{
        actualizarArrayAmigos(nombre);     
        limpiarCampoEntrada(1);
    }

}

function actualizarArrayAmigos(nombre){
    amigosArray.push(nombre);
    imprimirListaAmigos();
}

function imprimirListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    let elemento;

    for (let i=0; i < amigosArray.length; i++){
        elemento = document.createElement('li');
        elemento.textContent = amigosArray[i];
        listaAmigos.appendChild(elemento);
    }
    //console.log(amigosArray);
    
}

function limpiarCampoEntrada(seccionALimpiar){
    if (seccionALimpiar===1){
        document.getElementById('amigo').value = '';
    }else if(seccionALimpiar===2){
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';
    }
    
}

function generarIndiceAleatorio(){
    indiceAleatorio = Math.floor(Math.random()*amigosLength);
}

function sortearAmigo(){
    if (amigosArray.length>0){

        limpiarCampoEntrada(2);

        amigosLength = amigosArray.length;
        generarIndiceAleatorio();

        let nombreSorteado = amigosArray[indiceAleatorio];

        let sorteado = document.getElementById('resultado');

        let elemento = document.createElement('li');
        elemento.textContent = `El amigo secreto sorteado es: ${nombreSorteado}`;

        sorteado.appendChild(elemento);

    }
}