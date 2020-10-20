// Junção de funções presentes no Jquery
function JSU() {

	/* Utilidades */
	
	// Retorna o mesmo que document.querySelector só que escrito de forma diminuta.
	this.select = (target, all=false) => {
		// Checa se é pra pegar todos os elementos
		if (all == 'all') {
			// Retorna um array com os objetos
			return document.querySelectorAll(target);
		}
		else {
			// Retorna o elemento
			return document.querySelector(target);
		}
	}

	// Verifica se um elemento existe
	this.exists = function (target) {
		// Recupera o elemento
		target = this.select(target);

		// Verifica se ele existe
		if (target == undefined || target.length == 0) {
			// Retorna false caso não exista
			return false;
		}

		else {
			// Retorna true se existir
			return true;
		}
	}

	// Grava no console
	this.log = (toLog) => {
		// Grava oque foi passado no console
		console.log(toLog);
	}

	// Adiciona event listener's a objetos
	this.on = (event, target, act, all=false) => {
		// Verifica se o elemento existe
		if (!this.exists(target)) {
			// Exibe um erro no console
			this.log('on: O seletor ' + target + ' não existe. Por favor informe um seletor valido.');
			
			// Retorna falso
			return false;
		}

		// Pega o elemento
		target = this.select(target, all);

		// Verifica se o event não está vazio
		if (event.length == 0) {
			// Exibe um erro no console
			this.log('on: Não foi informado nenhum evento valido. Por favor informe um');
			
			// Retorna falso
			return false;
		}

		// Cria o event listener
		target.addEventListener(event, act);
	}

	/* HTML */

	// Adiciona um elemento
	this.append = (target, element) => {
		// Verifica se o elemento pai existe
		if (!this.exists(target)) {
			this.log("Append: o seletor " + target + ' não existe. Por favor informe um valido.');
			return false;
		}

		// Pega o seletor
		target = this.select(target);
		
		// Cria o elemento
		target.insertAdjacentHTML('afterend', element);
	}

	// Remove um elemento
	this.remove = (target) => {
		// Verifica se o elemento alvo existe
		if (target.length == 0) {
			this.log("Remove: o seletor " + target + ' não existe. Por favor informe um valido.');
			return false;
		}

		// Pega o seletor
		target = this.select(target);

		// Remove o elemento
		target.remove();
	}

	// Muda css
	this.css = (params={target: 0, color: 0, bgColor: 0, width: 0, height: 0, border: 0, position: 0, top: 0, bottom: 0, left: 0, right: 0, mt:0, ml:0, mr:0, mb: 0, pt: 0, pl: 0, pr: 0, pb: 0, float: 0}) => {
		// Verifica se o target foi passado
		if (params.target == 0) {
			this.log("CSS: o seletor não foi passado. Por favor informe um valido.");
			return false;
		}

		// Verifica se o elemento alvo existe
		if (!this.exists(params.target)) {
			this.log("Remove: o seletor " + target + ' não existe. Por favor informe um valido.');
			return false;
		}

		// Define o alvo
		var target = this.select(params.target);

		// Muda cor
		if (params.color != 0) {
			target.style.color = params.color;
		}

		// Muda bg-color
		if (params.bgColor != 0) {
			target.style.backgroundColor = params.bgColor;
		}

		// Muda width
		if (params.width != 0) {
			target.style.width = params.width;
		}

		// Muda height
		if (params.height != 0) {
			target.style.height = params.height;
		}

		// Muda border
		if (params.border != 0) {
			target.style.border = params.border;
		}

		// Muda position
		if (params.position != 0) {
			target.style.position = params.position;
		}

		// Muda top
		if (params.top != 0) {
			target.style.top = params.top;
		}

		// Muda left
		if (params.left != 0) {
			target.style.left = params.left;
		}

		// Muda right
		if (params.right != 0) {
			target.style.right = params.right;
		}

		// Muda bottom
		if (params.bottom != 0) {
			target.style.bottom = params.bottom;
		}

		// Muda margin top
		if (params.mt != 0) {
			target.style.marginTop = params.mt;
		}

		// Muda margin left
		if (params.ml != 0) {
			target.style.marginLeft = params.ml;
		}

		// Muda margin right
		if (params.mr != 0) {
			target.style.marginRight = params.mr;
		}

		// Muda margin bottom
		if (params.mb != 0) {
			target.style.marginBottom = params.mb;
		}

		// Muda padding top
		if (params.pt != 0) {
			target.style.paddingTop = params.pt;
		}

		// Muda padding left
		if (params.pl != 0) {
			target.style.paddingLeft = params.pl;
		}

		// Muda padding right
		if (params.pr != 0) {
			target.style.paddingRight = params.pr;
		}

		// Muda padding bottom
		if (params.pb != 0) {
			target.style.paddingBottom = params.pb;
		}

		// Muda float
		if (params.float != 0) {
			target.style.float = params.float;
		}
	}

	// Alterna classes
	this.toggleClass = (target, classes) => {
		// Verifica se o elemento alvo existe
		if (!this.exists(target)) {
			this.log("toggleClass: o seletor " + target + ' não existe. Por favor informe um valido.');
			return false;
		}

		// pega o seletor
		target = this.select(target);

		// Verifica se as classes foram passadas
		if (classes[0] == undefined) {
			this.log("toggleClass: nenhuma classe foi passada. Por favor passe pelo menos uma em forma de array.");
			return false;
		}

		// Loop para classes 
		for (var i = 0; i <= classes.length - 1; i++) {
			// Verifica se o navegador é compativel com o browser
			if (target.classList) {
				// Muda a classe
				target.classList.toggle(classes[i]);
			}
			// Executa um método alternativo para IE9
			else {
				// Variaveis
				var targetClasses = target.className.split(" ");
				var e = targetClasses.indexOf(classes[i]);

				if (e >= 0) {
					// Muda a classe
					targetClasses.splice(e, 1);
				}
				else {
					// Muda a classe
					targetClasses.push(classes[i]);
					target.className = targetClasses.join(" ");
				}
			}
		}
	}

	// Adiciona classes
	this.addClass = (target, classes) => {
		// Verifica se o elemento alvo existe
		if (!this.exists(target)) {
			this.log("addClass: o seletor " + target + ' não existe. Por favor informe um valido.');
			return false;
		}

		// Pega o seletor
		target = this.select(target);

		// Verifica se as classes foram passadas
		if (classes[0] == undefined) {
			this.log("addClass: nenhuma classe foi passada. Por favor passe pelo menos uma em forma de array.");
			return false;
		}

		// Loop para classes 
		for (var i = 0; i <= classes.length - 1; i++) {
			// Verifica se o navegador é compativel com o browser
			if (target.classList) {
				// Adiciona a classe
				target.classList.add(classes[i]);
			}
			// Executa um método alternativo para IE9
			else {
				// Variaveis
				var targetClasses = target.className.split(" ");
				var e = targetClasses.indexOf(classes[i]);

				if (e == -1) {
					// Adiciona classes
					target.className += " " + classes[i];
				}
			}
		}
	}

	// Remove classes
	this.removeClass = (target, classes) => {
		// Verifica se o elemento alvo existe
		if (!this.exists(target)) {
			this.log("addCass: o seletor " + target + ' não existe. Por favor informe um valido.');
			return false;
		}

		// Pega o seletor
		target = this.select(target);

		// Verifica se as classes foram passadas
		if (classes[0] == undefined) {
			this.log("addCass: nenhuma classe foi passada. Por favor passe pelo menos uma em forma de array.");
			return false;
		}

		// Loop para classes 
		for (var i = 0; i <= classes.length - 1; i++) {
			// Verifica se o navegador é compativel com o browser
			if (target.classList) {
				// Adiciona a classe
				target.classList.remove(classes[i]);
			}
		}
	}

	this.ajax = (params={beforeSend:null, success:null, error:null, method:'GET', url:null}) => {
		// Variaveis
		var beforeSend = params.beforeSend;
		var success = params.success;
		var error = params.error;
		var method = params.method;
		var url = params.url;

		// Checa se a url foi definida
		if (url == null) {
			this.log('Nenhuma URL foi definida. Por favor defina uma.');
			return false;
		}

		// Checa se a função success foi definida
		if (success == null) {
			this.log('A função success não foi definida. Por favor defina-a.');
			return false
		}
		
		// Checa se há algo para fazer antes de enviar
		if (beforeSend != null) {
			// Executa o beforeSend
			beforeSend();
		}

		// Cria o objeto XMLHttp
		let xhr = new XMLHttpRequest();

		// Abre a requisição
		xhr.open(method, url);

		// Executa a requisição
		xhr.send();

		// Quando concluir a solicitação
		xhr.onreadystatechange = () => {
			// Requisição pronta
			if (xhr.readyState == 4) {
				// Sucesso
				if (xhr.status == 200) {
					// Executa a função success passando a resposta
					success(xhr.responseText);
				}
				// Erro
				else {
					// Checa se a função error foi definida
					if (error != null) {
						// Executa a função error passando o status e a resposta da requisição
						error(xhr.status, chr.responseText);
					}
					// Caso não tenha sido definida uma função de erro, só retorna falso
					else {
						return false
					}
				}
			}
		}
	}
}