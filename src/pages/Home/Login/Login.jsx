import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<div className=" flex w-5/6 mx-auto justify-end  max-sm:hidden">
			<div className="mt-10  w-2/3  py-3 px-3 font-poppins ">
				<div className=" flex justify-between">
					<div
						className=" flex space-x-4 text-xl mt-2 ml-28
                     text-[#706f6f]"
					>
						<NavLink to="/">Home</NavLink>
						<NavLink>About</NavLink>
						<NavLink>Career</NavLink>
					</div>
					<div className=" flex space-x-5">
						<img
							className="h-14"
							src="../../../../public/assets/user.png"
							alt=""
						/>
						<button
							type="button"
							className=" text-white bg-[#403f3f] text-xl h-12 mt-1 px-10 "
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
