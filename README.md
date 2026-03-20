# --------- GitHub Blog

Um blog construído com React e TypeScript que consome a API do GitHub para listar repositórios como posts e exibe o perfil do usuário, oferecendo uma experiência de leitura integrada e personalizável.

A aplicação busca repositórios (posts) e informações do usuário (`ThiagoTora`) diretamente da API do GitHub.

## --------- Funcionalidades

* **Listagem de Posts:** Exibe uma lista de repositórios do GitHub do usuário configurado, servindo como posts do blog.
* **Detalhes do Post:** Ao clicar em um card, navega para uma página de postagem (`/InfoContent/:id`) que exibe o conteúdo do arquivo `README.md` do repositório, renderizado com Markdown.
* **Informações do Perfil:** Exibe o avatar, nome, login, empresa e número de seguidores do usuário.
* **Contagem de Comentários:** O número de comentários é dinamicamente buscado a partir das Issues do respectivo repositório no GitHub.
* **Pesquisa de Conteúdo:** Permite buscar posts (repositórios) usando a API de busca do GitHub.
* **Experiência de Usuário:** Design responsivo e tema escuro (dark theme) estilizado com `styled-components`.

## --------- Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias principais:

* **Frontend Framework:** React (com Hooks e Context API)
* **Linguagem:** TypeScript
* **Build Tool:** Vite
* **Estilização:** Styled-Components
* **Roteamento:** React Router DOM
* **Markdown:** `react-markdown` e `rehype-raw`
* **Outros:** `date-fns` (para formatação de datas) e Font Awesome (para ícones)

## --------- Instalação e Execução

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão compatível, ex: 20.19.0 ou superior) e o `npm` instalados.

### 1. Clonar Repositório

```bash
    git clone https://github.com/ThiagoTora/GitHub-Blog.git
```

### 2. Acessar pasta

```bash
    cd GitHub-Blog
```

### 3. Instalar Dependências

```bash
    npm install
``` 

### 4. Configuração de Usuário e Token

O projeto está configurado por padrão para usar o usuário **`ThiagoTora`**. Para o projeto funcionar será necessario mudar para o seu próprio perfil, atualizando duas informações:

4.1.  **Nome de Usuário:** Modifique o arquivo `src/Config/Constant.ts` com seu nome de usuário do GitHub.
    ```typescript
    // thiagotora/github-blog/GitHub-Blog-5cd623af0184081d151a9590d82baf7982a318d1/src/Config/Constant.ts
    export const GITHUB_USERNAME = "SEU_USUARIO" // Atualize aqui!
    ```

4.2.  **Token de Acesso:** Crie um arquivo `.env` na raiz do projeto com seu Token de Acesso Pessoal do GitHub (deve ter a permissão `public_repo` se o repositório for privado).

    ```.env
    VITE_GITHUB_TOKEN="SEU_TOKEN_AQUI"
    ```
    
### 5. Executar o Projeto

```bash
npm run dev
```

### --------- Estrutura de Arquivos

A estrutura de pastas e arquivos do projeto é organizada da seguinte forma:

```bash

├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── public/
│   └── vite.svg
├── src/
│   ├── @types/
│   │   └── styled.d.ts
│   ├── assets/
│   │   ├── BlogLogo.svg
│   │   └── HeadBG.svg
│   ├── components/
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── PostHeader/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── Config/
│   │   └── Constant.ts
│   ├── context/
│   │   └── BlogContext.tsx
│   ├── pages/
│   │   ├── Blog/
│   │   │   ├── components/
│   │   │   │   ├── PostCard/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── styles.ts
│   │   │   │   └── SearchForm/
│   │   │   │       ├── index.tsx
│   │   │   │       └── styles.ts
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Post/
│   │       ├── components/
│   │       │   └── PostContent/
│   │       │       ├── index.tsx
│   │       │       └── styles.ts
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── styles/
│   │   ├── global.ts
│   │   └── themes/
│   │       └── default.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── Router.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

