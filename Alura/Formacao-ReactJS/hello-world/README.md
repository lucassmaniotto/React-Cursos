# Hello World!

Portifólio implementado com [Create React App](https://github.com/facebook/create-react-app) no curso de [React Router](https://www.alura.com.br/curso-online-React-desenvolvendo-react-router-javaScript) da Alura.

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Hello World!**
| :label: Tecnologias | javascript, html, css, module css, npm, react, jsx
| :rocket: URL         | https://hello-world-lucassmaniotto.vercel.app/
| 🖥 Curso    | https://www.alura.com.br/curso-online-React-desenvolvendo-react-router-javaScript

![Banner](https://user-images.githubusercontent.com/101435037/212458417-c9a682a5-3211-489b-a9d4-8f433fff03ad.png#vitrinedev)

## Detalhes do projeto

Este projeto é uma Single Page Application (SPA) desenvolvido em ReactJS utilizando React Router durante o curso React: desenvolvendo em React Router com JavaScript da Alura.

### ⚙️ Configurando o projeto
Para que o projeto funcione corretamente, é necessário instalar as dependências do projeto. Para isso, basta executar o comando abaixo no terminal:

```bash
npm install
```

### ▶️ Executando o projeto
No diretório do projeto, você pode executar:
```bash
npm start
```
Com o comando acima, você irá rodar o projeto em modo de desenvolvimento que pode ser acessado em [http://localhost:3000](http://localhost:3000) no seu navegador.

### 📚 Bibliotecas
* [react-router-dom](https://reactrouter.com/en/main)
* [react-markdown]()

### 💡 Funcionalidades

#### Rotas
Visto que o projeto é uma SPA, o mesmo funciona como uma página só, através de rotas gerenciadas pelo React Router:

![image](https://user-images.githubusercontent.com/101435037/212456617-7a4a15e6-9650-418c-8cc6-3e3fd2a99b15.png)

As rotas consistem em duas abas, uma de Home Page que possui meus projetos principais desenvolvidos e disponibilizados no [Github](https://github.com/lucassmaniotto), e uma página Sobre Mim que conta um pouquinho da minha história com programação, além de coisas que eu gosto bastante.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/101435037/212456753-e2013e6d-89ce-4c52-a105-71e0d5bbfa4f.gif)

#### Renderização de artigos

Para cada página de artigo, o conteúdo é renderizado em uma rota dinâmica *projects/:id* com o conteúdo de json de cada projeto no qual ocorre iterações sobre o mesmo e transformado em Markdown com o React Markdown:

![image](https://user-images.githubusercontent.com/101435037/212456886-15e3f74f-e496-4c3f-8693-8f835f53a255.png)

![image](https://user-images.githubusercontent.com/101435037/212456929-bcd24b26-5ccb-4650-9d70-5ceabd984e5c.png)

![image](https://user-images.githubusercontent.com/101435037/212457579-7b6d2503-557b-4aad-9c61-d673723b5796.png)

#### Tratamento de Rotas

Caso aconteça algum direcionamento de rota de erro, uma página 404 é renderizada com um cachorro salsicha informando possíveis causas e um botão de voltar a página anterior, seja ela Home, Sobre Mim ou de algum Projeto.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/101435037/212457678-36a7f64c-ff5f-4c2e-934f-9dbd5ded9db9.gif)

#### Card de sugestões

Ao final de cada artigo de Projeto, a página disponibiliza uma rota diferente para um próximo projeto, através de métodos do JavaScript de filter, sort e slice:

![image](https://user-images.githubusercontent.com/101435037/212457766-0261e42b-ea59-4570-8190-84ea88c311ad.png)

