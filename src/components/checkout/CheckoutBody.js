import React, { useContext, useState } from 'react';
import { Cart } from '../../context/cartContext';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === 'localhost';

const CheckoutBody = () => {
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    pin: '',
  });

  const cartCtx = useContext(Cart);
  const cartLength = cartCtx.cartLength;

  const itemArray = [];
  cartCtx.cart.forEach((item) => {
    const quantity = item.quantity.replace(/"/g, "'").replace(/'/g, '');
    const itemBill = item.product_selling_price * quantity;
    itemArray.push(itemBill);
  });

  const initialBill = 0;
  const totalBill = itemArray.reduce((acc, item) => acc + item, initialBill);

  const handleFormChange = (e) => {
    e.persist();
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
    const data = {
      name: checkoutForm.name,
      phone: checkoutForm.phone,
      email: checkoutForm.email,
      address: checkoutForm.address,
      country: checkoutForm.country,
      pin: checkoutForm.pin,
    };

    const options = {
      key: __DEV__ ? 'rzp_test_UrYqb5LGWAWmJT' : 'PRODUCTION_KEY', // Enter the Key ID generated from the Dashboard
      amount: totalBill * 100,
      name: 'Eatiano',
      description: 'Test Transaction',
      order_id: 'order_J9IJtWqr4xaFRz', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phone,
      },
      notes: {
        address: data.address,
        country: data.country,
        pin: data.pin,
      },
      theme: {
        color: '#2F343A',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className='container grid gap-24 my-16 md:my-24 lg:my-40 md:grid-cols-2'>
      <div className='order-2 md:order-1'>
        <div>
          <form onSubmit={submitOrder}>
            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Name
                </h6>
              </label>
              <input
                name='name'
                type='text'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.name}
              />
            </div>

            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Email
                </h6>
              </label>
              <input
                name='email'
                type='email'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.email}
              />
            </div>

            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Phone
                </h6>
              </label>
              <input
                name='phone'
                type='number'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.phone}
              />
            </div>

            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Address
                </h6>
              </label>
              <textarea
                name='address'
                cols='30'
                rows='3'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.address}
              ></textarea>
            </div>

            <div className='flex items-center justify-between gap-4 mb-10 md:mb-14'>
              <div>
                <label>
                  <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                    Country
                  </h6>
                </label>
                <input
                  name='country'
                  type='text'
                  className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                  required
                  onChange={handleFormChange}
                  value={checkoutForm.country}
                />
              </div>

              <div>
                <label>
                  <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                    Pin Code
                  </h6>
                </label>
                <input
                  name='pin'
                  type='number'
                  className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                  required
                  onChange={handleFormChange}
                  value={checkoutForm.pin}
                />
              </div>
            </div>

            {/* <div className='flex flex-wrap items-center justify-end gap-4'>
              
            </div> */}
            <button className='w-full px-8 py-3 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text xl:w-auto bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Pay With RazorPay
            </button>
          </form>
        </div>
      </div>

      <div className='flex flex-col order-1 shadow-lg p-9 lg:p-16 md:order-2 bg-secondary rounded-xl'>
        <h4 className='mb-10 text-2xl font-medium text-gray-200 xl:text-4xl lg:mb-14'>
          Order Summary
        </h4>

        <div className='flex items-center justify-between gap-4 mb-6 md:mb-9'>
          <h6 className='text-lg text-gray-300 xl:text-2xl'>Total Items:</h6>
          <p className='text-lg font-medium text-gray-100 xl:text-2xl'>
            {cartLength}
          </p>
        </div>

        <div className='flex items-center justify-between gap-4 mb-6 md:mb-9'>
          <h6 className='text-lg text-gray-300 xl:text-2xl'>Total Charges:</h6>
          <p className='text-lg font-medium text-gray-100 xl:text-2xl'>
            Rs. {totalBill}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
