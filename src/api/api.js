import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    // "https://fakestoreapiserver.vercel.app/amazonproducts"
    "https://fakestoreapi.com/products"
  );
  console.log("pr", products);
  return products;
}
