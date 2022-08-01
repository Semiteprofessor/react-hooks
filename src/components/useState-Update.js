/** @format */

import React, { useState } from "react";
import "./Update.css";

const Update = () => {
	const [value, setValue] = useState("");
	const handleChange = (e) => {
		e.preventDefault();
		let newValue = e.target.value;
		setValue(newValue);
	};
	return (
		<div className="container">
			<input type="text" onChange={handleChange} placeholder="Type something" />
			<h2>{value}</h2>
		</div>
	);
};

export default Update;
