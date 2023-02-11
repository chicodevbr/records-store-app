import { createContext, useContext } from 'react';
import CartStore from './CartStore';

const store = {
  cart: CartStore(),
};

export const StoreContext = createContext(store);
export const useStore = () => {
  return useContext<typeof store>(StoreContext);
};

export default store;
