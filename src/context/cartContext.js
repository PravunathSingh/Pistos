import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';
import NotLoggedInCart from '../components/mycart/NotLoggedInCart';

export const Cart = createContext({
  cart: [],
  cartLength: 0,
  addToCart: (productId, quantity) => {},
  deleteProduct: (productId) => {},
  emptyCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteProduct = async (product_id) => {
    let config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.delete(
      `https://achievexsolutions.in/etiano/api/auth/cart/${product_id}`,
      config
    );
    const resData = await res.data.data;
    console.log(resData);
  };

  const addToCart = async (product_id, quantity) => {
    var data = JSON.stringify({
      product_id: product_id,
      quantity: quantity,
    });

    let config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.post(
      'https://achievexsolutions.in/etiano/api/auth/cart',
      data,
      config
    );
    const resData = await res.data.data;

    console.log(resData);
  };

  useEffect(() => {
    const getCartItems = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        'https://achievexsolutions.in/etiano/api/auth/cart',
        config
      );

      const cartData = await res.data;
      setCartItems(cartData.data);
    };

    getCartItems();
  }, [token]);

  console.log(cartItems);

  const cartValue = {
    cart: cartItems,
    cartLength: cartItems.length,
    addToCart: addToCart,
    deleteProduct: deleteProduct,
  };

  return <Cart.Provider value={cartValue}>{children}</Cart.Provider>;
};

export default CartProvider;
