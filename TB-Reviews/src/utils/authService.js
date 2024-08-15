import * as request from './request';
const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
	const result = await request.post(`${BASE_URL}/login`, { email, password });
	return result;
};

export const logout = async () => {
	const response = await request.get(`${BASE_URL}/logout`);
};

export const register = async (email, password) => {
	request.post(`${BASE_URL}/register`, { email, password });
};
