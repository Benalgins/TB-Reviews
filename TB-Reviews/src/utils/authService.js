import * as request from './request';
const BASE_URL = 'http://localhost:3030/users/login';

export const login = async (email, password) => {
	console.log(email, password);
	const result = await request.post(BASE_URL, { email, password });
	return result;
};
