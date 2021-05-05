import { useState } from "react";

const useSetloader = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 1);

	return loading;
};

export default useSetloader;
