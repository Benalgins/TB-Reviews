import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<h1>
				<a className="home" href="/">
					HT-Reviews
				</a>
			</h1>
			<nav>
				<a href="/Catalog">Catalog</a>
				<a href="/Contact">Contact</a>
			</nav>
		</header>
	);
}
