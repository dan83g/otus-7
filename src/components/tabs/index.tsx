import { Button } from "../button";
import "./style.scss";

interface TabsProps {
	onChange: (tab: boolean) => void;
};

export const Tabs: React.FC<TabsProps> = (props) => {
	return (
		<div className="tab">
			<Button caption="form" onClick={() => props.onChange(false)} />
			<Button caption="users" onClick={() => props.onChange(true)} />
		</div>
	);
};