/** @format */

import React, { useContext } from "react";
import { UserContext } from "./Context1";

const Context5 = () => {
	const user = useContext(UserContext);
	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};

export default Context5;
