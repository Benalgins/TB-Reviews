import { createContext } from 'react';
import { useState } from 'react';
import * as authService from '../../utils/authService.js';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [auth, setAuth] = useState({});

	const loginHandler = async ({ email, password }) => {
		const result = await authService.login(email, password);
		setAuth(result);
		navigate('/');
	};
	console.log(auth);

	const values = {
		loginHandler,
		isLoggedIn: !!auth.email,
		email: auth.email,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
