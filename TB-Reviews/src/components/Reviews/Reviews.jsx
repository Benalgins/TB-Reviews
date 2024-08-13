export default function Reviews({ title, description }) {
	return (
		<div className="previewList">
			<div className="previewInfo">
				<h1 style={{ color: 'pink' }}>Title</h1>
				<h5 style={{ color: 'pink' }}>{title}</h5>
				<h3>Description</h3>
				<h6>{description}</h6>
			</div>
		</div>
	);
}
