import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  const allProducts = products.map((product) => {
    return <ProductItem key={product.product_id} product={product} />;
  });

  return (
    <div className='grid grid-cols-2 gap-4 lg:gap-8 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center'>
      {allProducts}
    </div>
  );
};

export default ProductList;
