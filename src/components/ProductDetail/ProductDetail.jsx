import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({selectedProduct}) => {
  const navigate = useNavigate();
  const [count,setCount] =  useState(1);
  useEffect(()=>{
    if(selectedProduct === null){
      navigate(`/`);
    }
  },[]);
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  
  return (
    selectedProduct===null?null:
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      
      <div className="container mx-auto px-4">
        <img src = {selectedProduct.image}/>
      </div>

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {selectedProduct.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
            <Rater
              style={{ fontSize: "20px" }}
              total={5}
              interactive={false}
              rating={selectedProduct.rating.rate}
            />

            <p className="ml-3 text-sm text-gray-400">
              ({selectedProduct.rating.count})
            </p>
          </div>
        </div>
        <p className="mt-5 font-bold">
          Availability:{" "}
            <span className="text-green-600">In Stock </span>
        </p>
        <p className="font-bold">
          Category:{" "}
          <span className="font-normal">{selectedProduct.category}</span>
        </p>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ${selectedProduct.price}{" "}
          <span className="text-xs text-gray-400 line-through">
            ${selectedProduct.price*1.5}
          </span>
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {selectedProduct.description}
        </p>
        <div className="mt-6">
          <p className="pb-2 text-xs text-gray-500">Quantity</p>
          <div className="flex">
            <button className={`${plusMinuceButton}`}  onClick={()=>{
                if(count!==0){
                    setCount((prev)=> prev-1)
                }
            }}>−</button>
            <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
              {count}
            </div>
            <button className={`${plusMinuceButton}`} onClick={()=>{
                setCount((prev)=> prev+1)
            }}> +</button>
          </div>
        </div>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button disabled className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
          <button disabled className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;