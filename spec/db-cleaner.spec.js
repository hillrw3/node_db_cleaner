const Knex = require('knex');
const knexConfig = require('./../knexfile');
const knex = Knex(knexConfig.development);

describe("database cleaner", () => {
    let x = 0
    while (x < 20) {
        it("clears all this stuff I'm creating", (done) => {
            createPerson().then((person) => {
                createPerson().then((movie) => {
                    createPerson().then((animal) => {
                        expect(person).not.toBeNull();
                        expect(movie).not.toBeNull();
                        expect(animal).not.toBeNull();
                        done()
                    })
                })
            })
        })
        x++
    }
});

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

function createMovie() {
    return knex('Movie')
        .insert({
            name: `El Hobbit ${Math.floor((Math.random() * 100))}`,
        }).then((movie) => {
            return movie
        })

}

function createAnimal() {
    return knex('Animal')
        .insert({
            name: `Waffles the Dog ${Math.floor((Math.random() * 100))}`,
            species: 'pooch'
        }).then((movie) => {
            return movie
        })

}