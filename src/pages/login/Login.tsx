import {NavLink} from "react-router-dom";
import GoogleIcon from "../../assets/social_icons/google.svg";
import TwitterIcon from "../../assets/social_icons/twitter_bird.svg";
import FacebookIcon from "../../assets/social_icons/facebook.svg";
import {useAuthContext} from "../../context/authContext.tsx";

export const Login = () => {
	const { signInWithGoogle } = useAuthContext();

	return (
		<div className="h-screen md:flex justify-between">
			<div className="w-1/2 flex flex-col space-y-3 justify-center items-center">
				<div className="flex flex-col justify-center w-[330px] text-center gap-5">
					<h1 className="text-5xl font-extrabold mb-4">Sign In</h1>
					<p className="font-light mb-4">Login on the Below</p>
					<div className="flex gap-4 justify-center items-center mb-5">
						<button onClick={signInWithGoogle}>
							<img src={GoogleIcon} alt="Google Login" className="border rounded-full border-gray w-10 p-1"/>
						</button>
						<a href="#">
							<img src={TwitterIcon} alt="Twitter Login" className="border rounded-full border-gray w-10 p-1"/>
						</a>
						<a href="#">
							<img src={FacebookIcon} alt="Facebook Login" className="border rounded-full border-gray w-10 p-1"/>
						</a>
					</div>
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 text-sm bg-white font-light">or</span>
						</div>
					</div>

					<form id="signIn-form">
						<div className="flex flex-col gap-4">
							<div className="grid gap-2 md:grid md:grid-cols-12">
								<div className="flex space-x-2 justify-between col-span-12">
									<label htmlFor="email" className="block text-gray text-sm">Email</label>
								</div>
								<div className="col-span-12">
									<div className="relative">
										<input type="email" id="email" name="email" autoComplete="email" placeholder="you@example.com" className="block box-border w-full rounded-md border border-gray transition-all text-gray focus:shadow-md outline-none focus:ring-2 focus:ring-purple-100 focus:border-b-gray px-4 py-2"/>
									</div>
								</div>
							</div>

							<div className="grid gap-2 md:grid md:grid-cols-12">
								<div className="flex space-x-2 justify-between col-span-12">
									<label htmlFor="password" className="block text-gray text-sm">Password</label>
								</div>
								<div className="col-span-12">
									<div className="relative">
										<input type="password" id="password" name="password" autoComplete="current-password" placeholder="*********" className="block box-border w-full rounded-md border border-gray transition-all text-gray focus:shadow-md outline-none focus:ring-2 focus:ring-purple-100 focus:border-b-gray px-4 py-2"/>
									</div>
								</div>
							</div>

							<button form="signIn-form" className="relative bg-purple-300 text-white py-2 rounded-md hover:bg-purple-950 transition ease-in outline-none">Sign In</button>
						</div>
					</form>
				</div>
			</div>
			<div className="bg-purple-300 w-1/2 flex flex-col text-center items-center mx justify-center space-y-8 h-full">
				<h1 className="text-5xl font-extrabold text-white">Hello, Friend!</h1>
				<p className="text-white max-w-xs text-lg font-light">Enter your personal details and start journey with us</p>
				<NavLink to={"/signup"} className="border-2 hover:bg-white hover:text-purple-300 transition ease-in border-white text-white px-10 py-2 rounded-md">SIGN UP</NavLink>
			</div>
		</div>
	)
};

export default Login;