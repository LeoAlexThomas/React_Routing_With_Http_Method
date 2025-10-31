import { useState } from "react";
import { Button } from "flowbite-react";
import FormFieldWithLabel from "../components/FormFieldWithLabel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [formField, setFormField] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
  });

  // Used to navigate between pages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://6904bdb96b8dabde4964edb9.mockapi.io/products/getAll",
        formField
      );
      navigate("/");
    } catch (error) {}
  };

  return (
    <form
      className="flex max-w-md flex-col gap-4 my-4 h-fit mx-auto"
      onSubmit={handleSubmit}
    >
      <FormFieldWithLabel
        id={"productName"}
        name={"productName"}
        label="Product Name"
        defaultValue={formField.productName}
        onChange={handleChange}
        placeholder="Enter Product Name"
        type="text"
      />
      <FormFieldWithLabel
        id={"productDescription"}
        name={"productDescription"}
        label="Product Description"
        defaultValue={formField.productDescription}
        onChange={handleChange}
        placeholder="Enter Product Description"
        type="text"
      />
      <FormFieldWithLabel
        id={"productPrice"}
        name={"productPrice"}
        label="Product Price"
        defaultValue={formField.productPrice}
        onChange={handleChange}
        placeholder="Enter Product Price"
        type="number"
      />
      <FormFieldWithLabel
        id={"productImage"}
        name={"productImage"}
        label="Product Image"
        defaultValue={formField.productImage}
        onChange={handleChange}
        placeholder="Enter Product Image"
        type="text"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Create;
