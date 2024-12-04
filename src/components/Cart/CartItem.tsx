import React from 'react';
import {EventCardModel} from '../../models';

const CartItem = (event: EventCardModel) => {
  const {mbs, eventCode, eventName, rate} = event;

  return (
    <div className="cart-item">
      <div>{mbs}</div>
      <div>Kod: {eventCode}</div>
      <div>Maç: {eventName}</div>
      <div>
        <b>Oran: {rate}</b>
      </div>
    </div>
  );
};

export default CartItem;
