import React, {useActionState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const navigate = useNavigate()
	const handleLogout = () => {
		actions.logout()
		navigate("/")
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
				{store.auth ? (
				<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
				) : null}
				</div>
			</div>
		</nav>
	);
};
