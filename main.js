document.getElementById("sumarBtn").addEventListener("click", function() {
    var numeroA = parseFloat(document.querySelector(".input1").value);
    var numeroB = parseFloat(document.querySelector(".input2").value);

   
    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

   
    var resultado = numeroA + numeroB;


    document.getElementById("resultado").innerText = resultado;
    document.getElementById("customAlert").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("customAlert").style.display = "none";
});
