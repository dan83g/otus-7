import { FC } from "react";
import { UserProps } from "../types";
import "../style.scss";

export const CardInfo: FC<UserProps> = (props) => {
	return (
		<div className="info">
			<p className="list-item">Username: {props.username}</p>
			<p className="list-item">Phone: {props.phone}</p>
			<p className="list-item">Website: {props.website}</p>
		</div>
	);
};