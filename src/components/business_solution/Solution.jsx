

const Solution = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-20 justify-center">
      <div className="w-full max-w-screen-xl mx-auto mb-16 p-4 justify-center text-center">
        <p className="text-small font-semibold"><div className="bg-[#84D55E] w-1.5 sm:w-[10px] md:w-[15px] h-1.5 sm:h-[10px] md:h-[15px] inline-block mx-2"></div>We Are Expertise In</p>
        <h1 className="text-3xl font-bold">We Provide Professional <br /> Business Solutions.</h1>
      </div>
      <div className="container grid grid-cols-3 gap-4 mx-auto"> 
        <div className="bg-white">
            <b className="inline-block pr-[25%]">Financial <br /> Consultancy</b>
            <img src="/public/img/solution_1.png" alt="solution-images" className="inline-block"/>
            <a href="#" className="block text-[#84D55E]">Read More</a>
        </div>
        <div className="bg-white">
            <b className="inline-block pr-[25%]">Business <br/> Management</b>
            <img src="/public/img/solution_2.png" alt="solution-images" className="inline-block"/>
            <a href="#" className="block text-[#84D55E]">Read More</a>
        </div>
        <div className="bg-white">
            <b className="inline-block pr-[25%]">Consultants & <br /> program</b>
            <img src="/public/img/solution_3.png" alt="solution-images" className="inline-block"/>
            <a href="#" className="block text-[#84D55E]">Read More</a>
        </div>
        <div className="bg-white">
            <b className="inline-block pr-[25%]">Company <br /> Management</b>
            <img src="/public/img/solution_4.png" alt="solution-images" className="inline-block"/>
            <a href="#" className="block text-[#84D55E]">Read More</a>
        </div>
        <div className="bg-white">
            <b className="inline-block pr-[25%]">Financial & <br /> Insurance jobs</b>
            <img src="/public/img/solution_2.png" alt="solution-images" className="inline-block"/>
            <a href="#" className="block text-[#84D55E]">Read More</a>
        </div>
        <div className="bg-white">
            <b className="inline-block pr-[25%]">Financial <br /> Consultancy</b>
            <img src="/public/img/solution_5.png" alt="solution-images" className="inline-block"/>
            <a href="#" className="block text-[#84D55E]">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Solution
