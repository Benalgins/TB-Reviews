import * as request from './request';

const BASE_URL = 'http://localhost:3030/data/comments';

export const getAll = async (reviewId) => {
	const query = new URLSearchParams({
		where: `reviewId="${reviewId}"`,
	});
	const result = await request.get(`${BASE_URL}`);
	return result.filter((comment) => comment.reviewId === reviewId);
};

export const create = async (reviewId, text) => {
	const result = await request.post(`${BASE_URL}`, { reviewId, text });
};
