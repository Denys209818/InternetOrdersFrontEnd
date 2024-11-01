import { Provider } from "react-redux";
import { Root } from "./Root";
import { store } from "./redux/store";
import './index.css';


const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
