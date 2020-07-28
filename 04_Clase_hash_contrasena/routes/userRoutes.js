const express = require('express')
const router = express.Router()
const userController = require ('../controllers/userController')

router.post('/users', userController.create);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUsers);
router.put('/users/:id', userController.updateUsers);
router.delete('/users/:id', userController.deleteUsers);