import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full max-h-screen relative">
        <img src="/public/img/Banner.png" alt="banner-img" className="top-0 left-0 w-full max-h-screen object-cover"/>
        <img src="/public/img/Background.png" alt="fill-backgroud"className="top-0 left-0 w-2/5 h-full object-cover absolute"/>
        <div className="absolute max-top-48 lg:top-48 max-md:top-24 max-sm:top-5 left-8 lg:left-5 max-md:3 max-sm:left-1 mg w-2/5 h-full flex flex-col justify-start text-white ">
            <div className="md:left-[20px] sm:left-[1px] lg:left-[50px] max-w-[1100px] m-auto absolute p-4">
                <p className="text-lg max-md:text-base max-sm:text-[8px]"><div className="bg-[#84D55E] w-3 h-3 max-md:w-2 max-md:h-2 max-sm:w-2 max-sm:h-2 max inline-block mx-[5px] max-md:mx-[3px] max-sm:mx-[2px]"></div>Welcome to Whitecollar Solution</p>
                <h1 className="my-[4px] max-md:my-[1px] max-sm:my-[1px] max-w-[600px] max-md:w-[100px] max-sm:w-[191px] font-bold text-6xl max-md:text-3xl max-sm:text-[16px] drop-shadow-2xl">The Best Value for <span className="text-[#84D55E]">Business</span> and Corporation</h1>
                <p className="max-w-[75%] max-md:w-[50%] max-sm:w-[70%] drop-shadow-2xl py-2 text-xl max-md:text-xs max-sm:text-[8px] text-[#B9B9B9]">Collaboratively administrate empowered markets plug and play networks dynamically procrastinated </p>
                <button className="inline-blog my-7 bg-[#84D55E] text-black font-semibold px-5 py-3">Get Consulting</button>
                <FaPlayCircle className="inline mx-3 text-violet-700" size={50}/>
                <a href="#" className="border border-b-2 border-t-0 border-x-0 border-solid border-white">Watch Videos</a>
            </div>
        </div>
    </div>
  )
}

export default Banner