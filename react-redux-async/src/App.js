import "./App.css";
import DataRenderer from "./components/DataRenderer";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import {reducer} from "./redux/reducer";


const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world</h1>
        <DataRenderer />
      </div>
    </Provider>
  );
}

export default App;
