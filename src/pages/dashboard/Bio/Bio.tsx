export const Bio = () => {
	return (
		<div className="py-10 px-20 w-full bg-gray-50">
			<div className="card shadow rounded-md flex flex-col w-[80%] mx-auto bg-white h-full">
				<div className="card-head w-full h-20 border-b flex items-center px-10 py-11 justify-between">
					<div className="flex items-center gap-3">
						<h1 className="font-bold text-xl">All Links</h1>
						<div className="w-11 bg-blue-500 rounded-xl py-1 text-white text-center text-sm mr-10">0</div>

						<form>
							<input type="text" placeholder="Search your link" className="border rounded-md focus:border-blue-500 transition ease-in py-2 px-3 outline-none"/>
						</form>
					</div>

					<button className="bg-blue-500 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition ease-in flex items-center gap-3">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" aria-labelledby=" "><path fill-rule="evenodd" clip-rule="evenodd" d="M7 8V15H8V8H15V7H8V0H7V7H0V8H7Z" fill="currentColor"></path></svg>
						Add Link
					</button>
				</div>

				<div className="card-body flex justify-center items-center px-10 h-full">
					hello
				</div>
			</div>
		</div>
	)
}

export default Bio;