# Exemplo de Autenticação no Next.js por meio de JWT e Cookies

## Descrição
Este projeto é um exemplo de autenticação em uma aplicação Next.js utilizando JWT e Cookies, baseado no curso [Next.js: autenticação e gerenciamento de Tokens](https://cursos.alura.com.br/course/nextjs-autenticacao-gerenciamento-tokens), onde existe um backend também em Next.js que é responsável por gerar o token JWT e validar o mesmo. Acessando o index da API em next é possível ver o seu Swagger. Na pasta frontend, temos a aplicação que consome a API e realiza a autenticação tanto para Static Site Generation (SSG) quanto para Server Side Rendering (SSR).

## Tecnologias
- Node.js
- Next.js
- React
- **IMPORTANTE:** é necessário possuir o Yarn instalado na máquina
  - `npm install --global yarn`

## Como rodar o projeto
Tanto na pasta backend quanto na pasta frontend, execute os seguintes comandos:

```bash
yarn install
yarn dev
```

## Implementação no Frontend
A aplicação possui na rota `/` logins para as páginas `auth-page-static` e `auth-page-ssr`. Utilizamos por exemplificação o API Route do Next.js localizado em frontend/pages/api/refresh que é responsável por gerar um novo refresh token. **O ideal seria ter um endpoint do backend para tratar o refresh token**.

Na pasta `src` possuimos a implementação de autenticação em `src/auth` e uma implementação hexagonal em `src/infra/HttpClient` para garantir a consistência de requisições HTTP.

