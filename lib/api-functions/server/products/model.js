/*
  {
    image: url,
    title: string,
    description?: string,
    price: number,
    quantity: number
  }
*/
import db from '@/lib/api-functions/server/db'
import mongoose from "mongoose";
const { Schema } = mongoose;

export const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: "https://static.thenounproject.com/png/3454588-200.png",
  },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;