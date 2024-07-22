import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from '../input';
import './style.scss';

interface FormProps {
    onUserAddition: (user: any) => void; // Принимаем функцию для обновления состояния верхнего компонента
}

export const Form: React.FC<FormProps> = ({ onUserAddition }) => {
	const [username, setUsername] = useState<string>('');	
	const [phone, setPhone] = useState<string>('');
	const [website, setWebsite] = useState<string>('');

	const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPhone(event.target.value);
	};

	const handlewebsiteChange = (event: ChangeEvent<HTMLInputElement>) => {
		setWebsite(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST',
			body: JSON.stringify({
				username,
				phone,
				website,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		.then((response) => response.json())
		.then((user) => onUserAddition(user));
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<Input caption="Username:" value={username} onChange={handleUsernameChange} />
			<Input caption="Phone:" value={phone} onChange={handlePhoneChange} />
			<Input caption="Website:" value={website} onChange={handlewebsiteChange} />
			<button className='button' type="submit">Submit</button>
		</form>
	);
};