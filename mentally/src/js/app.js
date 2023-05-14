//parte de cadastro do perfil

var db_contatos_inicial = {
    "data": [
        {
            "id": "1",
            "nome": "Andreia Oliveira",
            "email": "aoliveira@gmail.com",
            "telefone": "(11)91234-5678",
            "CPF": "123.456.789-11",
            "dtnasc": "02/03/1988",
            "Genero": "Feminina",
            "Endereco": "Avenida Lins, nº123, avenida paulista",
            "complemento": "Apartamento 502",
            "Cidade": "São paulo",
            "estado": "São paulo",
            "CEP": "12345-698",
        },
        {
            "id": "2",
            "nome": "Pedro Ferreira",
            "email": "",
            "telefone": "",
            "CPF": "",
            "dtnasc": "",
            "Genero": "",
            "Endereco": "",
            "complemento": "",
            "Cidade": "",
            "estado": "",
            "CEP": "",
        },
        {
            "id": "3",
            "nome": "Carlos Souza",
            "email": "",
            "telefone": "",
            "CPF": "",
            "dtnasc": "",
            "Genero": "",
            "Endereco": "",
            "complemento": "",
            "Cidade": "",
            "estado": "",
            "CEP": "",
        },
        {
            "id": "4",
            "nome": "Isabel Castilho",
            "email": "",
            "telefone": "",
            "CPF": "",
            "dtnasc": "",
            "Genero": "",
            "Endereco": "",
            "complemento": "",
            "Cidade": "",
            "estado": "",
            "CEP": "",
        },
       
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
            "id": novoId,
            "nome": contato.nome,
            "email": contato.email,
            "telefone": contato.telefone,
            "CPF": contato.CPF,
            "dtnasc": contato.dtnasc,
            "Genero": contato.Genero,
            "Endereco": contato.Endereco,
            "complemento": contato.complemento,
            "Cidade": contato.Cidade,
            "estado": contato.estado,
            "CEP": contato.CEP
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].CPF = contato.CPF,
    db.data[index].dtnasc = contato.dtnasc,
    db.data[index].Genero = contato.Genero,
    db.data[index].Endereco = contato.Endereco,
    db.data[index].complemento = contato.complemento,
    db.data[index].Cidade = contato.Cidade,
    db.data[index].estado = contato.estado,
    db.data[index].CEP = contato.CEP

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}