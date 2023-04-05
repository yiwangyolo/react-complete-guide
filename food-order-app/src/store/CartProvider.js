import { useReducer } from "react";

import { CartContext } from "./cart-context";

const DEFAULT_CART_STATE = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems;

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedItems;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "CLEAR_CART") {
    return DEFAULT_CART_STATE;
  }

  return DEFAULT_CART_STATE;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    DEFAULT_CART_STATE
  );

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD_ITEM", item });
  };
  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", id });
  };

  const clearCartHandler = () => {
    dispatchCartState({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
