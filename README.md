# Hope - Projeto Acadêmico de Testes E2E

> **📚 Projeto de Estudo**: Este é um projeto acadêmico desenvolvido para aprendizado de **testes automatizados end-to-end (E2E)** com Cypress, focado em aplicações com mapas e geolocalização.

**Curso de Referência**: [Testes de Mapas, Geolocalização e Componentes com Cypress](https://www.udemy.com/course/testes-de-mapas-geolocalizacao-e-componentes-com-cypress/)

---

## 🎯 Sobre o Projeto

O Hope é uma aplicação web de exemplo que simula uma plataforma para conectar pessoas a orfanatos através de um mapa interativo. Este projeto foi desenvolvido especificamente para **estudar e praticar testes automatizados** com as seguintes funcionalidades:

- **Mapa Interativo**: Visualização de orfanatos em um mapa usando Leaflet
- **Geolocalização**: Localização automática do usuário para mostrar orfanatos próximos
- **Cadastro de Orfanatos**: Sistema para adicionar novos orfanatos com fotos e informações
- **Detalhes Completos**: Páginas detalhadas com informações sobre cada orfanato
- **Integração com Google Maps**: Links diretos para rotas no Google Maps

## 🏗️ Arquitetura

O projeto é dividido em duas partes principais:

### Frontend (Web)
- **Tecnologia**: React 18 com TypeScript
- **Mapas**: React Leaflet + Leaflet
- **Roteamento**: React Router DOM
- **Estilização**: CSS puro
- **Testes E2E**: Cypress com Allure Reports
- **Validação**: Yup

### Backend (API)
- **Tecnologia**: Node.js + Express + TypeScript
- **Banco de Dados**: MongoDB com Mongoose
- **Upload de Arquivos**: Multer
- **Validação**: Yup
- **CORS**: Habilitado para comunicação com frontend

## 🚀 Tecnologias Utilizadas

### Frontend
- React 18.2.0
- React Router DOM 6.16.0
- React Leaflet 4.2.1
- Leaflet 1.9.4
- Axios 1.5.1
- SweetAlert2 11.7.12
- Yup 1.2.0
- Cypress 13.3.0 (Testes E2E)
- Allure Reports (Relatórios de Teste)

### Backend
- Node.js
- Express 4.17.1
- TypeScript 4.0.3
- MongoDB + Mongoose 7.3.0
- Multer 1.4.2 (Upload de arquivos)
- CORS 2.8.5
- Yup 1.2.0 (Validação)

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [MongoDB](https://www.mongodb.com/) (local ou Atlas)
- [Git](https://git-scm.com/)

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd hope-dev
```

### 2. Configure o Backend (API)

```bash
cd api
npm install
```

Crie um arquivo `.env` na pasta `api` com as seguintes variáveis:

```env
MONGO_URI=SUA-URL
DATABASE_NAME=hope
```

### 3. Configure o Frontend (Web)

```bash
cd ../web
npm install
```

Crie um arquivo `.env` na pasta `web` se necessário:

```env
REACT_APP_API_URL=http://localhost:3333
```

## 🚀 Executando a Aplicação

### Backend (API)
```bash
cd api
npm run dev
```
A API estará disponível em `http://localhost:3333`

### Frontend (Web)
```bash
cd web
npm start
```
A aplicação web estará disponível em `http://localhost:3000`

## 🧪 Testes E2E - Foco Principal do Projeto

> **🎯 Objetivo Acadêmico**: Este projeto tem como foco principal o aprendizado e prática de **testes automatizados end-to-end** com Cypress.

O projeto inclui uma suíte completa de testes E2E que cobre:

- **Testes de Mapas**: Interação com componentes de mapa (Leaflet)
- **Testes de Geolocalização**: Validação de funcionalidades de localização
- **Testes de Componentes**: Validação de componentes React complexos
- **Testes de Integração**: Comunicação entre frontend e backend
- **Relatórios Automatizados**: Geração de relatórios com Allure

### Executar testes no modo interativo
```bash
cd web
npm run cy
```

### Executar testes em modo headless
```bash
cd web
npm run cy:test
```

### Gerar relatório Allure
```bash
cd web
npm run report
```

## 📁 Estrutura do Projeto

```
hope-dev/
├── api/                    # Backend (Node.js + Express + TypeScript)
│   ├── src/
│   │   ├── config/        # Configurações (upload, etc.)
│   │   ├── controllers/   # Controladores da API
│   │   ├── errors/        # Tratamento de erros
│   │   ├── models/        # Modelos do banco de dados
│   │   ├── routes.ts      # Rotas da API
│   │   └── server.ts      # Servidor principal
│   ├── uploads/           # Arquivos enviados
│   └── package.json
├── web/                   # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # Serviços (API calls)
│   │   ├── styles/        # Estilos CSS
│   │   └── utils/         # Utilitários
│   ├── cypress/           # Testes E2E
│   │   ├── e2e/          # Testes
│   │   ├── fixtures/     # Dados de teste
│   │   └── support/      # Comandos customizados
│   └── package.json
└── README.md
```

## 🎨 Funcionalidades

### Mapa de Orfanatos
- Visualização interativa de orfanatos no mapa
- Geolocalização automática do usuário
- Popups com informações básicas dos orfanatos
- Navegação para página de detalhes

### Cadastro de Orfanatos
- Formulário completo para cadastro
- Upload de múltiplas imagens
- Validação de dados
- Integração com geolocalização

### Página de Detalhes
- Informações completas do orfanato
- Galeria de imagens
- Horários de funcionamento
- Link direto para Google Maps

## 🔧 Scripts Disponíveis

### Frontend (web/)
- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa testes unitários
- `npm run cy` - Abre Cypress em modo interativo
- `npm run cy:test` - Executa testes E2E em modo headless
- `npm run report` - Gera relatório Allure

### Backend (api/)
- `npm run dev` - Inicia servidor em modo desenvolvimento
- `npm run typeorm` - Executa comandos TypeORM

## 🌐 API Endpoints

### Orfanatos
- `GET /orphanages` - Lista todos os orfanatos
- `GET /orphanages/:id` - Busca orfanato por ID
- `POST /orphanages` - Cria novo orfanato
- `PUT /orphanages/:id` - Atualiza orfanato
- `DELETE /orphanages/:id` - Remove orfanato

### Upload
- `POST /uploads` - Upload de imagens
- `GET /uploads/:filename` - Serve arquivos estáticos

## 🧪 Cenários de Teste Implementados

O projeto utiliza Cypress para testes end-to-end com os seguintes cenários de teste:

- **Navegação no Mapa**: Testes de interação com marcadores e popups
- **Cadastro de Orfanatos**: Validação de formulários e upload de imagens
- **Visualização de Detalhes**: Navegação entre páginas e exibição de informações
- **Integração com Google Maps**: Validação de links externos e rotas
- **Upload de Imagens**: Testes de funcionalidade de upload de arquivos
- **Geolocalização**: Testes de permissões e localização do usuário

## 📊 Relatórios

Os testes geram relatórios detalhados usando Allure, incluindo:
- Screenshots de falhas
- Logs de execução
- Métricas de performance
- Cobertura de testes

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📚 Contexto Acadêmico

Este projeto foi desenvolvido como parte de um curso de testes automatizados, focando especificamente em:

- **Testes E2E com Cypress**
- **Testes de aplicações com mapas**
- **Testes de geolocalização**
- **Testes de componentes React complexos**
- **Integração com APIs**
- **Geração de relatórios automatizados**

## 👥 Equipe

Projeto desenvolvido para fins acadêmicos e aprendizado de testes automatizados.

---

**Aprendendo testes automatizados com Cypress** 🧪✨
