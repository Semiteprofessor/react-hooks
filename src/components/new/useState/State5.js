/** @format */

import { useState } from "react";

const State5 = () => {
	const [color, setColor] = useState("red");

	return (
		<>
			<h1>My favorite color is {color}!</h1>
			<button type="button" onClick={() => setColor("blue")}>
				Blue
			</button>
		</>
	);
};

export default State5;
