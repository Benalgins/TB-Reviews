import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import useForm from '../../hooks/useForm';

const RegisterFromKeys = {
	username: 'username',
	Email: 'email',
	Password: 'password',
	ConfirmPassword: 'confirm-password',
};

export default function Register() {
	const { registerHandler } = useContext(AuthContext);
	const { values, onChange, onSubmit } = useForm(registerHandler, {
		[RegisterFromKeys.username]: '',
		[RegisterFromKeys.Email]: '',
		[RegisterFromKeys.Password]: '',
		[RegisterFromKeys.ConfirmPassword]: '',
	});
	return (
		<section>
			<h1>Register</h1>
			<form className="register" onSubmit={onSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Enter your username"
					onChange={onChange}
					value={values[RegisterFromKeys.username]}
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email address"
					onChange={onChange}
					value={values[RegisterFromKeys.Email]}
				/>
				<label htmlFor="email">Password:</label>
				<input
					type="password"
					name="password"
					id="register-password"
					onChange={onChange}
					value={values[RegisterFromKeys.Password]}
				/>
				<label htmlFor="con-pass">Confirm Password:</label>
				<input
					type="password"
					name="confirm-password"
					id="confirm-password"
					onChange={onChange}
					value={values[RegisterFromKeys.ConfirmPassword]}
				/>
				<input className="btn submit" type="submit" value="Register" />

				<p className="field">
					<span>
						If you already have profile click <a href="/login#">here</a>
					</span>
				</p>
			</form>
		</section>
	);
}
