import express from 'express';
import dotenv from 'dotenv';
import {connectDB } from './config/db.js';
import Product from './models/Product.js';

dotenv.config(); 

const app = express();


app.use(express.json()); //allows us to accept json data into body (Middleware)

app.post('/api/products',async (req,res) => {
  const product = req.body; //data sent by client

if(!product.name || !product.description || !product.price || !product.image) {
    return res.status(400).json({ message: 'All fields are required' });
  } //checks that all fields are present; 404 => bad request

  const newProduct = new Product(product)

  try{ //tries to save the product
    await newProduct.save(); //await pauses the process until saving is done
    res.status(201).json({success: true, data: newProduct});
    //201 => created
  }
    catch (error){ //catches the error occured while data saving
      console.error('Error in create product:', error.message);
      res.status(500).json({ success: false, message: 'Server error' });
      // 500 => internal server error
    }


    // receive data => validate => save to db => respond to client
  });



app.listen(3000, () => {
    connectDB();
  console.log('Server is running on http://localhost:3000');
});

//sGlMeOjNKVwi9swT