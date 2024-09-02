import express from 'express'
import { addUser, getUsers } from '../controllers/userControllers.js'
// import { loggedIn } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.route('/user')
.get(getUsers)
.post( addUser)
.put()
.delete()

export default router