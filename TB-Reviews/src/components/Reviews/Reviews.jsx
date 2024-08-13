export default function Reviews({ title, description }) {
	return (
		<div className="previewList">
			<div className="previewInfo">
				<h2 style={{ color: 'pink' }}>{title}</h2>
				<h3>Description</h3>
				<h6>{description}</h6>
			</div>
		</div>
	);
}
