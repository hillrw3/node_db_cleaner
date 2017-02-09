const Knex = require('knex');
const Promise = require('bluebird');
const knexConfig = require('./knexfile');

// Initialize knex.
const knex = Knex(knexConfig.development);

let i = 0
while (i <= 10) {
    i++
    console.log('hello')
    knex('Person')
        .insert({
            firstName: 'bob',
            lastName: 'jones',
            age: 200
        }).then((person) => {
        console.log(i)
        if(i > 10) {
            process.exit(0)

        }
    })
}

