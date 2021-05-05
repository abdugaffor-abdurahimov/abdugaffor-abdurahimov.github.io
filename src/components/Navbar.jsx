import React from "react";
import "../styles/navbar.scss";
import ThemeToggler from "./ThemeToggler";
import Link from "../layouts/Link";
import { MoonIcon, SunIcon } from "../components/icons";
const Navbar = () => {
	return (
		<div className="nav">
			<div className="nav-header">
				<div className="nav-title">
					<MoonIcon />
					<ThemeToggler />
					<SunIcon />
				</div>
			</div>

			<div className="nav-links">
				<Link to="about">About</Link>
				<Link to="skills">Skills</Link>
				<Link to="projects">Projects</Link>
				<Link to="contact">Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
