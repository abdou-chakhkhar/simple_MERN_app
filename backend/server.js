const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express();

const PRODUCTS = [];

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next()
})

app.get('/products', (req, res, next) => {
  res.status(200).json({products: PRODUCTS})
})

app.post('/product', (req, res, next) => {
  const { title, price } = req.body;
  if(!title || title.trim().length === 0 || !price || price <= 0){
    return res.status(422).json({
      message: 'Invalid input, please enter a valid title and price.'
    })
  }

  const createdProduct = {
    id: uuid(),
    title,
    price
  }

  PRODUCTS.push(createdProduct)

  res.status(201).json({message: 'New product has been created', product: createdProduct})

})

app.listen(5000, () => {
  console.log("Server is running ...")
})