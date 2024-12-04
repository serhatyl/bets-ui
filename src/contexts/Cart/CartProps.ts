import {EventCardModel} from '../../models';

/* eslint-disable no-unused-vars */
export interface CartProps {
  cart: Array<EventCardModel>;
  setCart: (events: EventCardModel) => void;
}
