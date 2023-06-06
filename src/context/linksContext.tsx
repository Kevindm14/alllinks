import {createContext, useContext} from "react";

interface LinkContextProps {
	loading: boolean;
}

export const LinkContext = createContext<LinkContextProps>({
	loading: true
});


export const LinkContextProvider = ({children}: any) => {

	return (
		<LinkContext.Provider
			value={{
				loading: true
			}}
		>
			{children}
		</LinkContext.Provider>
	)
}

export const useLinks = () => {
	return useContext(LinkContext);
}