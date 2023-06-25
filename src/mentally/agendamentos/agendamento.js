
const agendamentos = document.querySelector("#lista")
function exibirAgendamento(agendamento) {
  const logado = JSON.parse(localStorage.getItem("userLogado"));
  const id = logado.idUser; 
  const div = document.createElement('div');   
  agendamento.forEach((agendamento) => {    
    console.log(agendamento)  
    if(String(id) === String(agendamento.idUsuarioAgendamento) && agendamento.status === 0){        
      div.innerHTML = `
        <p>Data: ${agendamento.data}</p> 
        <p>Hora: ${agendamento.hora}</p>
        <p>Profissional: ${agendamento.nome}<p>
      `;
    }
  });    
  agendamentos.appendChild(div);
}

const data = localStorage.getItem("data");
const hora = localStorage.getItem("hora");
const nome = localStorage.getItem("nome");
const status = localStorage.getItem("status");
const idUsuarioAgendamento = localStorage.getItem("idUsuarioAgendamento");
const agendamentoArray = localStorage.getItem("agendamentoArray")

const agendamento = { data, hora, nome,idUsuarioAgendamento};

exibirAgendamento(JSON.parse(agendamentoArray));

function concluirConsulta(){
  localStorage.setItem("status",1);
  localStorage.setItem("agendamentoArray", JSON.stringify(
    JSON.parse(agendamentoArray).map((agendamento)=> {
      if(Number(agendamento.idAgendamento) === Number(localStorage.getItem("idAgendamento"))){
        agendamento.status = 1;
      }
      return agendamento;
    })
  ));
  window.location.href = 'historicoConsultas.html';
}

// Quando o botão for clicado
document.getElementById('whatsappBtn').addEventListener('click', function() {
  // Número de telefone do psicólogo (incluindo o código do país, sem "+" ou "-")
  var phoneNumber = '5531999999999';
  
  // Mensagem opcional a ser enviada junto com a conversa
  var message = 'Olá, gostaria de iniciar a minha consulta.';
  
  // Formatação da URL do WhatsApp
  var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
  
  // Redirecionamento para a página do WhatsApp
  window.open(url);
});

function cancelarConsulta(){
  localStorage.setItem("agendamentoArray", JSON.stringify(
    JSON.parse(agendamentoArray).filter((agendamento)=> 
    Number(agendamento.idAgendamento) !== Number(localStorage.getItem("idAgendamento"))
  )));
  window.location.href = 'agendar.html';
  return;
}