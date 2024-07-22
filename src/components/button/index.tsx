import "./style.scss";

export interface ButtonProps {
	caption: string;
	onClick?: () => void;
};
	
export const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className="button" onClick={props.onClick}>{props.caption}</button>
	);
};