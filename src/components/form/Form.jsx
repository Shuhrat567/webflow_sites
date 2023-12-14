

const Form = () => {
  return (
    <div className="w-full max-w-screen-xlp-4 bg-[#6B77E5]">
        <div className="container mx-auto max-md:container-0 max-sm:container-0">
            <div className="w-[600px] inline-flex flex-col max-mx-44 max-md:mx-24 max-sm:mx-5 my-32">
                <p className="text-small font-semibold text-white max-sm:text-[15px]"><div className="bg-[#84D55E] w-3 sm:w-[8px] md:w-[10px] h-3 sm:h-[8px] md:h-[10px] inline-block mr-2"></div>How We Work</p>
                <h1 className="text-3xl max-md:text-xl max-sm:text-[28px] font-bold text-white my-4">To Get Your Business <br /> To The Next Level</h1>
                <p className="text-white max-w-[420px] max-md:w-[350px] max-sm:w-[300px] text-sm max-sm:mr-[70%]">Leverage agile frameworks to provide synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.</p>
                <div className="bg-[#84D55E] max-w-[590px] max-md:w-[500px] max-sm:w-[300px] inline-flex flex-row pt-10 max-md:pt-7 max-sm:pt-5 pb-9 max-md:pb-7 max-sm:pb-6 my-10 max-md:my-8 max-sm:my-5 px-7 max-md:px-5 max-sm:px-3">
                    <div className="rounded-[50%] inline-flex flex-col border-2 border-[#6B77E5] p-6 max-md:p-4 max-sm:p-2">
                        <b className="text-white text-3xl max-md:text-xl max-sm:text-[18px]">562+</b>
                        <p className="text-white text-lg max-md:text-md max-sm:text-[12px] font-medium">Projects</p>
                    </div>
                    <p className="text-white text-medium text-2xl max-md:text-lg max-sm:text-xs my-3 max-md:my-2 max-sm:my-3 mx-10 max-md:mx-7 max-sm:mx-5">We have <b className="text-3xl max-md:text-xl max-sm:text-sm">50+</b> years of experience. We offer <b  className="text-3xl max-md:text-xl max-sm:text-sm">whitecollar</b> services to you</p>
                </div>
                <div className="my-4">
                    <img src="/public/img/vector_icon.png" alt="stiker" className="inline-block mr-3 max-sm:mr-[2px] h-8 max-md:h-6 max-sm:h-4 w-8 max-md:w-6 max-sm:w-4"/>
                    <div className="inline-flex flex-col ml-3 max-md:ml-2 max-sm:ml-0 border-b-[1px] max-w-[590px] max-md:w-[500px] max-sm:w-[320px]">
                        <h3 className="text-white max-sm:text-[15px]">Planning</h3>
                        <p className="text-white max-sm:text-[10px]">Leverage agile frameworks to provide synopsis for high level overviews.</p>
                    </div>
                </div>
                <div className="my-4">
                    <img src="/public/img/vector_icon.png" alt="stiker" className="inline-block mr-3 max-sm:mr-[2px] h-8 max-md:h-6 max-sm:h-4 w-8 max-md:w-6 max-sm:w-4"/>
                    <div className="inline-flex flex-col ml-3 max-md:ml-2 max-sm:ml-0 border-b-[1px] max-w-[590px] max-md:w-[500px] max-sm:w-[320px]">
                        <h3 className="text-white max-sm:text-[15px]">Planning</h3>
                        <p className="text-white max-sm:text-[10px]">Leverage agile frameworks to provide synopsis for high level overviews.</p>
                    </div>
                </div>
                <div className="my-4">
                    <img src="/public/img/vector_icon.png" alt="stiker" className="inline-block mr-3 max-sm:mr-[2px] h-8 max-md:h-6 max-sm:h-4 w-8 max-md:w-6 max-sm:w-4"/>
                    <div className="inline-flex flex-col ml-3 max-md:ml-2 max-sm:ml-0 border-b-[1px] max-w-[590px] max-md:w-[500px] max-sm:w-[320px]">
                        <h3 className="text-white max-sm:text-[15px]">Planning</h3>
                        <p className="text-white max-sm:text-[10px]">Leverage agile frameworks to provide synopsis for high level overviews.</p>
                    </div>
                </div>
            </div>
            <div className="inline-flex flex-col mx-10 mt-3 mb-10">
                <p className="text-small font-semibold text-white"><div className="bg-[#84D55E] w-1.5 sm:w-[10px] md:w-[15px] h-1.5 sm:h-[10px] md:h-[15px] inline-block mx-2"></div>Book Now</p>
                <h1 className="text-3xl font-bold text-white my-4">Get Free Business <br /> Appointment</h1>
                <div className="bg-white">
                    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <div className="p-[30px] justify-center">
                                <div className="flex my-3 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-black focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Yourname"
                                    />
                                </div>
                                <div className="flex my-3 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-black focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="flex my-3 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                    <input
                                        type="number"
                                        name="number"
                                        id="number"
                                        autoComplete="nuber"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-black focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="col-span-full">
                                    <div className="mt-2">
                                        <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="block w-full placeholder-pr-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        placeholder="   Service Description"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="bg-[#84D55E] w-full my-3 py-3 px-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:col-start-2 sm:text-sm sm:leading-6">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form