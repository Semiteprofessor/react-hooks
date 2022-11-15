/** @format */

import React, { useState } from "react";

const State1 = () => {
	const [name, setName] = useState({ firstName: "", lastName: "" });

	return (
		<div>
			<form action="">
				<input
					type="text"
					value={name.firstName}
					onChange={(e) => setName({...name,  firstName: e.target.value })}
				/>
				<input
					type="text"
					value={name.lastName}
					onChange={(e) => setName(...name, { lastName: e.target.value })}
				/>

				<h1>{name.firstName}</h1>
				<h1>{name.lastName}</h1>
				<h1>{JSON.stringify(name)}</h1>
			</form>
			{/* <button
				className="btn"
				onClick={() => {
					setCount(count + 1);
				}}>
				Increase
			</button> */}
		</div>
	);
};

export default State1;
