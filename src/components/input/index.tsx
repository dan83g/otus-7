import { ChangeEvent } from "react";

export interface InputProps {
	caption: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = (props) => {
	return (
        <div>
            <label>
                {props.caption}
                <input type="text" value={props.value} onChange={props.onChange} />
            </label>
        </div>
	);
};

