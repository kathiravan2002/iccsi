import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';

import { Link } from 'react-router-dom';


function About() {





    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-semibold text-white lg:mt-10 mt-15">About The Conference</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[20px] poppins-medium  text-[#fcac45] ">About The Conference</h2></div>

                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="space-y-3">
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Computer Science Innovations is a premier global platform dedicated to showcasing cutting-edge research, groundbreaking technologies, and emerging trends in computer science. ICCSI brings together researchers, academicians, industry professionals, and students from around the world to share knowledge, foster collaboration, and explore the future of computing.</p>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">The conference covers a wide range of topics, including artificial intelligence, machine learning, cybersecurity, cloud computing, data science, IoT, blockchain, and software engineering. ICCSI provides an opportunity for participants to present their latest research, network with leading experts, and engage in insightful discussions that drive innovation in the field.</p>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">With keynote sessions from renowned speakers, technical paper presentations, workshops, and panel discussions, ICCSI serves as a dynamic forum for advancing the frontiers of computer science and its real-world applications.</p>
                </div>
            </section>


        </div>
    )
}

export default About