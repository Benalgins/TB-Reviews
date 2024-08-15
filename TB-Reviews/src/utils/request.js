const buildOptions = (data) => {
	const options = {};
	if (data) {
		options.body = JSON.stringify(data);
		options.headers = {
			'content-type': 'application/json',
		};

		const token = localStorage.getItem('accessToken');
		console.log(options.headers);
		if (token) {
			options.headers = {
				...options.headers,
				'X-Authorization': token,
			};
		}

		return options;
	}
};

export const request = async (method, url, data) => {
	const response = await fetch(url, {
		...buildOptions(data),
		method,
	});
	const result = await response.json();
	//console.log(result);
	return result;
};
export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
