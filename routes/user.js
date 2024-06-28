const express = require('express')
const router = express.Router()
const userContoller = require('../controller/user')

router
.get('/', userContoller.getAllProducts)
.get('/:id', userContoller.getProducts)
.post('/', userContoller.createProducts)
.put('/:id', userContoller.replaceProduct)
.patch('/:id', userContoller.updateProduct)
.delete('/:id', userContoller.deleteProduct)

exports.router = router