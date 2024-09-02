import express from 'express'
import { addUser, getUsers } from '../controllers/userControllers'
import { loggedIn } from '../middlewares/authMiddleware'
const router = express.Router()

router.route('/user')
.get(loggedIn,getUsers)
.post( addUser)
.put()
.delete()

export default router