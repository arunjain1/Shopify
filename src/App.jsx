import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Products/Products.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import PageNotFound from "./components/Not Found/PageNotFound";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct,setSelectedProduct] = useState(null);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories"
        );
        const data = await response.json();
        setAllCategories([...data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Products setSelectedProduct={setSelectedProduct} />} />
          <Route path="productDetail" element={<ProductDetail selectedProduct={selectedProduct} />} />
          <Route path = "*" element = {<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
