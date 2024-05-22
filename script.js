// Objeto para armazenar dados
const dataStore = {
    sre: 'olá mundo'
};

// Função para ler dados do URL
function readDataFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nome = urlParams.get('Nome');

    if (nome && dataStore[nome]) {
        document.getElementById('content').textContent = dataStore[nome];
    } else {
        document.getElementById('content').textContent = 'Dados não encontrados para o nome: ' + nome;
    }
}

// Função para definir dados com proteção por senha
function setDataWithPasswordProtection() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nome = urlParams.get('Nome');
    const pass = urlParams.get('Pass');
    const text = urlParams.get('text');

    // Verificar se existe um arquivo associado ao valor Nome
    if (nome && dataStore[nome]) {
        // Verificar se a senha fornecida corresponde à senha armazenada para esse arquivo
        if (pass && pass === 'minhasenha') {
            // Atualizar o conteúdo do arquivo com a nova extensão Texto
            if (text) {
                dataStore[nome] = text;
                document.getElementById('content').textContent = 'Texto modificado com sucesso, ' + text;
            } else {
                document.getElementById('content').textContent = 'Parâmetro text não fornecido.';
            }
        } else {
            document.getElementById('content').textContent = 'Senha incorreta.';
        }
    } else {
        document.getElementById('content').textContent = 'Arquivo não existe.';
    }
}

// Função para criar um novo arquivo
function createNewFile() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nome = urlParams.get('Nome');
    const pass = urlParams.get('Pass');

    // Verificar se já existe um arquivo associado ao valor Nome
    if (!nome || !pass || !dataStore[nome]) {
        // Criar um novo arquivo com os valores Nome e Senha
        if (!nome || !pass) {