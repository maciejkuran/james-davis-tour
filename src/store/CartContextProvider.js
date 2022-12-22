import { createContext, useReducer } from 'react';

export const CartContext = createContext({
  items: [],
  total: 0,
  addItem: '',
  removeItem: '',
});

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    if (state.items.length === 0) {
      return { total: state.total + action.total, items: [action.item, ...state.items] };
    }

    if (state.items.length > 0) {
      //if there are already items, do the check and retrieve an array of unique items and update with new one
      const uniqueItems = state.items.filter(item => item.id !== action.item.id);

      if (uniqueItems.length === 0) {
        return { total: action.total, items: [action.item, ...uniqueItems] };
      } else {
        const uniqueItemsTotal = uniqueItems
          .map(item => item.total)
          .reduce((acc, val) => acc + val);
        return { total: uniqueItemsTotal + action.total, items: [action.item, ...uniqueItems] };
      }
    }
  }
};

const CartContextProvider = props => {
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [], total: 0 });

  const addItem = item => {
    dispatchCart({ type: 'ADD', item: item, total: item.total });
  };

  return (
    <CartContext.Provider value={{ items: cart, addItem: addItem, total: cart?.total }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
