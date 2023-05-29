import {Navigate, Outlet} from "react-router-dom";
import {useAuthContext} from "../context/authContext.tsx";

export const PrivateRoute = () => {
	const { user } = useAuthContext();

	return (
		user ? <Outlet /> : <Navigate to="/login" />
	)
}