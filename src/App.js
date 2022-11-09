/** @format */

import React from "react";
import "./App.css";
import Toggle from "./components/useState-Toggle";
import Count from "./components/useState-Count";
import Update from "./components/useState-Update";
import UseReducer from "./components/useReducer";
import Form from "./components/Form";
import People from "./components/People";

import PeopleContext from "./context/peopleContext";
import peopleReducer from "./context/peopleReducer";
import { ADD_PERSON } from "./context/types";
import NewestPerson from "./components/NewPerson";
import { useReducer } from "react";

import State from "./components/new/useEffect";
import ComponentC from "./components/new/context/componentC";
import UserReducer from "./components/new/useReducer";

const user = "Taiwo Olapade";
const login = {
	username: "rancho_dev",
	password: "123456",
};

export const UserContext = React.createContext();
export const LoginContext = React.createContext();

function App() {
	const initialState = {
		people: [
			{
				firstName: "John",
				lastName: "Doe",
			},
			{
				firstName: "Jane",
				lastName: "Doe",
			},
		],
	};

	const [state, dispatch] = useReducer(peopleReducer, initialState);

	const addPerson = (person) => {
		dispatch({
			type: ADD_PERSON,
			payload: person,
		});
	};
	return (
		<div>
			{/* <Toggle /> */}
			{/* <Count /> */}
			{/* <Update /> */}
			{/* <UseReducer /> */}
			{/* <PeopleContext.Provider value={{ people: state.people, addPerson }}>
				<div className="container mt-4">
					<div className="row">
						<Form />
						<People />
						<NewestPerson />
					</div>
				</div>
			</PeopleContext.Provider> */}

			{/* <UserContext.Provider value={user}>
				<LoginContext.Provider value={login}>
					<ComponentC />
				</LoginContext.Provider>
			</UserContext.Provider> */}

			<UserReducer />
		</div>
	);
}

export default App;
