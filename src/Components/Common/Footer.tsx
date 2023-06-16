import { Typography } from "antd"

function footer() {
	return (
		<>
			<footer className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<a href="https://github.com/fernandoleano" className="text-gray-400 hover:text-white mt-4 md:mt-0">
						</a>
					</div>
					<Typography className="text-center text-white mt-4">
						© 2023 TaskMaster. All rights reserved.
					</Typography>
				</div>
			</footer>
		</>
	)
}

export default footer
