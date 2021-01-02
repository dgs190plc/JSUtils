# Changelog
Log de mudanças feitas no JSUtils.

## Stable 
### 1.0.1

#### Adicionado
* **AJAX**:
	* Suporte ao método POST;
	* Suporte ao envio de parâmetros em requisições do tipo POST e GET
	* Suporte a vários tipos de cabeçalho para a recuperação de parâmetros; o padrão é: ```"application/json;charset=UTF-8"```

#### Corrigido
* **AJAX**:
	* Corrigido problema que deixava qualquer tipo de método ser usado como parâmetro.