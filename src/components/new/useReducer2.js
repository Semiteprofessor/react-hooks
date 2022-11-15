/** @format */

import React, { useReducer } from "react";

const initialState = { firstCounter: 0 };
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { firstCounter: state.firstCounter + 1 };
		case "decrement":
			return { firstCounter: state.firstCounter - 1 };
		case "reset":
			return initialState;
		default:
			return state;
	}
};

const UseReducer2 = () => {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h2>Count - {count.firstCounter}</h2>
			<button onClick={() => dispatch({ type: "increment" })} className="btn">
				Increment
			</button>
			<button onClick={() => dispatch({ type: "decrement" })} className="btn">
				Decrement
			</button>
			<button onClick={() => dispatch({ type: "reset" })} className="btn">
				Reset
			</button>
		</div>
	);
};

export default UseReducer2;
