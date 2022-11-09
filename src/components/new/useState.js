/** @format */

import React, { useState, useEffect } from "react";

const State = () => {
	const [count, setCount] = useState(0);
	const [display, setDisplay] = useState(true);

	return (
		<div>
			<h1>{display ? count : null}</h1>
			<button
				className="btn"
				onClick={() => {
                    setCount(count + 1)
				}}>
				Increase
			</button>
			<button
				className="btn"
				onClick={() => {
					setDisplay(!display);
				}}>
				Toggle
			</button>
		</div>
	);
};

export default State;
