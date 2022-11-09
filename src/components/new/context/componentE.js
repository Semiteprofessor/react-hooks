/** @format */

import React, { useContext } from "react";
import ComponentF from "./componentF";
import { UserContext, LoginContext } from "../../../App";

const ComponentE = () => {
	const user = useContext(UserContext);
	const login = useContext(LoginContext);
	return (
		<div>
			{user} - {login.username} {login.password}
		</div>
	);
};

export default ComponentE;
