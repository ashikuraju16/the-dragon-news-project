import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<div className="flex md:w-5/6 mx-auto justify-end max-sm:w-full ">
			<div className="mt-10 w-full max-sm:mt-4  md:w-4/6 py-3 px-3 font-poppins">
				<div className="flex justify-between max-sm:flex-col max-sm:space-y-5">
					<div className="flex space-x-4 text-xl mt-2 text-[#706f6f]  justify-center">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/career">Career</NavLink>
					</div>
					<div className="flex space-x-4 max-sm:space-x-0 max-sm:space-y-2 max-sm:flex-col max-sm:items-center">
						<img
							className="h-14 max-sm:h-20 mx-5"
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
