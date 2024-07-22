import React from "react";
import { Button, ButtonProps } from "../button";
import "./style.scss";

interface ButtonWithLabelProps extends ButtonProps {
	label: string;
};
	
export const ButtonWithLabel: React.FC<ButtonWithLabelProps> = (props) => {
	return (
		<div className="button-with-label">
			<p className="label-text">{props.label}</p>
			<Button {...props}/>
		</div>
	);
};