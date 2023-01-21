import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/CounterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const [incAmount, setIncAmount] = useState(0);
  const addValue = Number(incAmount);

  console.log(incAmount);

  const resetAll = () => {
    setIncAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p> {count}</p>
      <div className="btn1">
        <button className="increase" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="decrease" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>

      <input
        type="number"
        value={incAmount}
        onChange={(e) => setIncAmount(e.target.value)}
      />
      <div className="btn2">
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          {" "}
          Add Amount
        </button>
        <button onClick={() => resetAll()}>Reset</button>
      </div>
    </section>
  );
};
