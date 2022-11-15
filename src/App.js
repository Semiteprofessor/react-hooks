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

import State from "./components/new/useEffect/Effect";
// import ComponentC from "./components/new/context/componentC";
import UserReducer from "./components/new/useReducer";
import UseReducer2 from "./components/new/useReducer2";
import ComponentA from "./components/new/reducer-context/componentA";
import ComponentB from "./components/new/reducer-context/componentB";
import ComponentC from "./components/new/reducer-context/componentC";
import Fetch from "./components/new/fetching-data";
import FetchingData1 from "./components/new/fetching-data1";
import ParentComponent from "./components/new/useCallBack/ParentComponent";
import Counter from "./components/new/useMemo/Counter";
import Todo from "./components/new/useMemo/Todo";
import UseState6 from "./components/new/useState/State6";
import Effect1 from "./components/new/useEffect/Effect1";
import Effect2 from "./components/new/useEffect/Effect2";
import Effect3 from "./components/new/useEffect/Effect3";

const user = "Taiwo Olapade";
const login = {
	username: "rancho_dev",
	password: "123456",
};

export const UserContext = React.createContext();
export const LoginContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function App() {
	// 	const initialState = {
	// 		people: [
	// 			{
	// 				firstName: "John",
	// 				lastName: "Doe",
	// 			},
	// 			{
	// 				firstName: "Jane",
	// 				lastName: "Doe",
	// 			},
	// 		],
	// 	};

	const [count, dispatch] = useReducer(reducer, initialState);

	// const [state, dispatch] = useReducer(peopleReducer, initialState);

	// const addPerson = (person) => {
	// 	dispatch({
	// 		type: ADD_PERSON,
	// 		payload: person,
	// 	});
	// };
	return (
		<div className="App">
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

			{/* <UserReducer /> */}
			{/* <UseReducer2 /> */}

			{/* <CountContext.Provider
				value={{
					countState: count,
					countDispatch: dispatch,
				}}>
				<h1>Count - {count}</h1>
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</CountContext.Provider> */}

			{/* <FetchingData1 /> */}

			{/* <ParentComponent /> */}

			{/* <Todo /> */}
			{/* <State7 /> */}
			{/* <Effect1 /> */}
			{/* <Effect2 /> */}
			<Effect3 />
		</div>
	);
}

export default App;
