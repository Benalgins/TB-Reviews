import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import { useContext, useEffect } from 'react';
import * as authService from '../../utils/authService';

export default function Logout() {
	const navigate = useNavigate();
	const { logoutHandler } = useContext(AuthContext);
	useEffect(() => {
		authService
			.logout()
			.then(() => logoutHandler())
			.catch(() => navigate('/'));
	});

	return null;
}
