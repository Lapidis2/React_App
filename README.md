## ATLP E-COMMERCE PROJECT
### Table of content
  - [Project Overview](#project-overview)
  - [Technology used](#technology-used)
- [Using the project](#using-the-project)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contribution](#contribution)
- [Licensing](#licensing)
### Project Overview

In our project we developed an ecommerce application which is a platform where buyers and sellers meet to interact. Each Seller will be able to register, post their products, and fully manage their stock. Buyers will be able to see all the products on the platform, add and remove products to their shopping carts, and buy from any seller where they will be able to pay via the platform.

### Technology used 

* Node.js
* Express
* Postgres Database
* Sequelize ORM

## Using the project

  For those who are interested to use it locally,he/she is required the following:

### Prerequisites

- Node.js
- Packages
- Postgres database
- Git

### Installation

1. Clone the repository from github https://github.com/atlp-rwanda/e-commerce-crafters-bn.git
2. Run `npm install` to install all package dependencies
3. Createing a `.env` file and get the contents of `.env.example` file and edit them.
4. To run migrations into Postgres use the following command:
   `npx sequelize-cli db:migrate`
    `sequelize-cli`: This refers to the Sequelize Command Line Interface (CLI), which provides commands for interacting with Sequelize, including creating migrations, models, seeders, and running migrations.
6. To run seeders into Postgres use the following command:
   `npx sequelize-cli db:seed:all`
7. Run the project using this command `npm start`

## Contribution

To contribute to this project:

1. Clone the repository
2. Create your own branch to avoid direct pushing to main brach without creating pullrequest and get reviewed.

- feature(ft): `git checkout -b ft-name-of-the-feature-bn-TrelloId`
- chore(ch): `git checkout -b ch-name-of-the-chore-bn-TrelloId `
- bug(bd): `git checkout -b bg-name-of-the-bug-bn-TrelloId `


1. Then you can commit any changes you made by: `git commit -m "your commit message"`
2. Push your changes to the branch you created `git push origin your-new-branch-name`
3. create a pull request and wait for review form other collabolators

## Licensing

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for details.

[def]: #atlp-e-commerce-project
[def2]: #atlp-e-commerce-project