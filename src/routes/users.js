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
  const { id } = req.params
  updateUser(req.body, id)
  .then(() => {
    response.json({REDIRECT_URL: `/users/${id}`})
  })
  .catch(next)
})

export default router
