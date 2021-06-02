# ClientSideSolution

Este é o app referente ao cliente, ele só funciona corretamente consumindo informações do servidor.

`Desta forma, recomendo que a análise seja iniciada por https://github.com/vittav/chef-cookbook-api`

## Preparation

- Este projeto foi realizado utilizando a versão 12 de Angular. Caso possua outra versão é possível atualizar com o comando:

 `npm install -g @angular/cli`

- Com isto feito é possível realizar o comando `yarn install` para instalar os pacotes utilizados;

- Também se faz necessário executar o comando `npm install` para garantir o funcionamento e versionamento das dependências;

- Feito isso, podemos iniciar o servidor com o comando `ng serve` o servidor por padrão procura a porta 4200 de seu computador, mas recomendo verificar qual o host indicado após a execução do comando, pois a porta pode já estar sendo usada no momento da inicialização do servidor.

- Caso ocorra algum problema de compatibilidade durante a inicialização do servidor, siga este procedimento:

- Remova o registro de dependências atual com `rm -rf package-lock.json node_modules`

- Execute novamente o comando `npm install`
 
- Tente iniciar o servidor novamente com `ng serve`

## Execução

- Ao acessar, você deve ser direcionado para a página de login. O login é realizado com um POST request para o servidor, que responderá se o login foi ou não bem sucedido. Caso positivo, seus dados são salvos no local storage do chrome e você vai à página dos últimos pedidos.

- Na página dos últimos pedidos você pode ver a recita ou realizar um logout, o que te redireciona para a página de login;

- Ao clicar em "Ver Receita" você é direcionado para a página de detalhes do produto. Lá você só poderá confirmar que finalizou quando todos os ingredientes forem adicionados e os passos realizados.

## Em termos de funcionalidade o app funciona também no modelo MVC (Model, View, Components):

- O app.module carrega as principais bibliotecas

- O app-routing.module faz o roteamento para as páginas do app e direciona as informações pros componentes;

- Cada componente tem sua view associada que é pra onde ele envia as informações
