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
		localStorage.setItem('accessToken', result.accessToken);
		navigate('/');
	};

	const logoutHandler = () => {
		setAuth({});
		localStorage.removeItem('accessToken');
		navigate(Path.Home);
	};

	const values = {
		logoutHandler,
		loginHandler,
		isLoggedIn: !!auth.email,
		email: auth.email,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;

// accessToken
// :
// "aad39e40240a5bf3ea2457e6b9b8f26f199530a29e6934fa820521b030851f42"
// email
// :
// "peter@abv.bg"
// username
// :
// "Peter"
// _id
// :
// "35c62d76-8152-4626-8712-eeb96381bea8"
