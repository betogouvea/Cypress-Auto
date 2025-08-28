Testes Automatizados com Cypress - TypeScript
Este repositório contém testes automatizados utilizando Cypress com TypeScript, configurado para execução local e integração contínua via GitHub Actions.

Estrutura do Projeto
text
Cypress-Auto/
├── .github/
│   └── workflows/
│       └── cypress-tests.yml    # Pipeline de CI/CD
├── cypress/
│   ├── e2e/
│   │   ├── coffee/              # Testes da aplicação Coffee
│   │   └── saucedemo/           # Testes da aplicação SauceDemo
│   ├── support/                 # Comandos customizados e configurações
│   └── videos/                  # Gravações das execuções (gerado automaticamente)
├── scripts/
│   └── select-tests.ts          # Script para seleção inteligente de testes
├── package.json
├── cypress.config.ts
├── tsconfig.json
└── README.md
🚀 Como Executar
Pré-requisitos
Node.js 18 ou superior

npm ou yarn

Instalação
bash
git clone https://github.com/betogouvea/Cypress-Auto.git
cd Cypress-Auto
npm install
Execução dos Testes
bash
# Modo interativo (interface gráfica)
npx cypress open

# Modo headless (terminal)
npx cypress run

# Executar testes específicos
npx cypress run --spec "cypress/e2e/saucedemo/**/*.cy.ts"
npx cypress run --spec "cypress/e2e/coffee/**/*.cy.ts"
 Funcionalidades Avançadas
 Seleção Inteligente de Testes
O sistema identifica automaticamente quais testes executar com base nas alterações do código:

Modificações em cypress/e2e/coffee/ → executa apenas testes Coffee

Modificações em cypress/e2e/saucedemo/ → executa apenas testes SauceDemo

Outras modificações → executa toda a suite de testes

 Integração Contínua (GitHub Actions)
O workflow está configurado para:

Executar testes automaticamente a cada push na branch main

Detectar testes impactados pelas alterações

Gerar artefatos com vídeos das execuções

Notificações de status dos testes

 Tecnologias Utilizadas
Cypress 14.5.4 - Framework de teste E2E

TypeScript - Tipagem estática e melhor desenvolvimento

GitHub Actions - CI/CD automatizado

Node.js - Ambiente de execução

 Estrutura dos Testes
 Testes Coffee
typescript
// Exemplo: cypress/e2e/coffee/shopping.spec.cy.ts
describe('Fluxo de Compra - Coffee', () => {
  it('deve adicionar itens ao carrinho', () => {
    // Implementação dos testes
  });
});
 Testes SauceDemo
typescript
// Exemplo: cypress/e2e/saucedemo/checkout.spec.cy.ts
describe('Processo de Checkout - SauceDemo', () => {
  it('deve completar o checkout com sucesso', () => {
    // Implementação dos testes
  });
});
 Comandos Úteis
bash
# Compilar TypeScript
npx tsc

# Executar script de seleção de testes
node dist/scripts/select-tests.js

# Limpar dependências e reinstalar
rm -rf node_modules package-lock.json
npm install
 Relatórios e Artefatos
Vídeos: Gravados automaticamente em cypress/videos/

Screenshots: Capturados em falhas em cypress/screenshots/

Artifacts: Disponíveis no GitHub Actions após cada execução

 Troubleshooting
Erros Comuns
bash
# Dependências corrompidas
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Problemas de compilação TypeScript
npx tsc --noEmit  # Verificar erros sem compilar
 Contribuição
Faça fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas changes (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request
