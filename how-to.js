// Inicia a classe JSU
var jsu = new JSU();

// Seleciona um unico objeto
var object = jsu.select('#cont');

// Seleciona vários objetos
var objects = jsu.select('.button', 'all');

// Verifica se um elemento exsite
var cont_exists = jsu.exists('#cont');

// Adiciona event listener
jsu.on("click", "#btn", () => {
	// Adiciona um elemento HTML
	jsu.append('#cont', '<p id="appended">Append</p>');
});

jsu.on('click', '#rm', () => {
	// Remove um elemento HTML
	jsu.remove('#appended');
});

jsu.on('click', '#css', () => {
	// Muda css
	jsu.css({
		// Target
		target: '#cont',

		// CSS
		border: 'solid black 1px',
		pt: '2px',
		pb: '2px',
		pl: '2px',
		pr: '2px',
		color: 'red',
		mt: '10px',
		ml: '10px'
	});
});

jsu.on('click', '#tg', () => {
	// Alterna classe
	jsu.toggleClass('#cont', ['m0', 'm10']);

	// Como alternativa pode-se adicionar classes
	// jsu.addClass('#cont', ['m10'])

	// Ou remover classes
	// jsu.removeClass('#cont', ['m0', 'm10'])
});

// Ajax
jsu.ajax({
	// Parametros
	method: 'GET',
	url: 'https://viacep.com.br/ws/01001000/json/',

	// Funções
	beforeSend: () => {
		alert('Começando requisição ajax');
	},

	error: (status, response) => {
		alert('A solicitação não foi concluida com sucesso, veja o console para mais informações');

		jsu.log('Status do servidor: ' + response);
		jsu.log('Resposta: ' + response);
	},

	success: (resp) => {
		alert('Solicitação bem sucedida, veja o console para mais detalhes.');

		jsu.log(resp);
	}
});

// Grava no console
jsu.log()
jsu.log('Obejto unico: ');
jsu.log(object)
jsu.log('Objetos:');
jsu.log(objects);
jsu.log('Conteudo existe: ' + cont_exists);
