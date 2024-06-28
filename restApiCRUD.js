const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const morgan = require('morgan');
const server = express();

// // server.use(express.static('public'))

// //middleware
// // server.use((req,res,next)=>{
// //   console.log(req.method,req.ip, req.hostname,new Date(), req.get('User-Agent'))
// //   next()
// // })

// server.get('/',(req,res)=>{
 //   res.json(products)
 // })


 //bodyParser

server.use(express.json());

server.use(morgan('default'))
server.use(express.static('public'));




// REST API
// Read GET/products
server.get('/products',(req, res) => {
  res.json(products);
});
// Read GET/products:id
server.get('/products/:id',(req, res) => {
  const id = +req.params.id;
  const product = products.find((p)=>p.id === id)
  res.json(product);
});

//Create POST /products
server.post('/products', (req, res) => {
  console.log(req.body)
  products.push(req.body)
  res.json(req.body);
});

//Update PUT/products/:id (This basically overwrite the data)
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.find((p)=>p.id === id)
  products.splice(productIndex,1,{...req.body,id:id})

  res.json({ product: 'updated' });
});

//Update PATCH/products/:id 
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p)=>p.id === id)
  const product = products[productIndex]
  console.log(product)
  products.splice(productIndex,1,{...product,...req.body})

  res.json({ product: 'updated' });
});

server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p)=>p.id === id)
  const product = products[productIndex]
  products.splice(productIndex,1)

  res.status(201).json(product)
});

server.listen(8080, () => {
  console.log('server started');
});


