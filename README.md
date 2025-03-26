# DSCommerce-Frontend-Aulas
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/AYRESRIO/dscommerce-frontend-aulas/blob/main/LICENSE) 

# Sobre o projeto

https://ayresdscommerce.netlify.app

DSCommerce-Frontend-Aulas é uma aplicação full stack web e mobile construída durante o curso **ReactJS Professional**(Certificado: https://github.com/AYRESRIO/dscommerce-frontend-aulas/tree/main/src/assets/Certificates), na escola  **DEVSUPERIOR** (site da DEVSUPERIOR: https://devsuperior.club).


A aplicação consiste em um sistema de comércio, onde haverá a área do cliente e a área administrativa. Na área do cliente, o usuário acessa o site e, através da página de catálogo
filtra o produto desejado, indo para a página de detalhes do produto. Nesta página, clicando em comprar, vai para a página de carrinho. Ao finalizar a compra ele vai para a página de login, onde digitando email e senha poderá efetivar o seu pedido.
Na área administrativa haverá a página de cadastro, onde o usuário logado poderá: cadastrar, deletar, editar e pesquisar um ou mais produtos. Clicando na tecla novo ou no botão de editar, o usuário acessa um formulário onde, preenche e salva de um ou mais produtos, seja ele novo ou alteração do que já existe.

## Layout mobile
![Mobile 1](https://github.com/AYRESRIO/dscommerce-frontend-aulas/blob/main/src/assets/LayoutMobile/Cart.png) ![Mobile 2](https://github.com/AYRESRIO/dscommerce-frontend-aulas/blob/main/src/assets/LayoutMobile/Confirmation.png) ![Mobile 3](https://github.com/AYRESRIO/dscommerce-frontend-aulas/blob/main/src/assets/LayoutMobile/Product%20Listing.png)

## Layout web
![Web 1](https://github.com/AYRESRIO/dscommerce-frontend-aulas/blob/main/src/assets/LayoutWeb/Catalog.png).

![Web 2](https://github.com/AYRESRIO/dscommerce-frontend-aulas/blob/main/src/assets/LayoutWeb/ProductCompletListing.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/AYRESRIO/dscommerce-frontend-aulas/blob/main/src/assets/ModeloConceitual/Fluxo.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
## Implantação em produção
- Back end: SpringToolSuite4
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/AYRESRIO/dscommerce-frontend-aulas

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/AYRESRIO/dscommerce-frontend-aulas

# entrar na pasta do projeto front end web
dscommerce-frontend-aulas

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Marcio D. Ayres

https://www.linkedin.com/in/marcio-ayres-03258a48
