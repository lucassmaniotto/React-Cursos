# AudioTag

AudioTag é uma plataforma de compartilhamento de bandas e de seus clipes desenvolvido durante o curso de prática de React.js da Alura que consome dados externo de um mock de API, e utiliza ContextAPI e React Router Dom

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **AudioTag**
| :label: Tecnologias | javascript, html, css, module css, npm, react, jsx
| :rocket: URL         | https://audio-tag.vercel.app/
| 🖥 Curso    | https://cursos.alura.com.br/course/react-praticando-react-js

![logo](https://user-images.githubusercontent.com/101435037/215464885-f5d1fc83-25a0-46a1-8fa6-b274338740fa.png#vitrinedev)

## Detalhes do projeto

Este projeto é uma Single Page Application (SPA) desenvolvido em ReactJS utilizando React Router e ContextAPI para compartilhamento de dados entre as páginas da aplicação.

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
* [react icons](https://react-icons.github.io/react-icons/)

### 💡 Funcionalidades

#### Rotas
Visto que o projeto é uma SPA, o mesmo funciona como uma página só, através de rotas gerenciadas pelo React Router:

![image](https://user-images.githubusercontent.com/101435037/215462254-cdd6fe8f-1eb2-4da9-9df5-1128b2e4f1b4.png)

As rotas consistem em duas abas, uma de Home Page que possui cards de bandas, que são consumidas através de uma [API](https://my-json-server.typicode.com/lucassmaniotto/api-audiotag/videos) usada com Mock pelo do [My-JSON-Server](https://my-json-server.typicode.com/lucassmaniotto/api-audiotag/videos), onde seu repositório pode ser acessado [clicando aqui](https://github.com/lucassmaniotto/api-audiotag).

![image](https://user-images.githubusercontent.com/101435037/215462104-47f030b0-c144-4b14-8dbf-a191a4f72a67.png)

#### Renderização de bandas

Para cada página de artigo, o conteúdo é renderizado em uma rota dinâmica *videos/:id* com o conteúdo de json consumido pela Fake API do My-JSON-Server, possibilitando uma variedade de bandas:

![image](https://user-images.githubusercontent.com/101435037/215463422-4993cd52-2e8b-4657-9471-72b1ee3fbd9b.png)

### Favoritando bandas

Cada card possui um botão de favorito, onde é compartilhado o contexto entre as páginas de Início e Favoritos. Além disso, ao apertar na imagem da banda é possível acessar seus video clipes provindos da Fake API:

![image](https://user-images.githubusercontent.com/101435037/215467835-b112746f-14c0-4782-93ec-d1d50a41ed7b.png)

![ezgif com-gif-maker](https://user-images.githubusercontent.com/101435037/215462995-663de24d-b1b1-4318-a72d-238bf11c16ff.gif)
