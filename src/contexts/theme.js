import { createContext } from "react";

export const Themes = {
	dark: "dark",
	light: "light",
};

export const ThemeContext = createContext();

export const initialTheme = Themes.light;
