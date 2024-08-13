import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="upper-page">
			<nav>
				<ul>
					<li>
						<Link to="/" className="link logo">
							<span>HT</span>
							<span>Reviews</span>
						</Link>
					</li>
					<li>
						<Link to="/catalog" className="link">
							Catalog
						</Link>
					</li>
					<li>
						<Link to="/login" className="link">
							Login
						</Link>
					</li>
					<li>
						<a>Register</a>
					</li>
					<li>
						<a>Logout</a>
					</li>
				</ul>
			</nav>
			<img className="logo-img" src="../images/logo2.png" />
		</div>
	);
}
