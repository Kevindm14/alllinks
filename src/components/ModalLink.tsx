import { FormEvent, useRef } from 'react';
import {supabase} from "../services/supabase.ts";
import { v4 as uuidV4 } from 'uuid';
import {extractDomain} from "../utils/domain.ts";
import {IoCloseCircleOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	userId?: string;
}

export const ModalLink = ({ isOpen, onClose, title, userId }: ModalProps) => {
	const link = useRef<HTMLInputElement>(null)
	const navigate = useNavigate()

	if (!isOpen) return null;

	const handleOutsideClick = async (event: FormEvent) => {
		event.preventDefault();

		const urlValue = link.current?.value
		const domain = extractDomain(urlValue as string)

		const { error } = await supabase
			.from('links')
			.insert({
				id: uuidV4(),
				url: urlValue,
				name: domain,
				user_id: userId,
			})

		if (error) console.log(error)

		navigate('/bio')
		onClose()
		// window.location.reload()
	}

	return (
		<div data-modal="form" className="fixed inset-0 bg-black bg-opacity-60 overflow-y-auto h-full flex justify-center items-center transition-opacity duration-300">
			<div className="bg-white w-[700px] rounded-lg p-6 mx-5 md:mx-0">
				<div className="flex justify-between items-center">
					<h2 className="text-lg font-bold">{title}</h2>
					<button
						className="text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
						onClick={onClose}
					>
						<IoCloseCircleOutline size={25} />
					</button>
				</div>

				<form className="mt-5 grid grid-cols-4 grid-rows-2 xl:grid-rows-1 gap-7" onSubmit={handleOutsideClick}>
					<div className="col-span-4 xl:col-span-3">
						<input
							type="text"
							ref={link}
							className="bg-gray-100 w-full py-2 px-4 rounded-md hover:outline-gray-300 font-light outline-none"
							placeholder="URL"
						/>
					</div>

					<button type="submit" className="text-white col-span-4 xl:col-span-1 rounded-2xl bg-blue-500 hover:bg-blue-700 transition ease-in">Add</button>
				</form>
			</div>
		</div>
	)
}