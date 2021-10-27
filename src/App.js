import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT } from "./actions";
import { DECREMENT } from "./actions";
import React from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          console.log("hola");
          return dispatch(INCREMENT);
        }}
      >
        sumale 1!
      </button>
      <button onClick={() => dispatch(DECREMENT)}>restale 1!</button>

      {logged ? <h3>informacion no visible si no estas loggeado</h3> : ""}
    </div>
  );
}

export default App;
