const agendamentos = document.querySelector("#lista");

function exibirAgendamento(agendamentosArray) {
    const div = document.createElement('div');
    const logado = JSON.parse(localStorage.getItem("userLogado"));
    const id = logado.idUser; 
    agendamentosArray.forEach((agendamento,key) => {
        console.log(agendamento)
        if(String(id) === String(agendamento.idUsuarioAgendamento) && agendamento.status === 1){
            console.log(agendamento)
            div.innerHTML += `
            <p>Data: ${agendamento.data}</p> 
            <p>Hora: ${agendamento.hora}</p>
            <p>Profissional: ${agendamento.nome}</p>
            <button id="button${key}" class="buttonAvaliar" onclick="setAvaliar(${key})"}>Selecionar</button>
            <p>========</p>
            
            `;            
        }       
    }); 
    
    div.addEventListener('click', function(event) {
        if (event.target.matches('.buttonAvaliar')) {
            const button = event.target;
            const paragraphs = button.parentElement.getElementsByTagName('p');

            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.fontWeight = 'bold';
            }
        }
    });

    
    agendamentos.appendChild(div);    
}
const agendamento = JSON.parse(localStorage.getItem("agendamentoArray"));
function setAvaliar(key){
    localStorage.setItem('keyAgendamento', key)
}

const data = localStorage.getItem("data");
const hora = localStorage.getItem("hora");
const nome = localStorage.getItem("nome");
const status = localStorage.getItem("status");

//const agendamento = { data, hora, nome };

if(String != 0){
    exibirAgendamento(agendamento);
    
}

