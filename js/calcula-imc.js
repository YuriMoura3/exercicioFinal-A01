var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var nomeTd = paciente.querySelector(".info-nome");
    var nome = nomeTd.textContent;

    var pesoTd = paciente.querySelector(".info-peso");
    var peso = pesoTd.textContent;

    var alturaTd = paciente.querySelector(".info-altura");
    var altura = alturaTd.textContent;

    var gorduraTd = paciente.querySelector(".info-gordura");
    var gordura = gorduraTd.textContent;

    var imcTd = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        imcTd.textContent = " Peso inválido ";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura inválido !");
        imcTd.textContent = " Altura inválido ";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        imcTd.textContent = calculaImc(peso, altura);
    }

}


function calculaImc(peso, altura){
    var imc = 0; 
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 350){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    }else{
        return false;
    }
}


