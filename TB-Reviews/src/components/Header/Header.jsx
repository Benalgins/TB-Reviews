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
							<li>
								<Link to="/create" className="link">
									Create a review
								</Link>
							</li>
							<li>
								<Link to="/logout" className="link">
									Logout
								</Link>
							</li>
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
								<Link to="/register" className="link">
									Register
								</Link>
							</li>
						</div>
					)}
				</ul>
			</nav>
			<img className="logo-img" src="../images/logo2.png" />
		</div>
	);
}
