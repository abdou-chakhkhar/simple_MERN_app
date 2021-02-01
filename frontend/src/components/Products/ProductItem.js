import React from 'react';

import './ProductItem.css';

const ProductItem = ({name, price}) => {
  return (
    <li className="product-item">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </li>
  );
};

export default ProductItem;
