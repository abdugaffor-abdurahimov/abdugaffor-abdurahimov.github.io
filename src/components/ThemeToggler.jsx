import React, { useContext } from "react";
import { ThemeContext, Themes } from "../contexts/theme";
import "../styles/theme-input-toggle.scss";
import { SunIcon, MoonIcon } from "./icons";

export default function ToggleTheme() {
	const [theme, setTheme] = useContext(ThemeContext);
	const themeToggle = () => {
		setTheme(theme === Themes.dark ? Themes.light : Themes.dark);
	};

	return (
		<div id="theme-toggle">
			<input
				onChange={themeToggle}
				type="checkbox"
				className="checkbox"
				id="chk"
			/>
			<label className="label" htmlFor="chk">
				<MoonIcon />
				<SunIcon />
				<div className="ball"></div>
			</label>
		</div>
	);
}
