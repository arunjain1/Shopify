import React from "react";
import Button from "../Shared/Button";
import { BallTriangle } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
const ProductCard = ({ data,setSelectedProduct }) => {
  const navigate = useNavigate();
  return (
    <>
    {data.length===0?(<div className="h-[50vh]">
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{
    marginLeft : "38vw",
    marginTop : "35vh"
  }}
  wrapperClass=""
  visible={true}
  />
    </div>):(
    <div className="mb-10 w-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
       {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.image}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text={"Preview"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  click={() => {
                    setSelectedProduct(data);
                    navigate(`/productDetail`);
                  }}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="text-[15px] truncate w-[200px]">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>)}
    </>
  );
};

export default ProductCard;
