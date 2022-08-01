/** @format */

import React, { useReducer } from "react";
import "./useReducer.css";

const UserReducer = () => {
	const reducer = (state, action) => {
		switch (action.type) {
			case "INCREMENT":
				return { count: state.count + 1, showText: state.showText };
			case "toggleShowText":
				return { count: state.count, showText: !state.showText };

			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

	return (
		<div className="container">
			<h1>{state.count}</h1>
			<button
				className="btn"
				onClick={() => {
					dispatch({ type: "INCREMENT" });
					dispatch({ type: "toggleShowText" });
				}}>
				Increment
			</button>
			{state.showText && (
				<h2>I am agolophity horlogically and totally angeology</h2>
			)}
		</div>
	);
};

export default UserReducer;
