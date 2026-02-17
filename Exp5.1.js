const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Book Schema
const productSchema = new mongoose.Schema({
  itemCode: {
    type: Number,
    required: true,
    unique: true
  },
  itemName: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
  }
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

app.get('/getproducts', async (req, res) => {
  const products = await Product.find();
  res.send(products)
});

app.get('/getproducts/:pid', async (req, res) => {
  let query={"itemCode":req.params.pid}
  const result = await Product.find(query);
  res.send(result)
});


// Handle POST request to save a book
app.post('/saveproduct', async (req, res) => {
  const { itemCode, itemName, category, price } = req.body;

  // Create book document
  const p = new Product({
    itemCode: Number(itemCode),
    itemName,
    category,
    price: Number(price)
  });

  try {
    await p.save();
    res.json({"message":"Records Saved"});
  } catch (err) {
    if (err.code === 11000) {
      res.json({"error":"Book number already exists"});
    } else {
      res.json({"error":err});
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
