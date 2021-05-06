import React, { useContext } from "react";
import { ThemeContext, Themes } from "../contexts/theme";
import "../styles/theme-input-toggle.scss";
import { SunIcon, MoonIcon } from "./icons";

export default function ToggleTheme() {
	const [theme, setTheme] = useContext(ThemeContext);
	const themeToggle = () => {
		console.log("ssssssss");
		setTheme(theme === Themes.dark ? Themes.light : Themes.dark);
	};

	return (
		<div>
			{" "}
			{theme === Themes.dark && <MoonIcon />}
			<form id="theme-toggle">
				<label className="switch">
					<input
						type="checkbox"
						checked={theme === Themes.dark}
						onChange={themeToggle}
					/>
					<span className="slider round"></span>
				</label>
			</form>
			{theme === Themes.light && <SunIcon />}
		</div>
	);
}
