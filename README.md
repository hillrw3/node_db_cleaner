ES6 knex-based database cleaner for postgres

db-cleaner.js does the heavy lifting

Express/knex base app from https://github.com/Vincit/objection.js/tree/master/examples/express-es6

# Install and run

```sh
git clone git@github.com:Vincit/objection.js.git objection
cd objection/examples/express-es6
npm install
# We use knex for migrations in this example.
npm install knex -g
knex migrate:latest
npm start
```

`example-requests.sh` file contains a bunch of `curl` commands for you to start playing with the REST API:

```sh
cat example-requests.sh
```
