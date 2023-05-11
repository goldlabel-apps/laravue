## Laravue

> __Agile story__ Investigate possible approaches to porting a monolithic Laravel/Vue applications into multiple, more scaleable, more manageable and modern apps 

#### Overview 

The problem lies [here](https://blog.logrocket.com/create-single-page-app-laravel-and-vue/#why-are-laravel-and-vue-good-together)

Not long ago the befefits of using a tightly integrated approach to Laravel/Vue developments included ...

"__The source code is combined into one project, rather than having separate projects for the backend and frontend__"

Although reasonable, that can result in a monolithic app and is no longer desirable  

###### One possible approach

GraphQL could be help. It's easy to teach the existing system to speak GraphQL ising a laravel plugin like **rebing/graphql-laravel**

```bash
// Install library
$ composer require rebing/graphql-laravel
```

If all new features/components development speak to the same GraphQL API by default, then you have a situation where the Laravel LAMP backend starts to sepearate from the frontend micro-app components. At the same time, the Existing backend is does not need to change, so backward compatibility is avaioded

#### Proof of Concept (Movies)

__Note:__ If a POC takes too long to make, then the concept might need another think  

[🤙 Movies](./movies)

#### Local Techstack

- PHP 7+
- Composer 2.0
- Docker 20.10.6 (Any other version is fine)
- Docker-Compose 1.29.1 (Any other version is fine)

#### Developer

```bash
cd <working-dir>
git clone https://github.com/listingslab-software/laravue
cd laravue
npm i
npm start
```

###### Walkthrough

Start by working through this [tutorial](https://www.atatus.com/blog/how-to-use-laravel-to-create-a-graphql-api/) whose goal is to 

> Teach some of the core ideas needed to create a GraphQL API that uses Laravel. We will take a novel way to construct REST APIs in this lesson, which departs from traditional architecture. We'll create a theatre (movie list) API that can do CRUD (Create, Read, Update, Delete) actions on data in your database to help us learn more about GraphQL