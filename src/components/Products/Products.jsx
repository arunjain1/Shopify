import React, { useEffect, useState } from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const Products = (props) => {
  const param = useParams();

  const [ProductsData,setProductData] = useState([]);

  
  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${param.id}`);
        const data = await response.json();
        setProductData([...data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
      finally{
        // setLoading(false);
      }
    };

    fetchProducts();
  },[]);
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={`Explore Our ${param.id}  Products`} />
        {/* Body section */}
        <ProductCard data={ProductsData} setSelectedProduct={props.setSelectedProduct} />
      </div>
    </div>
  );
};

export default Products;
