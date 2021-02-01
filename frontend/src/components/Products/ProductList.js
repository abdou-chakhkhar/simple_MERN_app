import React from 'react';

import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({items}) => {
  let content;
  if (!items || items.length === 0) {
    content = <p>Could not find any products. Maybe create one?</p>;
  } else {
    content = (
      <ul className="product-list">
        {items.map(item => (
          <ProductItem key={item.id} name={item.title} price={item.price} />
        ))}
      </ul>
    );
  }

  return <section id="products">{content}</section>;
};

export default ProductList;
