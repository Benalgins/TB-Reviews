import * as request from './request';

const BASE_URL = 'http://localhost:3030/data/reviews';

export const create = async (reviewData) => {
	const result = await request.post(BASE_URL, reviewData);
	return result;
};
