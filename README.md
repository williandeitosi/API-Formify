# Projeto de Gerenciamento de Usuários e Itens

## Descrição
Este projeto é uma aplicação backend desenvolvida com foco em boas práticas de desenvolvimento, utilizando princípios SOLID, TypeScript e padrões modernos de arquitetura de software.

## Tecnologias Principais
- **Linguagem**: TypeScript
- **Framework**: Fastify
- **ORM**: Prisma
- **Validação**: Zod
- **Autenticação**: JWT com Refresh Token

## Princípios e Padrões
- Arquitetura baseada em SOLID
- Padrão Repository
- Tratamento de erros robusto
- Estrutura de pastas modular

## Funcionalidades
- Registro de usuários
- Autenticação com login
- Criação de perfil por usuário
- Gerenciamento de itens pessoais

### Estrutura de Dados
#### Usuário
- Nome
- País
- CPF
- Foto

#### Itens
- Nome
- Preço

## Configuração do Projeto

### Pré-requisitos
- Node.js
- npm
- SQLite

### Instalação

1. Clone o repositório
```bash
git clone https://seu-repositorio.git
cd nome-do-projeto
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente
- Crie um arquivo `.env`
- Adicione as configurações necessárias (banco de dados, JWT secret, etc.)

4. Execute as migrações do Prisma
```bash
npx prisma migrate dev
```

5. Inicie o servidor
```bash
npm run dev
# ou
yarn dev
```

## Segurança
- Autenticação via JWT
- Refresh tokens
- Validação de dados com Zod
- Tratamento de erros personalizado

## Próximos Passos
- [ ] Implementar testes unitários
- [ ] Adicionar documentação da API
- [ ] Configurar CI/CD

## Contribuição
Por favor, leia as diretrizes de contribuição antes de fazer um pull request.

## Licença
[Especifique a licença do seu projeto]