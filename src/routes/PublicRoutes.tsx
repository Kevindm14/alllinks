import {Navigate, Outlet} from "react-router-dom";
import {useAuthContext} from "../context/authContext.tsx";

export const PublicRoute = () => {
	const { user } = useAuthContext();

	return (
		user ? <Navigate to="/dashboard" /> : <Outlet />
	)
}