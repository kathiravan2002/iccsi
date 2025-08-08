import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaDatabase, FaHandPointRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoArrowRedoSharp, IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Conferencetracks() {


    const tracks = [
        {
            title: "Artificial Intelligence and Machine Learning",
            content: "Explores innovations in AI and machine learning, covering algorithms, neural networks, deep learning, and ethical considerations that drive intelligent automation, decision-making, and predictive systems across industries."
        },
        {
            title: "Cybersecurity and Information Assurance",
            content: "Focuses on data protection, ethical hacking, network security, cryptography, and cybersecurity frameworks to safeguard digital assets against evolving threats, breaches, and vulnerabilities in modern connected environments."
        },
        {
            title: "Cloud Computing and Virtualization",
            content: "Covers cloud service models, virtualization, orchestration, containers, and scalable infrastructure solutions enabling efficient, cost-effective deployment of distributed systems and services across diverse platforms."
        },
        {
            title: "Big Data Analytics and Data Science",
            content: "Addresses big data processing, data mining, visualization, and AI-driven analytics for actionable insights in domains like healthcare, business intelligence, and real-time decision-making systems."
        },
        {
            title: " Blockchain and Decentralized Technologies",
            content: "Examines blockchain fundamentals, smart contracts, consensus algorithms, and decentralized applications for finance, identity management, and transparent digital ecosystems across industries."
        },
        {
            title: "Software Engineering and Agile Practices",
            content: "Discusses modern software development practices, testing strategies, DevOps, agile methodologies, and lifecycle management to build scalable, high-quality software systems."
        },
        {
            title: "Computer Vision and Image Processing",
            content: "Covers image recognition, pattern analysis, 3D vision, and medical imaging innovations using AI to extract insights from visual data and multimedia."
        },
        {
            title: "Quantum Computing and Future Architectures",
            content: "Investigates quantum algorithms, quantum encryption, and next-generation architectures pushing the boundaries of computation, complexity, and secure data processing."
        },

    ]
    return (
        <div>

            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-semibold text-white lg:mt-10 mt-15">Conference Tracks</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[20px] poppins-medium  text-[#fcac45] ">Conference Tracks</h2></div>
                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">

                <h2 className="text-gray-800 poppins-semibold text-[34px]  text-center">Conference <span className="text-[#fcac45] ">Tracks</span></h2>
                <div className="space-y-5 mt-4">
                    {tracks.map((item, index) => (
                        <div className="space-y-3">
                            <h2 className="text-[20px]  poppins-semibold ">{item.title}</h2>
                            <div className="flex gap-2 justify-center items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">{item.content}</p></div>
                        </div>
                    ))}
                </div>
            </section>



        </div>
    )
}

export default Conferencetracks