const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const contractRoutes = require('./routes/contract');
const inventoryRoutes = require('./routes/inventory');

const app = express();

mongoose.connect('mongodb://localhost:27017/inventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.json());

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/contracts', contractRoutes);
app.use('/inventories', inventoryRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});