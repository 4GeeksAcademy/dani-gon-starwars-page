import { Link } from "react-router-dom";
import logo from "../assets/img/light-saber_2010147.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img src={logo} alt="STAR WARS" className="img-fluid w-25">
						</img>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};