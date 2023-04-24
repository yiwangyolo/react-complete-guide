import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // const sendCartData = () => {
    //   if (isInitial) {
    //     isInitial = false;
    //     return;
    //   }

    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data.",
    //     })
    //   );

    //   fetch("https://react-http-3a7fa-default-rtdb.firebaseio.com/cart.json", {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error("Sending cart data failed.");
    //       }

    //       dispatch(
    //         uiActions.showNotification({
    //           status: "success",
    //           title: "Success...",
    //           message: "Sending cart data successfully.",
    //         })
    //       );
    //     })
    //     .catch((error) => {
    //       console.error("Your request failed: ", error);

    //       dispatch(
    //         uiActions.showNotification({
    //           status: "failed",
    //           title: "Sending failed...",
    //           message: "Sending cart data failed.",
    //         })
    //       );
    //     });
    // };

    // sendCartData();
    if (isInitial) {
      isInitial = false;
      return;
    }

    // by doing this will clear the logic in app component
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
