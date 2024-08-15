import { useEffect, useState } from 'react';

import { request } from '../../utils/request';
import * as catalogServices from '../../utils/catalogServices';
import Reviews from '../Reviews/Reviews';

export default function Catalog() {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		catalogServices.getAll().then((result) => setReviews(result));
	}, []);
	return (
		<div className="catalog-container">
			<h1 className="header">This is the Catalog section</h1>

			<div className="catalog-page">
				{reviews.map((review) => (
					<Reviews
						key={review._id}
						title={review.title}
						description={review.description}
						imgUrl={review.img}
						id={review._id}
					/>
				))}
			</div>
		</div>
	);
}
