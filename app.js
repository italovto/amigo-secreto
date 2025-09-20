let amigoSecreto = [];
let listaNomeSorteados = [];

function adicionarAmigo() {

    let botao = document.getElementById('amigo').value
    if (botao.trim() == "") {
        alert("Por favor, insira um nome.");
    } else {

        console.log(botao);
        amigoSecreto.push(botao);
        console.log(amigoSecreto);
        exibirTextoNaTela(botao);
        document.getElementById('amigo').value = "";
    }

}

function exibirTextoNaTela(texto) {
    let nomes = document.getElementById('listaAmigos');
    nomes.innerHTML += `<li>${texto}</li>`;

}
function sortearAmigo() {
    let numeroSorteado = Math.floor(Math.random() * amigoSecreto.length);
    let amigo = amigoSecreto[numeroSorteado];
    if (amigoSecreto.length == 0) {
        alert("Adicione os nomes dos amigos para sortear!");
        return;
    }

    if (listaNomeSorteados.includes(amigo)) { sortearAmigo(); }

    else {

        document.getElementById('resultado').innerHTML = `O amigo secreto é: ${amigo}`;
        listaNomeSorteados.push(amigo);

        if (listaNomeSorteados.length == amigoSecreto.length) {

            amigoSecreto = [];
            listaNomeSorteados = [];
            document.getElementById('listaAmigos').innerHTML = "";

        }

    }
}
