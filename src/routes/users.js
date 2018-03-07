import express from 'express'

import { findById, updateUser } from '../actions'

const router = express.Router()

router.get('/users/:id', (request, response, next) => {
  const { id } = request.params
  findById(id)
  .then((user) => {
    response.render('users/profile', { user })
  })
  .catch(next)
})

router.get('/users/:id/edit', (request, response, next) => {
  const { id } = request.params
  findById(id)
  .then((user) => {
    response.status(200).render('users/edit-profile', { user })
  })
  .catch(next)
})

router.put('/users/:id', (request, response, next) => {
  const { full_name, email } = request.body
  const id = request.params.id
  console.log("????", request.body, request.params.id);
  updateUser(full_name, email, id)
  .then((updatedUser) => {
    console.log("3333", updatedUser);
    response.send(updatedUser)
  })
  .catch(next)
})

export default router
