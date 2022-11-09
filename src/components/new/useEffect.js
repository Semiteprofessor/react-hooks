/** @format */

import React, { useState, useEffect } from "react";

const State = () => {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [fetchId, setFetchId] = useState(1);

	const handleClick = () => {
		setFetchId(id);
	};
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setPost(res);
			})
			.catch((error) => console.error(error));
	}, [fetchId]);

	return (
		<div>
			<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
			<button type="button" className="btn" onClick={handleClick}>
				Fetch Post
			</button>
			<h2>{post.title}</h2>
		</div>
	);
};

export default State;
