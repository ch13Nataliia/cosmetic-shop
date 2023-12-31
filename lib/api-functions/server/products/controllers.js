import db from '@/lib/api-functions/server/db';
import Product from '@/lib/api-functions/server/products/model';
import { addProductSchema, updateProductSchema } from "@/lib/validation/";

const getProducts = async (req, res) => {
  const { id } = req.params;
  console.log('id', id);


  const query = {};

  if (id) {
    query._id = id;
  }
  try {
    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const addProduct = async (req, res, isAdmin) => {
  let productData = { ...req.body  };

  if (productData.image === '') {
    delete productData.image ;
  }
  console.info(productData);

  try {
    productData = await addProductSchema.validate(productData);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

  try {
    const newProduct = new Product(productData);
    const result = await newProduct.save();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
  //   try {
  //     const result = await add(productData);
  //     res.status(201).json(result);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).send(err);
  //   }
  // };
};
const updateProduct = async (req, res, isAdmin) => {
  const { id } = req.params;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: 'No id provided to update' });
  }
  const query = { _id: id };
  let { owner, ...updates } = req.body;

  try {
    updates = await updateProductSchema.validate(updates);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }

  try {
    const result = await Product.updateOne(query, updates);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    return res.status(200).send({ message: 'Updated' });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  console.log('🚀 ~ file: controllers.js:99 ~ removeProduct ~ id:', id);

  if (!id) {
    return res.status(400).json({ message: 'No id provided to delete' });
  }

  const query = {
    _id: id,
  };

  // if (!isAdmin) {
  //   query.owner = req.user.sub;
  // }

  try {
    const result = await Product.deleteOne(query);
    if (result.n === 0) return res.status(404).send({ message: 'Not Found' });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export { getProducts, addProduct, updateProduct, removeProduct };
