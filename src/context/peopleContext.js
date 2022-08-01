/** @format */

import { createContext } from "react";

const PeopleContext = createContext({
	people: [],
	addPerson: () => {},
});

export default PeopleContext;
