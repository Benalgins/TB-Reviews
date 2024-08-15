import * as request from './request';

const BASE_URL = 'http://localhost:3030/data/comments';

export const getAll = async (reviewId) => {
	const query = new URLSearchParams({
		where: `reviewId="${reviewId}"`,
		load: `owner=_ownerId:users`,
	});
	const result = await request.get(`${BASE_URL}?${query}`);
	console.log(result);
	return result;
};

export const create = async (reviewId, text) => {
	const result = await request.post(`${BASE_URL}`, { reviewId, text });
};
