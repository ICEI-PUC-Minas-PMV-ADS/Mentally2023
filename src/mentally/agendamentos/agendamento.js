
const agendamentos = document.querySelector("#lista")
function exibirAgendamento(agendamento) { 
  const logado = JSON.parse(localStorage.getItem("userLogado"));
  const id = logado.idUser;    
  if(String(id) === String(agendamento.idUsuarioAgendamento)){
    const div = document.createElement('div');
    div.innerHTML = `
    <p>Data: ${agendamento.data}</p> 
    <p>Hora: ${agendamento.hora}</p>
    <p>Profissional: ${agendamento.nome}<p>`;
    agendamentos.appendChild(div);
  }   
}

const data = localStorage.getItem("data");
const hora = localStorage.getItem("hora");
const nome = localStorage.getItem("nome");
const status = localStorage.getItem("status");
const idUsuarioAgendamento = localStorage.getItem("idUsuarioAgendamento");


const agendamento = { data, hora, nome,idUsuarioAgendamento};

console.log(agendamento)
console.log(JSON.parse(localStorage.getItem("listaUser")))

if (status == 0 ) {
    exibirAgendamento(agendamento);
} 


function concluirConsulta(){
    localStorage.setItem("status",1);
    window.location.href = 'historicoConsultas.html';
}



  // Quando o botão for clicado
  document.getElementById('whatsappBtn').addEventListener('click', function() {
    // Número de telefone do psicólogo (incluindo o código do país, sem "+" ou "-")
    var phoneNumber = '5531999736059';
    
    // Mensagem opcional a ser enviada junto com a conversa
    var message = 'Olá, gostaria de iniciar a minha consulta.';
    
    // Formatação da URL do WhatsApp
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    
    // Redirecionamento para a página do WhatsApp
    window.open(url);
  });

  function cancelarConsulta(){
    localStorage.removeItem("data");
    localStorage.removeItem("nome");
    localStorage.removeItem("idAgendamento");
    localStorage.removeItem("idUsuarioAgendamento");
    localStorage.removeItem("hora");
    window.location.href = 'agendar.html';
    return;
  }