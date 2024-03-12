import React from "react";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";
import iphone from "./assets/hero/iphone.jpg";
import shoe from "./assets/category/Shoe.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "25% OFF",
  title: "Hard Tech",
  date: "11 March to 28 March",
  image: iphone,
  title2: "Pheonix Touch",
  title3: "Winter End Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#ff6e6b",
};

const BannerData2 = {
  discount: "50% OFF",
  title: "Happy Hours",
  date: "11 March to 28 March",
  image: shoe,
  title2: "Smart Looks",
  title3: "Holi Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#5e53dd",
};

const Home = () => {
  const [allCategories,setAllCategories] = React.useState([]);


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
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setAllCategories([...data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Banner data={BannerData} />
      <Category allCategories = {allCategories} />
      <Services />
      <Banner data={BannerData2} />
      <Partners />
    </div>
  );
};

export default Home;
