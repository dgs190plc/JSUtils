# JSUtils
Um conjunto de funções presentes no framework JQuery que pesam apenas 3.7KB, contra 85KB do concorrente.

## Getting Started
Tudo que você precisa é de um navegador (caso seja Internet Explorer, superior ao 6.0) e um editor de textos.

## Instalação
**Debian/Ubuntu Linux Distros**
```
git clone https://github.com/eEmmy/JSUtils.git
```

**Windows**
```
Apenas baixe o arquivo .zip do GitHub e descompacte-o.
```

## Funções presentes
As funções atualmente disponiveis são:

+ **select** - Seleciona um elemento ou um conjunto deles (classes, tags). O mesmo que $() do JQuery.
+ **log** - Grava algo no console. O mesmo que console.log, mais usado apenas para diminuir a quantidade de escrita.
+ **exists** - Verifica se um elemento existe, retornando true ou false.
+ **on** - Adiciona qualquer event listener a qualquer elemento. O mesmo que $.on() do JQuery.
+ **append** - Adiciona um elemento HTML após o elemento especificado. O mesmo que $().append() do JQuery.
+ **remove** - Remove um elemento HTML especificado. O mesmo que $().remove() do JQuery.
+ **toggleClass** - Alterna entre uma ou mais classes. O mesmo que $().toggleClass() do JQuery.
+ **addClass** - Adiciona uma ou mais classes a um elemento. O mesmo que $().addClass() do JQuery.
+ **removeClass** - Remoce uma ou mais classes de um elemento. O mesmo que $().removeClass() do JQuery. 
+ **css** - Define propriedades CSS para o elemento especificado. As propriedades relacionadas a background, margin e padding estão respectivamente como bg, mt/mb/ml/mr e pt/pb/pl/pr. Similar ao $().css() do Jquery.
+ **ajax** - Realiza requisições Ajax. Suporta os mesmos métodos e parametros do JQuery, porém é mais rápido. O mesmo que $.ajax() do JQuery.

### Comparação com JQuery
#### Vantagens
+ **Tamanho** - Pesa apenas 3.7KB contra 85KB do JQuery, aumentando a performance do site e diminuindo o consumo de dados para o usuario.
+ **Performance Ajax** - É muito mais rápido que o método $.ajax() do JQuery.
+ **Uso universal** - Por ser feito com Javascript puro e usado com POO, tem compatibilidade universal, podendo ser usado com qualquer plugin e em qualquer projeto, diferentemente do JQuery.
+ **Apenas o necessário** - O JQuery pesa por que tem muitas funções, e pelo menos 90% delas não serão usadas. O JSU vai direto ao ponto, tendo apenas as funçoes que facilitam a escrita do programador e realmente sã usadas.

#### Desvantagens
+ **Menos funções** - Por ser apenas um conjunto de funções mais usadas do JQuery, não tem suporte a animações ou métodos mais complicados.
+ **Multi-seletores** - As funções do JSU, por enquanto, não suportam mais de um seletor alvo.

## Autore
* **Emmy Gomes** - *Resposável por todo o projeto* - [eEmmy](https://github.com/eEmmy/)
