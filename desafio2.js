const nome = window.prompt('Qual o seu nome');
const idade = window.prompt('Quantos anos você tem, ' + nome + '?');
const linguagem = window.prompt('Qual a linguagem de programação você está estudando, ' + nome +'?');

document.getElementById('texto').innerHTML = 'Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + '!';

let escolha = window.prompt('Você gosta de estudar' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÂO');

if ( escolha = 1){
    window.alert('Muito bom! Continue estudando e você terá muito sucesso.') 
} else {
    window.alert('Ahh que pena... Já tentou aprender outras linguagens?')
}



