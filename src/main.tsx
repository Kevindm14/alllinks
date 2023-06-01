import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/authContext.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</BrowserRouter>
	</Suspense>
  ,
)
