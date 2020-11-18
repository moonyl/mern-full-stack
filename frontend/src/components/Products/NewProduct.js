import React, { useState } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

const NewProduct = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitProductHandler = (event) => {
    event.preventDefault();
    props.onAddProduct(enteredTitle, enteredPrice);
  };

  return (
    <section id="new-product">
      <h2>Add a New Product</h2>
      <form onSubmit={submitProductHandler}>
        <Input
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></Input>
        <Input
          type="number"
          label="Price"
          step={0.01}
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        ></Input>
        <Button type="submit">ADD PRODUCT</Button>
      </form>
    </section>
  );
};

export default NewProduct;
