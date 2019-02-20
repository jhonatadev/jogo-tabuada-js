function verificar() {
    var campo1 = document.getElementById("campo1").innerHTML; 
    var campo2 = document.getElementById("campo2").innerHTML; 
    var resultado = document.getElementById("resultado").value;

    var multiplicacao = campo1 * campo2;
    if (multiplicacao == resultado) { 
        alert("Parabéns, você é bom de tabuada !!!"); 
    } else {
        alert("desculpa, você precisa estudar mais...");
    } 
    
    resetar();
}

function resetar() {
    document.getElementById("resultado").value = "";
    var ale1 = Math.floor(Math.random() * 10);
    var ale2 = Math.floor(Math.random() * 10);
    document.getElementById("campo1").innerHTML = ale1; document.getElementById("campo2").innerHTML = ale2;
}
