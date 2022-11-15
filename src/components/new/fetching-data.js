/** @format */

import React, { useState, useEffect } from "react";

const Fetch = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setPosts(res);
				setLoading(false);
				setError("");
			})
			.catch((err) => {
				console.error(err);
				setError("Something went wrong!");
				setLoading(false);
				setPosts([]);
			});
	}, []);

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<h2>{error}</h2>
			) : (
				posts.map((post) => <h2 key={post.id}>{post.title}</h2>)
			)}

			{/* <h1>{posts.title}</h1> */}
		</div>
	);
};

export default Fetch;
