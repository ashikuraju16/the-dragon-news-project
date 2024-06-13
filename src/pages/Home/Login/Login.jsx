import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<div className="flex w-full lg:w-5/6 mx-auto  max-sm:mx-2 justify-end">
			<div className="mt-10 w-full max-sm:mt-4  sm:my-6 sm:mx-2 lg:mx-0 font-poppins">
				<div className="flex justify-between max-sm:flex-col max-sm:space-y-5 lg:flex-row lg:space-y-0">
					<div className="flex space-x-4 text-xl mt-2 text-[#706f6f] justify-center lg:justify-start">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/career">Career</NavLink>
					</div>
					<div className="flex space-x-4 max-sm:space-x-0 max-sm:space-y-2 max-sm:flex-col max-sm:items-center lg:space-y-0 lg:items-center">
						<img
							className="h-14 max-sm:h-20 mx-5 lg:mx-0"
							src="../../../../public/assets/user.png"
							alt="User"
						/>
						<button
							type="button"
							className="text-white bg-[#403f3f] text-xl h-12 mt-1 px-10 max-sm:px-6 max-sm:py-2"
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
