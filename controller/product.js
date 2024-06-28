const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;
const model = require('../model/product');
const { default: mongoose } = require('mongoose');
const Product = model.Product;
// const mongoose = require('mongoose');
 console.log('env',process.env.DB_PASSWORD)
// Asitgtugy123 -- AsitTestCommerce
// Asit654dcydhc --db password
// mongodb+srv://AsitTestCommerce:Asitgtugy123@cluster0.fqfbmgj.mongodb.net/ecommerceDatabase-For CompassMongoDb Connection
// mongodb+srv://AsitTestCommerce:Asitgtugy123@cluster0.fqfbmgj.mongodb.net/?retryWrites=true&w=majori
// exports.createProducts = (req, res) => {
//   console.log(req.body)
//   products.push(req.body)
//   res.json(req.body);
// }
exports.createProducts = async (req, res) => {
  try {
    const product = new Product(req.body);

    const savedProduct = await product.save();
    console.log('Product saved successfully:', savedProduct);
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('Error saving product:', err);
    res.status(500).json({ error: 'Failed to save product' });
  }
};
 

exports.getProducts = async(req, res) => {
    // const id = +req.params.id;
    const id = req.params.id;
    // const product = products.find((p)=>p.id === id)
    const product = await Product.findById(id).exec();

    res.json(product);
  }
  
  exports.getAllProducts = async(req, res) => {
    const products = await Product.find();
    res.json(products);
  }
  

   exports.replaceProduct = async(req, res) => {
    // const id = +req.params.id;
     // const productIndex = products.find((p)=>p.id === id)
    // products.splice(productIndex,1,{...req.body,id:id})
  
    const id = req.params.id;
    try{

      const doc = await Product.findOneAndReplace({_id:id},req.body)
      res.status(201).json(doc)
    }catch(err){
      console.log(err);
      res.status(400).json(err);
    }
   
    
  }
  
  exports.updateProduct = async(req, res) => {
    // const id = +req.params.id;
    // const productIndex = products.findIndex((p)=>p.id === id)
    // const product = products[productIndex]
    // console.log(product)
    // products.splice(productIndex,1,{...product,...req.body})
    const id = req.params.id;
    try{

      const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
      res.status(201).json(doc)
    }catch(err){
      console.log(err);
      res.status(400).json(err);

    
  }
}
  
  exports.deleteProduct = async( req, res) => {
    // const id = +req.params.id;
    // const productIndex = products.findIndex((p)=>p.id === id)
    // const product = products[productIndex]
    // products.splice(productIndex,1)
    const id = req.params.id;
    try{

      const doc = await Product.findOneAndDelete({_id:id},{new:true})
      res.status(201).json(doc)
    }catch(err){
      console.log(err);
      res.status(400).json(err);

    
  }
  
    res.status(201).json(product)
  }