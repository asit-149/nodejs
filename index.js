require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')
// const { Schema } = mongoose;
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
// console.log('env',process.env.DB_PASSWORD)
// Asitgtugy123 -- AsitTestCommerce
// Asit654dcydhc --db password
// mongodb+srv://AsitTestCommerce:Asitgtugy123@cluster0.fqfbmgj.mongodb.net/ecommerceDatabase-For CompassMongoDb Connection
// mongodb+srv://AsitTestCommerce:Asitgtugy123@cluster0.fqfbmgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
   console.log('database connected')
}

 //bodyParser
server.use(cors());
server.use(express.json());
server.use(morgan('default'))
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.router)
server.use('/users',userRouter.router)
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


server.listen(process.env.PORT, () => {
  console.log('server started');
});


