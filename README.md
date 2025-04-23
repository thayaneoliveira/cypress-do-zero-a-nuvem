Projeto amostral para demonstrar a cy.dataTestComando personalizado do Cypress.
Pré-requisitos

É necessário ter Node.js e npm instalados para executar este projeto.

    Eu usei versões v18.15.0E a 9.5.0de Node.js e npm, respectivamente. Sugiro que você use as mesmas ou versões posteriores.

A instalação

Correr npm install( ou npm ipara a versão curta) para instalar as dependências de desenvolvimento.
Os testes

    Nota: Antes de executar os testes, faça uma cópia do cypress.env.example.jsonarquivo como cypress.env.json, que no mundo real, você atualizaria com credenciais válidas.

    O que é cypress.env.jsonO arquivo está incluído em .gitignoree você está seguro que informações confidenciais não serão versionadas.

Correr npm test( ou npm tpara a versão curta) para executar o teste no modo sem cabeça.

Ou, correr npm run cy:openpara abrir o Cypress no modo interativo.
