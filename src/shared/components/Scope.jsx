import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Scope() {

    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-semibold text-white lg:mt-10 mt-15">Scope Of Our Conference</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[20px] poppins-medium  text-[#fcac45] ">Scope Of Our Conference</h2></div>
                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="space-y-3">
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Computer Science Innovations is a global platform dedicated to advancing research, innovation, and collaboration in the field of computer science. It brings together researchers, academicians, and industry professionals to exchange ideas and present cutting-edge developments in areas such as Artificial Intelligence, Machine Learning, Cybersecurity, Cloud Computing, Data Science, Internet of Things (IoT), Blockchain, and Software Engineering. The conference also explores emerging fields like Quantum Computing, Augmented Reality, Digital Twins, and Green Computing, addressing both theoretical advancements and real-world applications.</p>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">ICCSI provides an opportunity for participants to engage in keynote sessions, technical paper presentations, panel discussions, and workshops that foster meaningful discussions and collaborations. </p>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">By bridging the gap between academia and industry, the conference promotes innovative solutions to complex challenges in various sectors, including healthcare, finance, smart cities, and business intelligence. With a strong emphasis on interdisciplinary research and technological advancements, ICCSI serves as a catalyst for shaping the future of computing and driving global digital transformation.</p>
                </div>
            </section>

        </div>
    )
}

export default Scope