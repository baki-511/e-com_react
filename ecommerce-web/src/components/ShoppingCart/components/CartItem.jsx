import React, { useEffect, useState } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { chageQuantity } from "../store/Cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      chageQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      chageQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  //   console.log(detail);
  return (
    <>
      {/* <div className="bg-red-500 rounded-full w-7 h-7 m-aut text-white pl-3">-</div> */}
      <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
        <img src={detail.image} alt="" className="w-12" />
        <h3>{detail.name}</h3>
        <p>${detail.price * quantity}</p>
        <div className="w-20 flex justify-between">
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
