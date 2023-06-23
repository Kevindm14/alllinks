import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toastify = () => {
	return (
		<div>
			<ToastContainer autoClose={3000} limit={1}/>
		</div>
	)
}