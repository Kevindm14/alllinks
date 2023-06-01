import {Navigate} from "react-router-dom";
import {useAuth} from "../context/authContext.tsx";

export const PrivateRoute = ({ children }) => {
	const { loading, session } = useAuth();

	if(loading) return <h1>Loading...</h1>
	if(!session) return <Navigate to="/login" />

	return children
}