import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="upper-page">
			<nav>
				<ul>
					<li>
						<Link to="/home" className="link logo">
							<span>HT</span>
							<span>Reviews</span>
						</Link>
					</li>
					<li>
						<Link to="/catalog" className="link">
							<img className="catalog-img" src="../images/catalogImage.png" />
							Catalog
						</Link>
					</li>
					<li>
						<a>Login</a>
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
