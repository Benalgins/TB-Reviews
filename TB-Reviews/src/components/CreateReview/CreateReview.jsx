import { useState } from 'react';
import * as reviewService from '../../utils/reviewService';
import useForm from '../../hooks/useForm';

export default function CreateReview() {
	const [data, setData] = useState({});
	const createReview = async (value) => {
		setData(values);
		const response = await reviewService.create(value);
	};
	const { values, onChange, onSubmit } = useForm(createReview, {
		brand: '',
		title: '',
		description: '',
		img: '',
		suggestions: '',
	});
	return (
		<section id="create-review">
			<form className="container" onSubmit={onSubmit}>
				<h1>Create a Review</h1>
				<label htmlFor="first">Brand:</label>
				<input
					type="text"
					id="brand"
					name="brand"
					placeholder="Enter brand manufacturer"
					onChange={onChange}
					//values={values.brand}
				/>
				<label htmlFor="flavour">Flavour:</label>
				<input
					type="text"
					id="title"
					name="title"
					placeholder="Enter game flavour"
					onChange={onChange}
					//value={values.title}
				/>
				<label htmlFor="description">Description:</label>
				<input
					type="text"
					id="description"
					name="description"
					placeholder="Enter  a description"
					onChange={onChange}
					//value={values.description}
				/>
				<label htmlFor="first">Image link:</label>
				<input
					type="text"
					id="imageUrl"
					name="img"
					placeholder="Upload a photo"
					onChange={onChange}
					//value={values.imageUrl}
				/>
				<label htmlFor="first">Suggestions:</label>
				<textarea
					name="suggestions"
					id="suggestions"
					onChange={onChange}
					//value={values.suggestions}
				></textarea>
				<input className="btn submit" type="submit" value="Create review" />
			</form>
		</section>
	);
}
