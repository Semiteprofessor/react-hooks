/** @format */

import React, { useState } from "react";

const State = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>{count}</h1>
			<button
				className="btn"
				onClick={() => {
					setCount(count + 1);
				}}>
				Increase
			</button>
			<button
				className="btn"
				onClick={() => {
					setCount(count - 1);
				}}>
				Decrease
			</button>
		</div>
	);
};

export default State;
