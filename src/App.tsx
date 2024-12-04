import React from 'react';
import CartContextProvider from './contexts/Cart/CartContextProvider';
import EventList from './components/EventList/EventList';
import Cart from './components/Cart/Cart';

const App: React.FC = () => {
  return (
    <CartContextProvider>
      <EventList />
      <Cart />
    </CartContextProvider>
  );
};

export default App;
