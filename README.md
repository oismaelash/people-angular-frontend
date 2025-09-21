# People Management System - Frontend Angular

Uma aplicação Angular moderna para gerenciamento de pessoas, integrada com a API REST do backend .NET Core.

## 🚀 Funcionalidades

- **Visualização de Pessoas**: Tabela com paginação (10 registros por página)
- **Filtros Avançados**: 
  - Filtro por Nome (destacado)
  - Filtro por CPF
  - Filtro por Gênero
  - Filtro por Estado
- **Atualização de Dados**: Botão de refresh para recarregar dados da API
- **Interface Moderna**: Design responsivo com Angular Material
- **Paginação**: Navegação entre páginas com controle de tamanho

## 🛠️ Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **Angular Material** - Componentes de UI
- **RxJS** - Programação reativa
- **TypeScript** - Linguagem de programação
- **SCSS** - Estilização

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Backend .NET Core rodando em `https://localhost:7000`

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar o Backend
Certifique-se de que o backend .NET Core está rodando em `https://localhost:7000`

### 3. Executar a Aplicação
```bash
npm start
# ou
ng serve
```

A aplicação estará disponível em `http://localhost:4200`

### 4. Build para Produção
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── people-table/          # Componente principal da tabela
│   ├── models/
│   │   └── person.model.ts        # Interfaces TypeScript
│   ├── services/
│   │   └── people.service.ts      # Serviço para comunicação com API
│   ├── app.config.ts              # Configuração da aplicação
│   ├── app.routes.ts              # Configuração de rotas
│   └── app.ts                     # Componente raiz
```

## 🔧 Configuração da API

A URL da API está configurada no serviço `PeopleService`:
```typescript
private apiUrl = 'https://localhost:7000/api/people';
```

Para alterar a URL da API, edite o arquivo `src/app/services/people.service.ts`.

## 📊 Funcionalidades da Tabela

### Paginação
- **Tamanho padrão**: 10 registros por página
- **Opções**: 5, 10, 25, 50 registros por página
- **Navegação**: Botões para primeira/última página

### Filtros
- **Nome**: Campo destacado com destaque visual
- **CPF**: Filtro por CPF
- **Gênero**: Filtro por gênero (Masculino/Feminino)
- **Estado**: Filtro por estado

### Ações
- **Aplicar Filtros**: Aplica os filtros selecionados
- **Limpar Filtros**: Remove todos os filtros
- **Atualizar Dados**: Recarrega os dados da API

## 🎨 Design

A aplicação utiliza Angular Material com:
- **Tema**: Material Design
- **Responsividade**: Adaptável a diferentes tamanhos de tela
- **Acessibilidade**: Componentes acessíveis
- **UX**: Interface intuitiva e moderna

## 🔍 Endpoints da API

A aplicação consome os seguintes endpoints:

- `GET /api/people` - Lista paginada de pessoas
- `GET /api/people/{cpf}` - Busca pessoa por CPF
- `POST /api/people` - Cria nova pessoa
- `PUT /api/people/{cpf}` - Atualiza pessoa
- `DELETE /api/people/{cpf}` - Remove pessoa

## 🐛 Solução de Problemas

### Erro de CORS
Se encontrar erros de CORS, certifique-se de que o backend está configurado para aceitar requisições do frontend.

### Erro de Conexão
Verifique se o backend está rodando em `https://localhost:7000` e se a URL está correta no serviço.

### Problemas de Build
Execute `npm install` para reinstalar as dependências.

## 📝 Licença

Este projeto é para fins educacionais.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request