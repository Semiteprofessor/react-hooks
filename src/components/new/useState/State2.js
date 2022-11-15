/** @format */

import React, { useState, useEffect } from "react";

const State2 = () => {
	const [coordX, setCoordX] = useState(0);
	const [coordY, setCoordY] = useState(0);
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		document.title = `Document title is ${count}`;
	}, [count]);

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button className="btn" onClick={() => setCount(count + 1)}>
				Increase
			</button>
		</div>
	);
};

export default State2;
