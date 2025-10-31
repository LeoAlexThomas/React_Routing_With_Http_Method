import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, setEditId, onProductDelete }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://6904bdb96b8dabde4964edb9.mockapi.io/products/getAll/${product.productId}`
      );
      onProductDelete(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClicked = () => {
    setEditId(product.productId);
    navigate(`/edit/${product.productId}`);
  };

  return (
    <Card
      className="max-w-md my-4 bg-amber-50 dark:bg-white p-4"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={product.productImage}
    >
      <h5 className="text-2xl font-bold tracking-tight ">
        {product.productName}
      </h5>
      <p className="font-normal">{product.productDescription}</p>
      <p className="font-normal">${product.productPrice}</p>
      <div className="flex justify-between">
        <Button className="cursor-pointer" onClick={handleEditClicked}>
          Edit
        </Button>
        <Button
          onClick={handleDelete}
          className="dark:bg-white dark:outline-1 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-white cursor-pointer"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
