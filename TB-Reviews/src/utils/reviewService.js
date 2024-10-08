import * as request from './request';

const BASE_URL = 'http://localhost:3030/data/reviews';

export const create = async (reviewData) => {
	const result = await request.post(BASE_URL, reviewData);
	return result;
};

export const getOne = async (reviewId) => {
	const result = await request.get(BASE_URL + '/' + reviewId);
	return result;
};

export const edit = async (reviewId, data) => {
	console.log(reviewId);
	const result = await request.put(BASE_URL + '/' + reviewId, data);
};
export const remove = async (reviewId) =>
	await request.remove(`${BASE_URL}/${reviewId}`);
