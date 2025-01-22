// function valorSpan() {
//     var number = document.getElementById("numEscolha").value;
//     var span = document.getElementById("spanResultado");

//     let i, x = "";

//     // for(i = 0; i < number; i++) {
//     //     x += i + ", ";   
//     // }

//     while(1) {
//         x = "teste";
//     }

//     // x += i++;

//     span.innerHTML = x;
    
// }

var bxS;
var cont;

function gerarQuadrados() {

    var input = parseInt(document.getElementById("inputEscolha").value);
    var main = document.getElementById("main");

    cont = 0;

    for(let i = 1; i <= input; i++) {
        var quadrados = document.createElement("div");

        quadrados.setAttribute("class", "quadrados");
        quadrados.setAttribute("id", "" + (i));

        quadrados.addEventListener("click", AlterarQuadrado);

        quadrados.innerHTML = i;

        main.appendChild(quadrados);

    }

    bxS = Math.floor(Math.random() * input);
}

function AlterarQuadrado() {

    var span = document.getElementById("spanErro");

    this.style.backgroundColor = "blue";

    var guardaID = this.getAttribute("id");

    if(guardaID == bxS) {
        alert("ACERTOU PAPAI");
    } else {
        cont++;
    }
    
    span.innerHTML = cont;

}