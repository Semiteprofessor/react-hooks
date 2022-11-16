/** @format */

import { useState, useEffect, useRef } from "react";

function Ref1() {
	const [inputValue, setInputValue] = useState("");
	const count = useRef(0);

	useEffect(() => {
        console.log("Rendering")
		count.current = count.current + 1;
	});

	return (
		<>
        <h3>{inputValue}</h3>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h1>Render Count: {count.current}</h1>
		</>
	);
}

export default Ref1;
