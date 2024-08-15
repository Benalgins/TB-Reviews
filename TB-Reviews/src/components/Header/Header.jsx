import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

export default function Header() {
	const { isLoggedIn, email } = useContext(AuthContext);
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

					{isLoggedIn && (
						<div id="loged">
							<Link to="/create" className="link">
								Create a review
							</Link>
							<Link to="/logout" className="link">
								Logout
							</Link>
						</div>
					)}
					{!isLoggedIn && (
						<div id="guest">
							<li>
								<Link to="/login" className="link">
									Login
								</Link>
							</li>
							<li>
								<a>Register</a>
							</li>
						</div>
					)}
				</ul>
			</nav>
			<img className="logo-img" src="../images/logo2.png" />
		</div>
	);
}
