import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as reviewService from '../../utils/reviewService';

export default function Details() {
	const { reviewId } = useParams();
	const [review, setReview] = useState({});
	useEffect(() => {
		reviewService.getOne(reviewId).then(setReview);
	}, [reviewId]);
	console.log(review);
	return (
		<section>
			<h1>Tabak details:</h1>
			<div className="details-preview">
				<img src={review.img}></img>
				<h1>{review.brand}</h1>
				<span>Flavour:</span>
				<p>{review.title}</p>
				<span>Description</span>
				<p>{review.description}</p>
			</div>
		</section>
	);
}
