let botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adcionar");

    let paciente = obtemPacienteDoForm(form);

    let pacienteTr = montaTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemPacienteDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    // cria uma 'tr'
    let pacienteTr = document.createElement("tr");

    // coloca uma classe na 'tr'
    pacienteTr.classList.add("paciente");

    // coloca um filho na 'tr' que é montando uma 'td' 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


