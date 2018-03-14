const db = require('../db/knex.js')
const knex = require('../db/knex')
const bcrypt = require('bcrypt')


class User {
  constructor() {}

  static index() {
    return knex('users')
  }

}

module.exports = User
