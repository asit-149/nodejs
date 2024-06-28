const express = require('express')
const router = express.Router()
const productContoller = require('../controller/product')

router
.get('/', productContoller.getAllProducts)
.get('/:id', productContoller.getProducts)
.post('/', productContoller.createProducts)
.put('/:id', productContoller.replaceProduct)
.patch('/:id', productContoller.updateProduct)
.delete('/:id', productContoller.deleteProduct)

exports.router = router