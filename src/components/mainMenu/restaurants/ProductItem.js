import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className='p-4 mb-10 shadow-lg lg:p-8 rounded-xl md:mb-4 lg:mb-0 bg-secondary'>
      <h3 className='mb-4 text-lg font-semibold text-center text-gray-100 lg:text-2xl'>
        {product.product_name}
      </h3>
      <p className='mb-4 text-sm font-light text-center text-gray-300 lg:text-base'>
        {product.product_desciption}
      </p>

      <p className='mb-4 text-xs italic font-light opacity-80 text-border'>
        {product.product_status === 'active' ? '' : 'OUT OF STOCK'}
      </p>

      <div className='flex items-center justify-between'>
        <p className='font-medium lg:text-lg text-cta'>
          ₹ {product.product_selling_price}
        </p>
        <p>
          <i className='fa fa-star text-brand-text'></i>{' '}
          {product.product_rating}
        </p>
      </div>

      <button className='w-full px-2 py-2 mt-8 font-medium transition-all duration-200 rounded-lg shadow-lg bg-cta hover:bg-cta-dark text-primary lg:text-lg'>
        {' '}
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
