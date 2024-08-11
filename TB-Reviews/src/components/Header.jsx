import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="upper-page">
			<header>
				<h1>
					<div className="logo">
						<span className="ht">HT</span>
						<span className="review">Review</span>
					</div>
				</h1>
				<nav className="navigation-bar">
					<a href="/Catalog" className="menu-item">
						Catalog
					</a>
					<a href="/Contact" className="menu-item">
						Contacts
					</a>
				</nav>
			</header>
		</div>
	);
}
