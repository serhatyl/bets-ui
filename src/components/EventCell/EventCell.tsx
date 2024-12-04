import React from 'react';
import {EventModel, EventRateColumnsModel} from '../../models';
import {useCart} from '../../hooks/useCart';

interface Props {
  event: EventModel;
  columnData: EventRateColumnsModel;
}

const EventCell = ({event, columnData}: Props) => {
  const {cart, setCart} = useCart();

  const handleClick = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'TD') {
      if (columnData.value) {
        setCart({
          mbs: event.OCG[1].MBS,
          eventCode: event.C,
          eventName: event.N,
          rate: columnData.value ? columnData.value : '',
          rateType: columnData.rateType ? columnData.rateType : '',
        });
      }
    }
  };

  return (
    <td
      onClick={event ? handleClick : undefined}
      className={[
        columnData.value && 'cursor-pointer',
        cart.find(
          (cartEvent) =>
            cartEvent.rateType === columnData.rateType && cartEvent.eventCode === event.C,
        ) && 'bg-yellow',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {columnData.label}
    </td>
  );
};

export default EventCell;
