/** @format */

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
			<PeopleContext.Provider value={{ people: state.people, addPerson }}>
				<div className="container mt-4">
					<div className="row">
						<Form />
						<People />
						<NewestPerson />
					</div>
				</div>
			</PeopleContext.Provider>
		</div>
	);
}

export default App;
