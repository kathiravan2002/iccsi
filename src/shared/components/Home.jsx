import React from 'react'
import { AiFillCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Home() {

    const date = [
        {
            title: "Abstract Submission Deadline",
            date: "08-05-2025"
        },
        {
            title: "Notification of Acceptance",
            date: "19-05-2025"
        },
        {
            title: "Conference Registration Deadline",
            date: "22-05-2025"
        },
        {
            title: "Conference Event Dates",
            date: "28-05-2025"
        },

    ]
    
    return (
        <div >
            <section>
                <div className="  sm:h-screen bg-cover bg-center " style={{ backgroundImage: " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url('/images/home.png')", }}>
                    <div className="flex justify-center items-center h-full px-4 ">
                        <div className="max-w-[1300px] mx-auto flex flex-col justify-center items-center h-full lg:space-y-5 space-y-5 mt-20 ">
                            <h1 className="text-white lg:text-6xl text-4xl text-center namdhinggo-bold">WELCOME TO <span className="text-[#fcac45]">ICCSI</span></h1>
                            <h2 className="text-white lg:text-4xl text-2xl namdhinggo-medium text-center">International Conference on Computer Science Innovations</h2>
                            <p className="text-white max-w-[1100px] mx-auto lg:text-lg text-base inter-medium text-justify leading-[30px]">A global platform for researchers, academicians, and industry experts to explore advancements in AI, Machine Learning, Cybersecurity, IoT, Blockchain, Cloud Computing, and Data Science, driving digital transformation and innovation.</p>
                            <Link to="/paper-submission">
                                <div className="bg-[#fcac45] rounded-lg hover:bg-white hover:text-[#fcac45] duration-300">
                                    <button className='lg:text-lg text-base inter-bold py-2 px-4 cursor-pointer'>Register here </button>
                                </div>
                            </Link>
                            <a href="#dates" >
                                <button className="py-5 cursor-pointer mt-10 scroll-smooth" >
                                    <img className="mx-auto w-9 animate-bounce" alt="Scroll Down" src="/images/down.png" />
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="flex lg:flex-row flex-col  gap-0 lg:gap-10 ">
                    <div className=" flex items-center  justify-center ">
                        <img src="/images/about.png" alt="aboutus" className="max-w-[550px] mx-auto rounded-lg border-4 border-[#fcac45] lg:block hidden" />
                    </div>
                    <div className="space-y-5 lg:space-y-0">
                        <h2 className="text-gray-800 poppins-semibold text-[34px] lg:text-start text-center">About <span className="text-[#fcac45]">Us</span></h2>
                        <div className=" flex items-center   justify-center max-w-[550px] mx-auto ">
                            <img src="/images/about.png" alt="aboutus" className=" rounded-lg border-4 border-[#fcac45] block lg:hidden " loading='lazy'/>
                        </div>
                        <div className="space-y-5">
                            <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Computer Science Innovations  is a leading global platform that brings together researchers, academicians, and industry professionals to explore advancements in computing and technology. Covering fields such as Artificial Intelligence, Machine Learning, Cybersecurity, Cloud Computing, Blockchain, IoT, and Data Science, ICCSI fosters innovation and collaboration. </p>
                            <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">The conference features keynote sessions, research presentations, panel discussions, and workshops, providing opportunities for knowledge exchange and networking. With a focus on emerging technologies and real-world applications, ICCSI aims to drive digital transformation and shape the future of computing across industries. Join us to be part of this innovation-driven event.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="dates" className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10 scroll-mt-30">
                <h2 className="text-gray-800 poppins-semibold text-[34px] text-center">Take a look at <span className="text-[#fcac45] ">our key dates</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-7">
                    {date.map((item, index) => (
                        <div key={index} className={`group hover:-translate-y-2 duration-300 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-tr-[50px] rounded-bl-[50px] border-2 border-[#fcac45] py-10 px-5 space-y-5 ${index % 2 === 1 ? 'bg-[#fcac45]' : ''}`}>
                            <div className={`text-[36px]  flex shrink-0 justify-center ${index % 2 === 1 ? '' : 'text-[#fcac45]'}`}><AiFillCalendar /></div>
                            <p className="xl:text-[22px] text-[18px] inter-semibold text-center">{item.title}</p>
                            <hr className={` max-w-40 mx-auto ${index % 2 == 1 ? ' ' : 'text-[#fcac45] '}`} />
                            <p className="xl:text-[26px] text-[24px] inter-semibold text-center">{item.date}</p>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default Home