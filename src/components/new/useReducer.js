/** @format */

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

const UseReducer = () => {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h2>Count - {count}</h2>
			<button onClick={() => dispatch("increment")} className="btn">
				Increment
			</button>
			<button onClick={() => dispatch("decrement")} className="btn">
				Decrement
			</button>
			<button onClick={() => dispatch("reset")} className="btn">
				Reset
			</button>
		</div>
	);
};

export default UseReducer;
