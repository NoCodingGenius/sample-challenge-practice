import db from '../db'

import bcrypt from 'bcrypt'

const findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT *
    FROM
      users
    WHERE users.email = $1
  `, [email])
  .catch((error) => {
      throw new Error('Invalid username or password')
  })
}

export default function signIn(email, password) {
  return findByEmail(email)
  .then((user) => {
    return bcrypt.compare(password, user.encrypted_password)
    .then((validUser) => {
      if (!validUser) {
        throw new Error ('Invlid username or password')
      }
      return validUser
    })
  })
}
