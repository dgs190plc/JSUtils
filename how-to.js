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
	url: "url",
	method: "POST/GET",
	params: {
		param1: "lorem",
		param2: "ipsum"
	},	

	beforeSend: () => {
		// Função executada antes de enviar a requisição
	}

	success: (resp) => {
		// Função executada em caso de sucesso
	},

	error: (status, response) => {
		// Função executada em caso de fracaso
	}

});

// Grava no console
jsu.log()
jsu.log('Obejto unico: ');
jsu.log(object)
jsu.log('Objetos:');
jsu.log(objects);
jsu.log('Conteudo existe: ' + cont_exists);
