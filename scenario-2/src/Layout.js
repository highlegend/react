import { Link } from 'react-router-dom';

export default function Layout({ children }) {
	return (
		<>
			<header className="header-app">
				<nav className="nav nav-pills nav-fill gap-2 p-1 small bg-info rounded-5 shadow-sm">
					<ul>
						<li>
							<Link to="/" style={{color: "black"}}>Home</Link>
						</li>
						<li>
							<Link to="/products" style={{color: "black"}}>Products</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>{children}</main>
		</>
	);
}
