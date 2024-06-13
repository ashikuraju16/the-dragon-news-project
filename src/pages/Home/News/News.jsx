const News = () => {
	return (
		<div className="md:mt-10 mt-4 text-center bg-green-500 lg:w-5/6 lg:mx-auto max-sm:mx-4  sm:mx-3 py-3 px-3 font-poppins">
			<div className=" flex items-center justify-between">
				<button
					type="button"
					className=" text-white text-xl max-sm:text-lg bg-[#d72050] max-sm:h-9 max-sm:px-3 h-12 px-6 mr-1"
				>
					Latest
				</button>
				<h2 className=" font-medium line-clamp-1 text-xl max-sm:text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quas
					ad at laboriosam laborum? Reprehenderit optio, nisi tenetur accusamus
					atque quibusdam deserunt facere ipsam culpa reiciendis fuga vitae?
					Voluptatum, maiores!30
				</h2>
			</div>
		</div>
	);
};

export default News;
