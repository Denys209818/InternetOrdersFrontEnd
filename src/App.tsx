import { useEffect } from "react";
import { Root } from "./Root";
import './index.css';
import { useAppDispatch } from "./redux/tools/hooks";
import { getAllCartItems } from "./tools/localStorageUtils";
import { DishCart } from "./redux/types/dishTypes";
import { SetCartItemsAction } from "./actions/CartActions";


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartItems: DishCart[] = getAllCartItems();

    dispatch(SetCartItemsAction(cartItems));
  }, [dispatch]);

  return (
      <Root />
  );
}

export default App;
