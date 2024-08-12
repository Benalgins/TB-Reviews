import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="upper-page">
			<header>
				<h1>
					<div className="logo">
						<h1>
							<Link className="ht" to="/">
								HT
							</Link>
						</h1>
						<h1>
							<Link className="review" to="/">
								Review
							</Link>
						</h1>
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
