import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>hello redux</h1>
        <h2>hello rabin</h2>
      </div>
    </Provider>
  );
}

export default App;
