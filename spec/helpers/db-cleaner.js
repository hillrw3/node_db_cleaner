const Knex = require('knex');
const knexConfig = require('./../../knexfile');
const knex = Knex(knexConfig.development);


beforeEach((done) => {
    clearDB(() => {
        createPerson({firstName: 'some', lastName: 'admin'})
            .then(() => {
                done()
            })
    })

});

afterEach((done) => {
    clearDB(done)
})

function clearDB(callback) {
    getTables().then((tables) => {
            truncateTables(tables, callback);
        }
    )
}

function getTables() {
    return knex.schema.raw("select * from information_schema.tables where table_schema = 'public';");
}

function truncateTables(tables, callback) {
    const tableNames = getTableNames(tables)
    let i = 1;
    for (const tableName of tableNames) {
        knex.schema.raw(`TRUNCATE \"${tableName}\" CASCADE`)
            .then(() => {
                if (i === tableNames.length) {
                    if (callback) {
                        callback()
                    }
                }
                i++
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

function getTableNames(queryResponse) {
    let tableNames = [];
    for (const table of queryResponse.rows) {
        tableNames.push(table.table_name);
    }
    return tableNames;
}



// Just to demonstrate using callback in clearDB
function createPerson(options = {}) {
    const defaultParams = {
        firstName: 'bob',
        lastName: 'jones',
        age: Math.floor((Math.random() * 100))
    };
    return knex('Person')
        .insert(Object.assign(defaultParams, options))
        .then((person) => {
            return person
        })

}