module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './example.db'
  //   }
  // },

  development: {
    client: 'postgresql',
    connection: {
      database: 'knex_test'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
