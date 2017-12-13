import express from 'express'

import { signUp } from '../actions'

const router = express.Router()

router.get('/sign-up', (request, response) => {
  response.render('authentication/sign-up')
})

router.post('/sign-up', (request, response, next) => {
  signUp(request.body)
  .then((user) => {
    console.log("user...", user);
    if (user) {
      return response.redirect('/')
    }
  })
  .catch(next)
})

export default router
