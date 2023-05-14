const form = document.querySelector('form');
const agendamentos = document.querySelector('#agendamento');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = document.querySelector('#data').value;
    const hora = document.querySelector('#hora').value;
    const select = document.getElementById('name');
    const nome = select.options[select.selectedIndex].value;
    const agendamento = { data, hora, nome };

    // Aqui você pode enviar o agendamento para o servidor
    localStorage.setItem("data", agendamento.data);
    localStorage.setItem("hora", agendamento.hora);
    localStorage.setItem("nome", agendamento.nome);
});

