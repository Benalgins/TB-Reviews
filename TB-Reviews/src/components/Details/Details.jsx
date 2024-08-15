import { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as reviewService from '../../utils/reviewService';
import useForm from '../../hooks/useForm';
import * as commentService from '../../utils/commentService';
import AuthContext from '../Context/AuthContext';

export default function Details() {
	const { reviewId } = useParams();
	const { email } = useContext(AuthContext);
	const [review, setReview] = useState({});
	const [comments, setComments] = useState([]);
	useEffect(() => {
		reviewService.getOne(reviewId).then(setReview);
		commentService.getAll(reviewId).then(setComments);
		console.log(comments);
	}, [reviewId]);

	const initialValues = useMemo(
		() => ({
			comment: '',
		}),
		[]
	);

	const addCommentSubmit = async (values) => {
		let newComment = await commentService.create(reviewId, values.comment);
		newComment = { ...newComment, username: email };
		console.log(newComment);
		return [...comments, setComments(newComment)];
	};
	const { values, onChange, onSubmit } = useForm(addCommentSubmit, {
		comment: '',
	});

	return (
		<section>
			<h1>Tabak details:</h1>
			<div className="details-preview">
				<img src={review.img}></img>
				<span>Brand:</span>
				<h1>{review.brand}</h1>
				<span>Flavour:</span>
				<p>{review.title}</p>
				<span>Description:</span>
				<p>{review.description}</p>
				<span className="comments-span">Comments:</span>
				<form className="form" onSubmit={onSubmit}>
					<textarea
						name="comment"
						value={values.comment}
						onChange={onChange}
						placeholder="Add a comment"
					></textarea>
					<input className="btn submit" type="submit" value="Add Comment" />
				</form>
				{/* {comments.map({})} */}
				<section className="comments">Peter: This is a nice flavour!</section>
				<button className="btn-edit">Edit</button>
				<button className="btn-delete">Delete</button>
			</div>
		</section>
	);
}
