/** @format */

import React, { useState } from 'react';

const Test = () => {
	const [people, setPeople] = useState([
		{
			id: 1,
			firstName: 'Taiwo',
			lastName: 'Olapade',
		},
		{
			id: 2,
			firstName: 'Aisha',
			lastName: 'Olopade',
		},
	]);

	const [person, setPerson] = useState({
		firstName: '',
		lastName: '',
	});

	const handleChange = (e) => {
		setPerson({
			...person,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (person.firstName.trim() === '' || person.lastName.trim() === '') {
			return;
		}

		const newPerson = {
			firstName: person.firstName.trim(),
			lastName: person.lastName.trim(),
		};

		setPeople([...people, newPerson]);

		person.firstName = '';
		person.lastName = '';
	};
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mb-3">
						<h2>Add People</h2>
						<hr />
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Enter First Name"
									name="firstName"
									value={person.firstName}
									onChange={handleChange}
								/>
								<input
									type="text"
									className="form-control"
									placeholder="Enter Last Name"
									name="lastName"
									value={person.lastName}
									onChange={handleChange}
								/>
								<button className="btn btn-primary" type="submit">
									Add Name
								</button>
							</div>
						</form>
					</div>
					<div className="col-md-6">
						<h2>People's List</h2>
						<hr />
						{people.map((p) => (
							<div key={p.id}>
								<p>
									{p.firstName} {p.lastName}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Test;
