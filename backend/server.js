import express from 'express';
import csitdata from './csitdata.js';
import medata from './medata.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));


const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/meproducts", productRoute);
// app.get("/api/meproducts/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = medata.products.find(x => x._id === productId);
//   if (product)
//     res.send(product);
//   else
//     res.status(404).send({ msg: "Product Not Found." })
// });

app.get("/api/csitproducts", (req, res) => {
	res.send(csitdata.products);
});

app.get("/api/meproducts", (req, res) => {
	res.send(medata.products);
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});