import db from '../db'

export default function findById(id) {
  return db.one(`
    SELECT *
    FROM
      users
    WHERE users.id =$1
  `, [id])
}
