import {Loading, ModalLink} from "../../../components";
import {useModal} from "../../../hooks";
import {useAuth} from "../../../context";
import {useEffect, useState} from "react";
import {supabase} from '../../../services/supabase.ts';
import {FiEdit2} from "react-icons/fi";
import {RiDeleteBin6Line, RiLinksFill} from "react-icons/ri";
import {LuImagePlus} from "react-icons/lu";
import {ModalConfirm} from "../../../components/ModalConfirm.tsx";

interface Link {
	id: string;
	url: string;
	name: string;
	user_id: string;
	create_at: string;
}

export const Bio = () => {
	const [links, setLinks] = useState<Link[]>([])
	const { session } = useAuth();
	const { isModalOpen, openModal, closeModal } = useModal();
	const [loading, setLoading] = useState(true)
	const metadata = session?.user.user_metadata;

	const getLinks = async () => {
		const { data, error } = await supabase
			.from('links')
			.select('*')
			.filter('user_id', 'eq', session?.user.id)

		if (error) console.log(error)

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		setLinks(data)
		setLoading(false)
	}

	const deleteLink = async (id: string) => {
		const { error } = await supabase
			.from('links')
			.delete()
			.eq('id', id)

		if (error) console.log(error)

		window.location.reload()
	}

	const updateLink = async () => {
		const { error } = await supabase
			.from('links')
			.update({
				url: 'New Url'
			})
			.eq('id', '1')

		if (error) console.log(error)
	}

	useEffect(() => {
		if(!session) return;

		getLinks()
	}, []);

	return (
		<div className="w-full bg-gray-100 md:px-40 h-screen xl:px-96">
			<div className="bg-white mt-10 py-5 rounded-2xl shadow-sm mx-5 md:mx-0 px-8 md:px-16 flex gap-3">
				<img src={metadata?.avatar_url} className="rounded-full border-4 border-blue-300 hover:border-blue-400 transition ease-in w-20" alt="avatar"/>

				<div className="py-2 flex flex-col justify-around">
					<h2 className="font-extrabold text-xl">{metadata?.full_name}</h2>
					<a href="#" className="text-blue-500 hover:text-blue-700">Preview your Links</a>
				</div>
			</div>
			<div className="mx-5 mt-10 md:mx-0">
				<button
					className="bg-blue-500 text-white px-5 py-2 rounded-2xl w-full min-w-fit hover:bg-blue-700 transition ease-in flex justify-center items-center gap-3"
					onClick={() => openModal('modal1')}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-hidden="true"
						aria-labelledby=" ">
						<path fillRule="evenodd" clipRule="evenodd" d="M7 8V15H8V8H15V7H8V0H7V7H0V8H7Z" fill="currentColor"></path>
					</svg>
					Add Link
				</button>

				<ModalLink
					title='Add Link'
					isOpen={isModalOpen.modal1}
					onClose={() => closeModal('modal1')}
					userId={session?.user.id}
				/>
			</div>
			{
				loading ?
				<Loading />
				:
				links.length > 0 ?
				<div className="flex flex-col mt-5 mx-auto gap-5">
					{
						links.map(({ id, name, url }) => (
							<div key={id} className="bg-white shadow-sm rounded-2xl mx-4 md:mx-0 px-8 py-6 md:px-16">
								<div className="flex flex-col mb-2">
									<h3 className="flex gap-3 mb-1 font-bold text-sm sm:text-lg">
										{name}
										<button>
											<FiEdit2 size={16}/>
										</button>
									</h3>
									<span className="font-light flex gap-3 text-sm sm:text-md">
											{url}
										<button onClick={updateLink}><FiEdit2 size={16}/></button>
										</span>
								</div>
								<div className="flex justify-between items-center">
									<div>
										<button>
											<LuImagePlus size={20}/>
										</button>
									</div>

									<button onClick={() => openModal('modal2')}>
										<RiDeleteBin6Line size={20}/>
									</button>

									<ModalConfirm
										isOpen={isModalOpen.modal2}
										onClose={() => closeModal('modal2')}
										deleteFunction={() => deleteLink(id)}
									/>
								</div>
							</div>
						))
					}
				</div> :
				<div className="card-body flex justify-center items-center px-10 py-72">
					<div className='flex flex-col gap-6 items-center'>
						<RiLinksFill size={50} style={{ color: "#B0BEC5" }}/>
						<p className='text-center text-gray-400 font-light w-52'>Show the world who you are. Add a link to get started</p>
					</div>
				</div>
			}
		</div>
	)
}

export default Bio;