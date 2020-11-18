import React from "react";

const ProductList = (props) => {
  let content;
  if (!props.item || props.items.length === 0) {
    content = <p>could not find any products. Maybe create one?</p>;
  } else {
    content = (
      <ul className="product-list">
        {props.item.map((p) => (
          <ProductItem key={p.id} name={p.title} price={p.price} />
        ))}
      </ul>
    );
  }
  return <section id="products">{content}</section>;
};

export default ProductList;
