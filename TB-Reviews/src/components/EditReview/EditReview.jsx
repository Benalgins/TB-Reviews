import { useEffect, useState } from 'react';
import * as reviewService from '../../utils/reviewService';
import useForm from '../../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateReview() {
	const navigate = useNavigate();
	const { reviewId } = useParams();
	const [data, setData] = useState({
		brand: '',
		title: '',
		description: '',
		img: '',
		suggestions: '',
	});
	const editReview = async (value) => {
		setData(values);
		try {
			await reviewService.edit(reviewId, value);
		} catch (error) {
			console.log(error);
		}
		navigate('/');
	};
	useEffect(() => {
		reviewService.getOne(reviewId).then((result) => {
			setData(result);
		});
	}, [reviewId]);

	const { values, onChange, onSubmit } = useForm(editReview, data);
	return (
		<section id="create-review">
			<form className="container" onSubmit={onSubmit}>
				<h1>Edit your Review</h1>
				<label htmlFor="first">Brand:</label>
				<input
					type="text"
					id="brand"
					name="brand"
					placeholder="Enter brand manufacturer"
					onChange={onChange}
					value={values.brand}
				/>
				<label htmlFor="flavour">Flavour:</label>
				<input
					type="text"
					id="title"
					name="title"
					placeholder="Enter game flavour"
					onChange={onChange}
					value={values.title}
				/>
				<label htmlFor="description">Description:</label>
				<input
					type="text"
					id="description"
					name="description"
					placeholder="Enter  a description"
					onChange={onChange}
					value={values.description}
				/>
				<label htmlFor="first">Image link:</label>
				<input
					type="text"
					id="img"
					name="img"
					placeholder="Upload a photo"
					onChange={onChange}
					value={values.img}
				/>
				<label htmlFor="first">Suggestions:</label>
				<textarea
					name="suggestions"
					id="suggestions"
					onChange={onChange}
					value={values.suggestions}
				></textarea>
				<input className="btn submit" type="submit" value="Create review" />
			</form>
		</section>
	);
}
