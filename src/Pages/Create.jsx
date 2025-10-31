import { useState } from "react";
import { Button } from "flowbite-react";
import FormFieldWithLabel from "../components/FormFieldWithLabel";

const Create = () => {
  const [formField, setFormField] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formField);
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
