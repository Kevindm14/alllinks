import {createContext, ReactElement, useContext, useEffect, useState} from "react";
import {supabase} from "../services/supabase.ts";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
	children: ReactElement
}

interface AuthContextProps {
	session?: Session;
	signInWithGoogle?: () => Promise<unknown>;
	signOut?: () => Promise<unknown>;
	loading?: boolean;
	auth?: boolean;
}

export const AuthContext = createContext<AuthContextProps>({});

export const AuthContextProvider = ({ children }: AuthProviderProps) =>  {
	const [auth, setAuth] = useState(false);
	const [session, setSession] = useState<Session>({} as Session);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const signInWithGoogle = async () => await supabase.auth.signInWithOAuth({ provider: 'google' })
	const signOut = async () => {
		await supabase.auth.signOut()
		navigate('/login')
	}

	useEffect(() => {
		const {data:authListener} = supabase.auth.onAuthStateChange(async (_, session)=> {
			if(!session) {
				setLoading(false);
				setSession({} as Session);
				setAuth(false);

				return;
			}

			setSession(session)
			setLoading(false);
			setAuth(true);
		})

		return () => {
			authListener.subscription;
		}
	},[]);

	return (
		<AuthContext.Provider
			value={{
				session,
				signInWithGoogle,
				signOut,
				loading,
				auth
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
}