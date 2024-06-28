const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.user;

exports.getProducts = (req, res) => {
    const id = +req.params.id;
    const product = users.find((p)=>p.id === id)
    res.json(product);
  }
  
  exports.getAllProducts = (req, res) => {
    res.json(users);
  }
  
  exports.createProducts = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.json(req.body);
  }

   exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.find((p)=>p.id === id)
    users.splice(productIndex,1,{...req.body,id:id})
  
    res.json({ product: 'updated' });
  }
  
  exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex((p)=>p.id === id)
    const product = users[productIndex]
    console.log(product)
    users.splice(productIndex,1,{...product,...req.body})
  
    res.json({ product: 'updated' });
  }
  
  exports.deleteProduct = ( req, res) => {
    const id = +req.params.id;
    const productIndex = users.findIndex((p)=>p.id === id)
    const product = users[productIndex]
    users.splice(productIndex,1)
  
    res.status(201).json(product)
  }