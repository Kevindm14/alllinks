import {IoCloseCircleOutline} from "react-icons/io5";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	deleteFunction: () => void;
}

export const ModalConfirm = ({ isOpen, onClose, deleteFunction }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div data-modal="confirm" className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out overflow-y-auto h-full flex justify-center items-center">
			<div className="bg-white w-[500px] rounded-lg mx-5 sm:mx-0">
				<div className="grid grid-cols-12 bg-gray-300 py-2 px-5 rounded-t-md">
					<h2 className="col-span-11 text-center">Delete</h2>
					<button
						className="text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out justify-self-end col-span-1"
						onClick={onClose}
					>
						<IoCloseCircleOutline size={25} />
					</button>
				</div>

				<div className="px-5 py-10 text-center">
					<p className="text-gray-500">Are you sure you want to delete this link?</p>
				</div>

				<div className="grid grid-cols-12 px-5 mb-4 gap-3">
					<button onClick={onClose} className="col-span-6 border py-2 rounded-2xl">No</button>
					<button onClick={deleteFunction} className="col-span-6 border py-2 rounded-2xl bg-blue-500 text-white">Yes</button>
				</div>
			</div>
		</div>
	)
}