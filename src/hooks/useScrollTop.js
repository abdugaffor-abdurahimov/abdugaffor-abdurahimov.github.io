import { useEffect } from "react";
import { useLocation } from "react-router";

const useScrollTop = () => {
	const location = useLocation();
	const scrollToTop = () => window.scroll(0, 0);

	useEffect(() => {
		scrollToTop();

		return window.removeEventListener("scroll", scrollToTop);
	}, [location]);
};

export default useScrollTop;
