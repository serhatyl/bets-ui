import React, {useState} from 'react';
import CardContext from './CartContext';
import {CartProps} from './CartProps';
import {EventCardModel} from '../../models';

interface Props {
  children: React.ReactNode;
}

const CartContextProvider: React.FC<Props> = ({children}) => {
  const setCart = (event: EventCardModel) => {
    setCartProps((oldState) => {
      const existingEventIndex = oldState.cart.findIndex(
        (cartEvent) => cartEvent.eventCode === event.eventCode,
      );

      if (existingEventIndex !== -1) {
        const existingEvent = oldState.cart[existingEventIndex];

        if (existingEvent.rateType === event.rateType) {
          const updatedCart = [...oldState.cart];
          updatedCart.splice(existingEventIndex, 1);
          return {
            ...oldState,
            cart: updatedCart,
          };
        } else {
          const updatedCart = [...oldState.cart];
          updatedCart.splice(existingEventIndex, 1, event);
          return {
            ...oldState,
            cart: updatedCart,
          };
        }
      } else {
        return {
          ...oldState,
          cart: [...oldState.cart, event],
        };
      }
    });
  };

  const [cartProps, setCartProps] = useState<CartProps>({
    cart: [],
    setCart,
  });

  return <CardContext.Provider value={cartProps}>{children}</CardContext.Provider>;
};

export default CartContextProvider;
