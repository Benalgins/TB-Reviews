import { createContext } from 'react';
import { useState } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	const loginHandler = async (values) => {
		console.log(values);
	};
	const values = {
		loginHandler,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
