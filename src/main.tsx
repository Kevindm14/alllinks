import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "@/context/authContext.tsx";
import {LinkContextProvider} from "@/context/linksContext.tsx";
import {Loading} from "@/components/ui/loading.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Suspense fallback={<Loading />}>
		<BrowserRouter>
			<AuthContextProvider>
				<LinkContextProvider>
					<App />
				</LinkContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</Suspense>
  ,
)
