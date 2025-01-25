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
    
    main.innerHTML = "";

    for (let i = 1; i <= input; i++) {
        var quadrados = document.createElement("div");

        quadrados.setAttribute("class", "quadrados");
        quadrados.setAttribute("id", "bx" + i);

        quadrados.addEventListener("click", AlterarQuadrado);

        quadrados.innerHTML = i;

        main.appendChild(quadrados);
    }

    bxS = Math.floor(Math.random() * input) + 1;

    //fiz pra ser de acordo com a quantidade
    if (input > 0 && input <= 10)  {
        setTimeout(function () {
            for (let i = 1; i <= input; i++) {
                var elemento = document.getElementById("bx" + i);
                if (elemento) elemento.remove();
                //esse if nao precisava mas achei legal implementar ele. Ele testa se o elemento existe ai se sim ele o apaga
            }
        }, 3000); //tempo em milesimos
    }
}

function AlterarQuadrado() {

    var span = document.getElementById("spanErro");

    this.style.backgroundColor = "blue";

    var guardaID = this.getAttribute("id");

    if (guardaID == "bx" + bxS) {
        alert("ACERTOU PAPAI");
    } else {
        cont++;
    }

    span.innerHTML = cont;
}