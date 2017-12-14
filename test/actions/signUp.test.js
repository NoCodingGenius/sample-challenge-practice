import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions'
import db from '../../src/db'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return signUp({
      full_name: "JahriB",
      email: "jahb33dbbbsdfsdd3@test.com",
      password: "12345"
    })
    .then((user) => {
      expect(user.full_name).to.equal('19')
    })
  })
})
