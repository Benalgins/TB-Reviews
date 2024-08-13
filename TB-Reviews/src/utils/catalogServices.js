import * as request from './request';
const BASE_URL = 'http://localhost:3030/data/reviews';
export const getAll = async () => {
	const response = await request.get(BASE_URL);
	return response;
};
