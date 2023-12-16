
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='bg-[#37393F]'>
            <div className='text-white'>
                <div className="w-full max-w-screen-xl mx-auto p-4 ">
                    <div className="w-full mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
                        <img src="/public/img/brand.png" className="w-[185px] h-[90px]" alt="Flowbite Logo" />
                        <ul className="flex flex-wrap text-white items-center  text-sm font-medium sm:mb-0 dark:text-gray-400">
                            <li className='ml-10 inline-flex '>
                                <img src="/public/img/foteer_phone.png" alt='phone'/>
                                <a href='/' className='text-lg mt-3 ml-2'>Call us <br/> <span>+01 569 896 654</span></a>
                            </li>
                            <li className='ml-10 inline-flex '>
                                <img src="/public/img/foteer_mail.png" alt='mail'/>
                                <a href='/' className='text-lg mt-3 ml-2'>Mail us <br/>
                                <span className='text-md'>Info@Example.com</span></a> <br/>

                            </li>
                            <li className='ml-10 inline-flex '>
                                <img src="/public/img/foteer_locatsion.png" alt='location'/>
                                <a href='/' className='text-lg mt-3 ml-2'>Location <br/> <span>Amsterdam, 109-74</span></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="border-[#6C6D72] sm:mx-auto dark:border-[#6C6D72] lg:my-5" />
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <div>
                            <ul className="flex flex-wrap text-white text-lg font-medium xl:space-x-[170px] lg:space-x-[170px] md:space-x-[120px]">
                                <li>
                                    <span className='max-sm:text-center max-sm:text-[14px]'>Home</span>
                                </li>
                                <li className='ml-6 max-sm:ml-1'>
                                    <span className='max-sm:text-center max-sm:text-[14px]'>About Us</span>
                                </li>
                                <li className='ml-6  max-sm:ml-1'>
                                    <span className='max-sm:text-center max-sm:text-[14px]'>Teams</span>
                                </li>
                                <li className='ml-6  max-sm:ml-1'>
                                    <span className='max-sm:text-center max-sm:text-[14px]'>Prices</span>
                                </li>
                                <li className='ml-6  max-sm:ml-1'>
                                    <span className='max-sm:text-center max-sm:text-[14px]'>Contact Us</span>
                                </li>
                                <li className='ml-6  max-sm:ml-1'>
                                    <span className='max-sm:text-center max-sm:text-[14px]'>FAQ</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-[#6C6D72] sm:mx-auto dark:border-[#6C6D72] lg:mt-3" />
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl pe-4 pb-6 md:flex md:items-center md:justify-between">
      <span className="text-md text-white sm:text-center dark:text-white">Copyright © <a href='/' className='text-[#40DDB6]'>WhiteCollar</a> | Designed by <a href='/' className='text-[#6B77E5]'>VictorFlow</a> Templates - Powered by Webflow
    </span>
                <ul className="text-white inline-flex">
                    <li>
                        Follow:
                    </li>
                    <li>
                        <FaInstagram className='ml-4'/>
                    </li>
                    <li>
                        <FaFacebook className='ml-2'/>
                    </li>
                    <li>
                        <FaTwitter className='ml-2'/>
                    </li>
                    <li>
                        <FaPinterest className='ml-2'/>
                    </li>
                </ul>
                </div>
        </section>
    );
};

export default Footer;