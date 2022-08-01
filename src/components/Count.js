/** @format */

import React, { useState } from "react";
import "./Count.css";

const Count = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="container">
			<h1>{count}</h1>
			<button className="btn" onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	);
};

export default Count;
