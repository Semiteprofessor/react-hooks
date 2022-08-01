/** @format */

import React, { useContext, useMemo, useRef } from "react";
import PeopleContext from "../context/peopleContext";
import "./Form.css";

import { useForm } from "../hooks";

const Form = ({ users }) => {
	const context = useContext(PeopleContext);

	const firstnameInput = useRef(null);

	const validatePersonForm = (values) => {
		let errors = {};
		if (values.firstName.trim() === "") {
			errors.firstName = "First name must not be empty";
		}
		if (values.lastName.trim() === "") {
			errors.lastName = "Last name must not be empty";
		}
		return errors;
	};

	const addPersonFromForm = () => {
		context.addPerson(values);
		firstnameInput.current.focus();
	};

	const { values, errors, handleChange, handleSubmit } = useForm(
		addPersonFromForm,
		{ firstName: "", lastName: "" },
		validatePersonForm,
	);

	// const printNumberOfPeople = () => {
	// 	console.log(`Number of people: ${context.people.length}`);
	// };

	// useMemo(() => printNumberOfPeople(), []);

	return (
		<div className="col">
			<h2>Add Person:</h2>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<input
						className={`form-control ${errors.firstName && "is-invalid"}`}
						type="text"
						placeholder="Enter Firstname"
						name="firstName"
						ref={firstnameInput}
						value={values.firstName}
						onChange={handleChange}
					/>
					{errors.firstName && (
						<div className="invalid-feedback">{errors.firstName}</div>
					)}
				</div>
				<div className="form-group mb-3">
					<input
						className={`form-control ${errors.lastName && "is-invalid"}`}
						type="text"
						placeholder="Enter Lastname"
						name="lastName"
						value={values.lastName}
						onChange={handleChange}
					/>
					{errors.lastName && (
						<div className="invalid-feedback">{errors.lastName}</div>
					)}
				</div>
				<button type="submit" className="btn btn-success">
					Add Person
				</button>
				<br />
				<br />
				<br />
			</form>
		</div>
	);
};

export default Form;
