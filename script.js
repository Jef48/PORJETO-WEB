/*
    Esta função recebe o número do card
    que o estudante clicou.
*/
function mostrarResposta(numero) {

    /*
        Localiza a resposta utilizando
        o ID correspondente ao número.
        
        Exemplo:
        numero = 1

        procura:
        resposta1
    */
    const resposta = document.getElementById("resposta" + numero);


    /*
        Verifica se a resposta está escondida.
    */
    if (resposta.style.display === "none" ||
        resposta.style.display === "") {

        /*
            Mostra a resposta.
        */
        resposta.style.display = "block";

    } else {

        /*
            Esconde novamente a resposta.
        */
        resposta.style.display = "none";
    }
}