import React from 'react';

const Member = ({ member }) => {
  return (
    <div className='px-8 py-12 shadow-lg rounded-xl bg-secondary'>
      <h4 className='mb-3 text-2xl font-semibold text-center text-gray-100 md:mb-5 lg:text-3xl'>
        {member.membership_type_name}
      </h4>
      <h6 className='mb-4 text-lg font-medium text-center text-brand-text md:mb-6 md:text-xl'>
        @ Rs.{member.membership_price}
      </h6>

      <h6 className='mb-4 font-medium text-center text-gray-300 md:mb-6 md:text-lg'>
        Valid For: {member.time_period} Months
      </h6>
      <p className='text-lg font-medium text-center text-cta-dark md:text-xl'>
        {member.discount_percent}% off on all orders!
      </p>

      <button className='w-full px-8 py-2 mt-8 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:mt-14 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
        Subscribe
      </button>
    </div>
  );
};

export default Member;
