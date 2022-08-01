/** @format */

import React, { useContext } from "react";
import PeopleContext from "../context/peopleContext";

const PeopleCount = () => {
	const context = useContext(PeopleContext);
	return (
		<div>
			<h2>{context.people.length}</h2>
		</div>
	);
};

export default PeopleCount;
