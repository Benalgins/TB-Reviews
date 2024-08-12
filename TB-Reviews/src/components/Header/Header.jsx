import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="upper-page">
			<nav>
				<ul>
					<li>
						<a className="ht">HT</a>
						<a className="Reviews">Reviews</a>
					</li>
					<li>
						<a>Catalog</a>
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
				<img src="../images/logo2.png" />
			</nav>
		</div>
	);
}
