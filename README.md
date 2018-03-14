# ConcertFinder (Server)
> A team project to build a concert finding website. Users can sign up and login to find concerts.
> This is the backend server.

The ConcertFinder server uses JavaScript with Express and a PostgreSQL database (via Knex.JS) to store and process data requests. Auth uses bcryptjs and jsonwebtoken.

* Stores and serves users.

## Installation and Setup

Start by forking and cloning this repo.
Then install all dependencies

```shell
cd concertFinder
npm install
```

Create the development database:

```shell
createdb concert_finder
```

and run migrations and seeds:

```shell
npm run knex migrate:latest
npm run knex seed:run
```

Finally, start the server and check that you can GET the `/users` endpoint

```shell
npm run dev
```


### User Stories
>Need to do

### Entity Relationship Diagram
>Need to do
