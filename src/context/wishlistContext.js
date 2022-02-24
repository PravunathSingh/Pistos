import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Wishlist = createContext({
  wishlist: [],
  wishlistLength: 0,
  addToWishlist: (product_id) => {},
  deleteFromWishlist: (product_id) => {},
  moveToCart: (product_id) => {},
});

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const addToWishlist = (product_id) => {
    var data = JSON.stringify({
      product_id: product_id,
    });

    let config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.post(
      'https://achievexsolutions.in/etiano/api/auth/wishlist',
      data,
      config
    );
  };

  useEffect(() => {
    const getWishlist = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(
        'https://achievexsolutions.in/etiano/api/auth/wishlist',
        config
      );

      const resData = await res.data.data;
      setWishlist(resData);
    };

    getWishlist();
  }, [token]);

  const deleteFromWishlist = async (product_id) => {
    let config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.delete(
      `https://achievexsolutions.in/etiano/api/auth/wishlist/${product_id}`,
      config
    );
    console.log(res);
  };

  const wishlistValue = {
    wishlist: wishlist,
    wishlistLength: wishlist.length,
    addToWishlist: addToWishlist,
    deleteFromWishlist: deleteFromWishlist,
  };

  return (
    <Wishlist.Provider value={wishlistValue}>{children}</Wishlist.Provider>
  );
};

export default WishlistProvider;
