import {NavLink} from "react-router-dom";
import {useAuth} from "../context";
import {MdSupervisorAccount} from "react-icons/md";
import {SlLogout} from "react-icons/sl";

export const SideBar = () => {
	const { signOut, session } = useAuth();
	const metadata = session?.user.user_metadata;

	const logout = async () => {
		await signOut?.();
	}

	return (
		<div className="hidden md:flex flex-col justify-between items-center py-10 bg-white shadow-md border-l border h-screen w-52 min-w-fit">
			<div className="flex flex-col gap-10 h-full px-7 w-full items-center">
				<h1 className="text-2xl font-extrabold text-center w-24">Link Connect</h1>
				<ul className="text-white">
					<li>
						<NavLink
							to="/bio"
							className={(isActive) => isActive ? "bg-blue-100 w-full border-l-8 border-blue-600 hover:bg-blue-200 transition ease-in text-blue-500 px-5 py-4 rounded-sm" : "px-5 py-2 rounded-sm"}>
							My Links
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="flex flex-col items-center border-t border-gray-300 pt-10 w-2/3">
				<img src={metadata?.avatar_url} className="rounded-full border-4 border-blue-300 hover:border-blue-400 transition ease-in" alt=""/>
				<h2 className="mt-3 font-bold">{metadata?.full_name}</h2>

				<ul className="mt-10">
					<li>
						<NavLink className="hover:text-blue-700 transition ease-in flex gap-2" to="/bio">
							<MdSupervisorAccount size={20} /> My account
						</NavLink>
					</li>
					<li>
						<button className="hover:text-blue-700 mt-5 transition ease-in flex gap-2" onClick={logout}>
							<SlLogout size={20} /> Logout
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}