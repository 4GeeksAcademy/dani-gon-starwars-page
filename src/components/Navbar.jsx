import { Link } from "react-router-dom";
import logo from "../assets/img/light-saber_2010147.png"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const {store,dispatch}=useGlobalReducer()
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
					<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites({store.favorites.length})
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
	{store.favorites.length>0?(
		store.favorites.map(favorite=>(
			<li className="d-flex align-items-center p-2"><p class="dropdown-item m-0 p-0" >{favorite}</p><i onClick={()=>dispatch({type:"handle_favorites", payload:favorite})} class="fa-regular fa-trash-can"></i></li>
		))
	):<li><p class="dropdown-item" >Empty</p></li>}
  </ul>
</div>
				</div>
			</div>
		</nav>
	);
};