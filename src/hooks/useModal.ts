import {useState} from "react";

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState({
		modal1: false,
		modal2: false,
	});

	const openModal = (modalKey: string) => {
		setIsModalOpen((prevModals) => ({
			...prevModals,
			[modalKey]: true,
		}));
	}
	const closeModal = (modalKey: string) => {
		setIsModalOpen((prevModals) => ({
			...prevModals,
			[modalKey]: false,
		}));
	}

	return {
		isModalOpen,
		openModal,
		closeModal
	}
}