import { request } from './request';
const BASE_URL = 'http://localhost:3030/data/reviews';
export const getAll = async () => {
	const response = await request(BASE_URL);
	return response;
};
