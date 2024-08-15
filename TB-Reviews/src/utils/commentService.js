import * as request from './request';

const BASE_URL = 'http://localhost:3030/data/comments';

export const getAll = async (reviewId) => {
	const query = new URLSearchParams({
		where: `reviewId="${reviewId}"`,
		load: 'username=_ownerId:users',
	});
	const result = await request.get(`${BASE_URL}`);
	console.log(result);
	return result;
};
