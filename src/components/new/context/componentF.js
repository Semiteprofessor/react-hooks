/** @format */

import React from "react";
import { LoginContext, UserContext } from "../../../App";

const ComponentF = () => {
	return (
		<div>
			<UserContext.Consumer>
				{(user) => {
					return (
						<LoginContext.Consumer>
							{(login) => {
								return (
									<div>
										User context value {user} while Login context value{" "}
										{login.username} {login.password}{" "}
									</div>
								);
							}}
						</LoginContext.Consumer>
					);
				}}
			</UserContext.Consumer>
		</div>
	);
};

export default ComponentF;
