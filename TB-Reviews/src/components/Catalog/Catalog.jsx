import { useEffect, useState } from 'react';

import { request } from '../../utils/request';
import * as catalogServices from '../../utils/catalogServices';
export default function Catalog() {
	const [reviews, setReviews] = useState();
	useEffect(() => {
		catalogServices.getAll().then((result) => setReviews(result));
	}, []);
	console.log(reviews);
	return (
		<div>
			<h1 className="header">This is the Catalog section</h1>

			<div className="catalog-page">
				<div className="catalog-description">
					<h3>Item Title</h3>
					<p>Short description of the item.</p>
				</div>
			</div>
		</div>
	);
}
