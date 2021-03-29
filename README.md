<p align="center">
    <a href="#" target="_blank"><img src="https://wac-cdn.atlassian.com/dam/jcr:d301bbc5-1af2-45dc-b39e-cded30e12b8b/DevOps%20infinity%20wheel_CLOUD-PRODUCTS-JSM@2x.png?cdnVersion=1521" height="70" alt="devops logo"/></a>
</p>

## Project Setup & Overview :
Twiiter clone powered by Node.js and React.js .

## Technologies used :

1. typescript - programing language
2. Nodejs - Platform
3. express - framework
4. TypeORM - ORM
5. PostgreSQL - Database
6. Redis -- Cache
7. JWT -- auth
8. Google OAuth -- auth
9. React -- Frontend
10. Redux -- State Management
11. Jest -- Testing
12. Material UI -- UI/UX

## Language and platform setup :
* This is project has been created using `Node.JS`,`typescript`, `redis` and `postgressql` .        
* Make sure have the latest versions installed on your system .

## Database setup

```$ sudo -i -u postgres```

1. Enter `psql` as admin .

```$ psql```

2. Create database user and grant all privileges

```SQL
 $create database conduit;

 $create user conduit with encrypted password 'conduit';

 `swith to the newly created db and grant all privileges to the user`

 $grant all privileges on database conduit to conduit;

```

## Installtion of the app

```
* Installation --(server{Node.JS})
$ npm install

* Installation --(Client{React.JS})
$npm run client-install

* Testing
$npm run test

* Running the server
$ npm run server

* Running the client
$npm run client

* Running both client and server
$npm run dev
```