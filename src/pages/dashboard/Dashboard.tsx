import {useAuthContext} from "../../context/authContext.tsx";

export const Dashboard = () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { user: { full_name }, signOut } = useAuthContext();

	return (
		<>
			<h1>Dashboard, {full_name}</h1>
			<button onClick={signOut}>Sign Out</button>
		</>
	)
}

export default Dashboard;