/** @format */

import React, { useState, useEffect } from "react";

const State3 = () => {
	const [coordX, setCoordX] = useState(0);
	const [coordY, setCoordY] = useState(0);

	const coordinate = (e) => {
		console.log(`useEffect called`);
		setCoordX(e.clientX);
		setCoordY(e.clientY);
	};

	useEffect(() => {
		window.addEventListener("mousemove", coordinate);
	});

	return (
		<div>
			Coord X: {coordX}, Coord Y: {coordY}
			{/* <button className="btn" onClick={coordinate}>
				Increase
			</button> */}
		</div>
	);
};

export default State3;
