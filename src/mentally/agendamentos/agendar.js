const form = document.querySelector('form');
const agendamentos = document.querySelector('#agendamento');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = document.querySelector('#data').value;
    const hora = document.querySelector('#hora').value;
    const select = document.getElementById('name');
    const nome = select.options[select.selectedIndex].value;
    const idUser = JSON.parse(localStorage.getItem('userLogado'));

    
    let counter = 0;
    function generateUniqueNumber() {
        const timestamp = Date.now(); // Obtém o timestamp atual em milissegundos
        const uniqueNumber = timestamp + counter;
        counter++;
        return uniqueNumber;
    }
    
    const idAgendamento = generateUniqueNumber();

    if (data == '') {
        alert('É necessario informar uma data');
    } else if (hora == '') {
        alert('É necessario informar uma hora');
    } else if (nome == '') {
        alert('É necessario informar um profissional');
    } else {
        const agendamentoArray = JSON.parse(localStorage.getItem('agendamentoArray') || '[]');
        const status = 0;

        const agendamento = {data, hora, nome, status, idUsuarioAgendamento: idUser.idUser, idAgendamento };
        console.log(agendamentoArray)
        // Aqui você pode enviar o agendamento para o servidor
        localStorage.setItem("data", agendamento.data);
        localStorage.setItem("hora", agendamento.hora);
        localStorage.setItem("nome", agendamento.nome);
        localStorage.setItem("status", agendamento.status);
        localStorage.setItem("idUsuarioAgendamento", agendamento.idUsuarioAgendamento);
        localStorage.setItem("idAgendamento", agendamento.idAgendamento);


        console.log(agendamento.idUsuarioAgendamento)
        console.log(idUser.idUser)
        agendamentoArray.push(agendamento)
        localStorage.setItem("agendamentoArray", JSON.stringify(agendamentoArray));
        window.location.href = "agendamento.html";
    }
});

