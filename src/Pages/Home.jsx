import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ setEditId }) => {
  const [products, setProducts] = useState([]);
  const [productDeleted, setProductDeleted] = useState(true);

  useEffect(() => {
    if (!productDeleted) {
      return;
    }
    fetchData();
    setProductDeleted(false);
  }, [productDeleted]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6904bdb96b8dabde4964edb9.mockapi.io/products/getAll"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-fit mx-auto my-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div>
        {products.map((ele) => {
          return (
            <Fragment key={ele.productId}>
              <ProductCard
                product={ele}
                setEditId={setEditId}
                onProductDelete={setProductDeleted}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
