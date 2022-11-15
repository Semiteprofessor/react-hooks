/** @format */

import { useState } from "react";

const State6 = () => {
	const [car, setCar] = useState({
		brand: "Ford",
		model: "Mustang",
		year: "1964",
		color: "red",
	});

	const update = () => {
		setCar({ brand: "Toyota", model: "Corolla", year: "2006", color: "gray" });
	};

	return (
		<>
			<h1>My {car.brand}</h1>
			<h3>
				It is a {car.color} {car.model} from {car.year}.
			</h3>
			<button className="btn" onClick={update}>
				Get Update
			</button>
		</>
	);
};

export default State6;
