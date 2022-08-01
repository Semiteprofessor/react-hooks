/** @format */

import React, { useContext } from "react";
import PeopleContext from "../context/peopleContext";

const People = () => {
	const context = useContext(PeopleContext);
	return (
		<div>
			<h2>People:</h2>
			<hr />

			{context.people.map((p) => (
				<div className="col">
					<p>
						{p.firstName} {p.lastName}
					</p>
				</div>
			))}
		</div>
	);
};

export default People;
