/** @format */

import React, { useEffect, useMemo, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import axios from "axios";
import "./useState.css";
import { Pagination } from "antd";
import { dummyData } from "../data";

const UseState = () => {
	const [active, setActive] = useState(false);
	const [pageSize, setPageSize] = useState(12);
	const [current, setCurrent] = useState(1);

	const paginatedData = useMemo(() => {
		const lastIndex = current * pageSize;
		const firstIndex = lastIndex - pageSize;

		return dummyData.slice(firstIndex, lastIndex);
	}, [current, pageSize, dummyData]);

	return (
		<div className="container">
			<div className="top">
				<div
					className="toggle"
					onClick={() => {
						setActive(!active);
					}}>
					{active ? (
						<BsToggleOn style={{ color: "green" }} />
					) : (
						<BsToggleOff style={{ color: "gray" }} />
					)}
				</div>
			</div>
			<div className="pagination">
				<Pagination
					onShowSizeChange={setPageSize}
					pageSize={pageSize}
					total={dummyData.length}
					showTotal={(total, range) =>
						`${range[0]}-${range[1]} of ${total} items`
					}
					defaultPageSize={pageSize}
					defaultCurrent={current}
					onChange={setCurrent}
				/>
			</div>
			<div className="bottom">
				{paginatedData.map((data) => (
					<div>
						{active ? (
							<div className="card" key={data.id}>
								<h2>{data.title}</h2>
								<p>{data.body}</p>
							</div>
						) : null}
					</div>
				))}
			</div>
			<div className="pagination">
				<Pagination
					onShowSizeChange={setPageSize}
					pageSize={pageSize}
					total={dummyData.length}
					showTotal={(total, range) =>
						`${range[0]}-${range[1]} of ${total} items`
					}
					defaultPageSize={pageSize}
					defaultCurrent={current}
					onChange={setCurrent}
				/>
			</div>
		</div>
	);
};

export default UseState;
