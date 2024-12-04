import {useContext} from 'react';
import {CartProps} from '../contexts/Cart/CartProps';
import CartContext from '../contexts/Cart/CartContext';

export const useCart = () => {
  const context = useContext<CartProps>(CartContext);
  if (!context) {
    throw new Error('useCart must be used within an CartProvider');
  }
  return context;
};
