import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return signUp({
      full_name: "Jahri",
      email: "jahriB@test.com",
      password: "12345"
    })
    .then((user) => {
      expect(user[0].id).to.equal(1)
    })
  })
})
