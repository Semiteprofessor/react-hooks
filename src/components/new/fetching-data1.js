/** @format */

import React, { useEffect, useReducer } from "react";
import * as actionTypes from "./types";

const initialState = {
	loading: true,
	error: "",
	post: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.FETCH_SUCCESS:
			return {
				loading: false,
				post: action.payload,
				error: "",
			};

		case actionTypes.FETCH_ERROR:
			return {
				loading: false,
				post: [],
				error: "Something went wromg!",
			};
		default:
			return state;
	}
};

const FetchData1 = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/posts");
				const data = await res.json();

				dispatch({
					type: actionTypes.FETCH_SUCCESS,
					payload: data,
				});
			} catch (error) {
				dispatch({ type: actionTypes.FETCH_ERROR });
			}
		};
		fetchData();
	}, []);

	return <div>
        {state.loading ? <div>Loading...</div> : state.error ? <h2>{state.error}</h2> : state.post.map(post => (
            <h2 key={post.id}>{post.title}</h2>
        )) }
    </div>;
};

export default FetchData1;
