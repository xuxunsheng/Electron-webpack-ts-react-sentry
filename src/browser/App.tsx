import * as React from "react";
import { hot } from "react-hot-loader";

const App = () => {
  setTimeout(() => {
    throw "demo1 error";
  }, 1000);
  return <div>Hi from react !</div>;
};

export default hot(module)(App);
