import db from '../db'

import bcrypt from 'bcrypt'

const encryptedPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds)
}

const create = (user) => {
  return db.query(`
    INSERT INTO
      users (full_name, email, encrypted_password)
    VALUES
      ($1::text, $2::text, $3::text)
    RETURNING
      *
    `, [user.full_name, user.email, user.encrypted_password])
  }

export default function signUp(user) {
  return encryptedPassword(user.password)
  .then((hash) => {
    user.encrypted_password = hash
      return create(user)
  })
  .catch((error) => {
    console.log("Error occured while executing signUp")
  })
}
