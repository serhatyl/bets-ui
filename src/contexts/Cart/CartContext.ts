import {createContext} from 'react';
import {CartProps} from './CartProps';

const DefaultCartProps: CartProps = {} as CartProps;

const CartContext = createContext<CartProps>(DefaultCartProps);

export default CartContext;
