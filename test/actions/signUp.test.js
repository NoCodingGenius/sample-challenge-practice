import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return signUp({
      full_name: "JahriB",
      email: "jahb@test.com",
      password: "12345"
    })
    .then((user) => {
      expect(user.full_name).to.equal('JahriB')
    })
  })
})
