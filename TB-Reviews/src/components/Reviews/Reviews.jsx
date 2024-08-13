export default function Reviews({ title, description, imgUrl }) {
	return (
		<div className="previewList">
			<div className="previewInfo">
				<h2 style={{ color: 'pink' }}>{title}</h2>
				<h3>Description</h3>
				<h6>{description}</h6>
				<img className="img-review" src={imgUrl} />
			</div>
		</div>
	);
}
