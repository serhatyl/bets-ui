import React, {useMemo} from 'react';
import {useCart} from '../../hooks/useCart';
import CartItem from './CartItem';

const Cart = () => {
  const {cart} = useCart();

  const cartTotal = useMemo(() => {
    if (cart.length > 0) {
      const total = cart.reduce((total, cartItem) => total * Number(cartItem.rate), 1);
      return Number(total.toFixed(2));
    }
    return 0;
  }, [cart]);

  return (
    <div className="cart-wrapper">
      <div className="event-list">
        {cart.map((event) => (
          <CartItem key={event.eventCode} {...event} />
        ))}
      </div>
      <div>Toplam Tutar {cartTotal} TL</div>
    </div>
  );
};

export default Cart;
