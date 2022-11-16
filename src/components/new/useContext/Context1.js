/** @format */

import React, { useState, createContext } from "react";
import Context2 from "./Context2";

export const UserContext = createContext();

const user = {
	name: "Taiwo Olapade",
	age: 14,
	sex: "Male",
	maritalStatus: "Single",
};

const Context1 = () => {
	return (
		<UserContext.Provider value={user}>
				<Context2 />
		</UserContext.Provider>
	);
};

export default Context1;
