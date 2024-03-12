import React from "react";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
import elec from "../../assets/category/elec.jpg";
import jewel from "../../assets/category/jewel.jpg";
import men from "../../assets/category/men.jpg";
import women from "../../assets/category/women.jpg";
import { BallTriangle } from "react-loader-spinner";

const Category = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.allCategories.length === 0 ? (
        <div className="h-[50vh]">
          <BallTriangle
            height={"10vw"}
            width={"10vw"}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{
              marginLeft: "46vw",
              marginTop: "35vh",
            }}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {props.allCategories.map(function (item, index) {
                return index < 4 ? (
                  <div
                    key={index}
                    className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end"
                  >
                    <div>
                      <div className="mb-4">
                        <p className="mb-[2px] text-white">Enjoy</p>
                        <p className="text-2xl font-semibold mb-[2px]">With</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2 max-w-3">
                          {item}
                        </p>
                        <Button
                          text="Browse"
                          bgColor={"bg-primary"}
                          textColor={"text-white"}
                          click={() => navigate(`/products/${item}`)}
                        />
                      </div>
                    </div>
                    <img
                      src={
                        item == "electronics"
                          ? elec
                          : item == "jewelery"
                          ? jewel
                          : item == "men's clothing"
                          ? men
                          : women
                      }
                      alt=""
                      className="w-[250px] absolute top-1/2 -translate-y-1/2 right-10"
                    />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
