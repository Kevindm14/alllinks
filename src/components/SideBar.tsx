import {NavLink} from "react-router-dom";
import {useAuth} from "../context";
import {MdSupervisorAccount} from "react-icons/md";
import {SlLogout} from "react-icons/sl";
import {AiOutlineHome, AiOutlineMenu} from "react-icons/ai";
import {IoShareSocialSharp} from "react-icons/io5";

export const SideBar = () => {
	const { signOut, session } = useAuth();
	const metadata = session?.user.user_metadata;

	const logout = async () => {
		await signOut?.();
	}

	return (
		<div className="flex w-full justify-between items-center py-10 bg-white shadow-md border-l border min-w-fit lg:w-72 lg:flex-col px-5 lg:px-0">
			<div className="flex lg:flex-col gap-10 h-full w-full items-center">
				<div className="flex items-center gap-3 text-blue-500">
					<IoShareSocialSharp size={30} />
					<h1 className="font-extrabold uppercase text-sm">Link Connect</h1>
				</div>
				<NavLink
					to="/bio"
					className={(isActive) => isActive ? "hidden lg:block border-l-8 border-blue-600 gap-3 w-full transition ease-in text-blue-500 px-12 font-light" : "px-5 py-2 rounded-sm"}>
					<div className="flex items-center gap-3 justify-center rounded-md bg-blue-100 py-3">
						<AiOutlineHome />
						<span className="">My Links</span>
					</div>
				</NavLink>
			</div>

			<div className="lg:hidden">
				<AiOutlineMenu size={30}/>
			</div>

			<div className="hidden lg:flex flex-col items-center border-t border-gray-300 pt-10 w-2/3">
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