import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { emptyCart } from "../assets/index";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/amazonSlice";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);

  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [products]);

  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
          <div className="w-full h-full bg-white px-4 col-span-4">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-3xl font-medium">Shopping Cart</h2>
              <h2 className="text-xl font-normal">Subtotal</h2>
            </div>
            {/* products start here  */}
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6"
                >
                  <div className="w-1/5">
                    <img
                      className="w-full h-44 object-contain"
                      src={item.image}
                      alt="Product Image"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2 xl:gap-1">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="xl:pr-10 text-sm">{item.description}</p>
                    <p className="text-base">
                      Unit Price:{" "}
                      <span className="font-semibold">${item.price}</span>
                    </p>
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                      <p className="text-base font-normal">Qty:</p>
                      <p
                        onClick={() => {
                          dispatch(decrementQuantity(item.id));
                        }}
                        className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                      >
                        -
                      </p>
                      <p className="font-titleFont text-base font-semibold text-amazon_blue">
                        {item.quantity}
                      </p>
                      <p
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  {/* ====================== Right Start here =========================== */}

                  <div className="w-full md:w-24">
                    <p className="text-lg xl:w-24 font-titleFont font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                  {/* ====================== Right End here ============================= */}
                </div>
              ))}
            </div>
            {/* product end here  */}
            <div className="w-full py-2" onClick={() => dispatch(resetCart())}>
              <button className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide">
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full h-full bg-white col-span-1">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
                </span>
                Your order qualifies for FREE Shipping Choose this option at
                checkout. See details....
              </p>
            </div>
            <div>
              <p className="font-semibold px-6 py-1 flex items-center gap-2 justify-center">
                Total: <span className="text-lg font-bold">${totalAmt}</span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
              Proceed to Buy
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCartImg"
            />
          </div>
          <div className="w-96 p-4 bg-white flex  flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Cart;
