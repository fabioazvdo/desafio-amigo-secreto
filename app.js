let listaDeAmigosSecretos = []

function adicionarAmigo(){
    let digitarNomesAmigos = document.querySelector('input').value;
    let naoAddNumeros = /^[A-Za-z\s]+$/; // Permitir letras e espaços
    if (digitarNomesAmigos == '' || digitarNomesAmigos == 'Digite um nome'){
        alert ('Digite um nome válido');
        limparCampo();
    }
    else if (!naoAddNumeros.test(digitarNomesAmigos)){
        alert ('O campo não pode conter números');
        limparCampo();
    }
    else {
        listaDeAmigosSecretos.push(digitarNomesAmigos);
        limparCampo();
        mostrarNaTela('listaAmigos', listaDeAmigosSecretos.join('<br>'));
        return listaDeAmigosSecretos;
    }
}

function limparCampo(){
    let digitarNomesAmigos = document.querySelector('input');
    digitarNomesAmigos.value = '';
}

function mostrarNaTela(texto1, texto2){
    let aparecerNaTela = document.getElementById(texto1);
    aparecerNaTela.innerHTML = texto2;
}

function sortearAmigo(){
    if(listaDeAmigosSecretos.length == 0){
        alert('A lista de amigos está vazia.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigosSecretos.length);
    let amigoSorteado = listaDeAmigosSecretos[indiceSorteado];
    listaDeAmigosSecretos.splice(indiceSorteado, 1);
    mostrarNaTela('resultado', 'O amigo sorteado foi: ' + amigoSorteado);
    mostrarNaTela('listaAmigos', listaDeAmigosSecretos.join('<br>'));

    
}

