import express from 'express'

import { signUp, signIn } from '../actions'

const router = express.Router()

router.get('/sign-up', (request, response) => {
  response.render('authentication/sign-up')
})

router.post('/sign-up', (request, response, next) => {
  signUp(request.body)
  .then((user) => {
    if (user) {
      return response.redirect('/')
    }
  })
  .catch(next)
})

router.get('/sign-in', (request, response, next) => {
  response.render('authentication/sign-in')
})

router.post('/sign-in', (request, response, next) => {
  const { email, password } = request.body
  signIn(email, password)
  .then((validUser) => {
    return response.redirect('/')
  })
  .catch(next)
})

export default router
