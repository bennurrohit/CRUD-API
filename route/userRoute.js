// const userRouter = require('express').Router()
const express = require('express')
const userRoute = express.Router()

const { readAll, createUser, updateUser , deleteUser , readSingle} = require('../controller/userController')

// read all users -> get request method /api/user/all
userRoute.get(`/all`,readAll)

// read single user -> get request method /api/user/single/123
userRoute.get(`/single/:userId`,readSingle)

// create new user -> post request method /api/user/create
userRoute.post(`/create`,createUser)

// update user -> patch request method /api/user/update/123
userRoute.patch(`/update/:id`,updateUser)

// delete user -> delete request method /api/user/delete/123
userRoute.delete(`/delete/:id`,deleteUser)

module.exports = userRoute

