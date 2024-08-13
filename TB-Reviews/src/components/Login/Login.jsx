import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
	const { loginHandler } = useContext(AuthContext);
	const { values, onChange, onSubmit } = useForm(loginHandler, {
		email: '',
		password: '',
	});

	return (
		<div className="login-form">
			<div className="main">
				<h1>Enter your login credentials</h1>
				<h3>Enter your login credentials</h3>
				<form id="loginForm" onSubmit={onSubmit}>
					<label htmlFor="first">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your Email"
						onChange={onChange}
						value={values.email}
					/>

					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Enter your Password"
						onChange={onChange}
						value={values.password}
					/>

					<div className="wrap">
						<button type="submit">Submit</button>
					</div>
					<p>
						Not a member ? Don't wait and go to
						<Link to="/register">Register</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
