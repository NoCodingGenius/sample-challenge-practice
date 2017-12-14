import db from '../db'

export function findById(id) {
  return db.one(`
    SELECT *
    FROM
      users
    WHERE users.id =$1
  `, [id])
}

export function updateUser(full_name, email, id) {
  return db.one(`
    UPDATE
      users
    SET
      full_name = $1
      email = $2
    WHERE users.id = $3
  `, [full_name, email, id])
}
