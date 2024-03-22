import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import usePageTitle from "../utils/usePageTitle";
import axios from "axios";
const Home = () => {
  usePageTitle("Home");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default Home;
