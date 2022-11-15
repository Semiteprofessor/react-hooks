/** @format */

import React from "react";

const Button = ({ handleClick, children }) => {
	console.log("Rendering Button -", children);
	return (
		<div>
			<button className="btn" onClick={handleClick}>{children}</button>
		</div>
	);
};

export default React.memo(Button);
