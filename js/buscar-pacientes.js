var buscaPaciente = document.querySelector("#busca-pacientes");

buscaPaciente.addEventListener("click", function () {
    console.log("Buscando Pacientes...");
    alert("Buscando Pacientes...");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", " https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");


    xhr.addEventListener("load", function () {


        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            console.log("ok");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            console.log(xhr.responseText);
            erroAjax.classList.add("invisivel");
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log("Erro " + xhr.status);
            erroAjax.classList.remove("invisivel");
            erroAjax.textContent = "Erro ao Buscar os Pacientes: Erro " + xhr.status;

        }

    });

    xhr.send();
});