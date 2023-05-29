import {createContext, useContext, useEffect, useState} from "react";
import {supabase} from "../services/supabase.ts";
import { useNavigate } from "react-router-dom";

type Props = {
	children: string | JSX.Element | JSX.Element[]
}

interface User {
	avatar_url: string;
	email: string;
	id: string;
	email_verified: boolean;
	full_name: string;
	iss: string;
	name: string;
	picture: string;
	provider_id: string;
	sub: string;
}

type AuthContextProps = {
	user: User | undefined;
	signInWithGoogle?: () => Promise<void>;
	signOut?: () => Promise<void>;
}

const defaultState: AuthContextProps = {
	user: undefined,
}

export const AuthContext = createContext<AuthContextProps>(defaultState);

export const AuthContextProvider = ({ children }: Props) =>  {
	const navigate = useNavigate();
	const [user, setUser] = useState<User>();

	const signInWithGoogle = async () => {
		const { error } = await supabase.auth.signInWithOAuth(
			{ provider: 'google' }
		)

		if (error) {
			console.log('Error: ', error)
			return
		}
	}

	const signOut = async () => {
		const { error } = await supabase.auth.signOut()

		if (error) console.log('Error: ', error)

		navigate('/login');
	}

	useEffect(() => {
		const {data:authListener} = supabase.auth.onAuthStateChange(async (_, session)=> {
			if(session == null) {
				navigate('/login')

				return
			}

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			setUser(session?.user.user_metadata)

			navigate('/dashboard')
		})
		return ()=>{
			authListener.subscription;
		}
	},[]);

	const valueToExport: AuthContextProps = {
		user,
		signInWithGoogle,
		signOut,
	}

	return (
		<AuthContext.Provider value={valueToExport}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuthContext = () => {
	return useContext(AuthContext);
}