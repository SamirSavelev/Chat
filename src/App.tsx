import React from "react";
import { Provider } from "react-redux";
import { PageIndex } from "./pages/index";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageIndex />
      </div>
    </Provider>
  );
}

export default App;
