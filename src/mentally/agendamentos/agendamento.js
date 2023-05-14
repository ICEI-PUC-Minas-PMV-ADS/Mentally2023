
const agendamentos = document.querySelector("#lista")
function exibirAgendamento(agendamento) {
    const div = document.createElement('div');
    div.innerHTML = `
    <p>Data: ${agendamento.data}</p> 
    <p>Hora: ${agendamento.hora}</p>
    <p>Profissional: ${agendamento.nome}<p>`;
    agendamentos.appendChild(div);
}

const data = localStorage.getItem("data");
const hora = localStorage.getItem("hora");
const nome = localStorage.getItem("nome");

const agendamento = { data, hora, nome };
console.log(agendamento)

exibirAgendamento(agendamento);
