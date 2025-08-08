import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Editorial() {


    const committeeData = [
        {
            members: [
                'K. Dhana shree, Department of Computer Science and Engineering, Sri Ramakrishna Engineering College, India',
                'Tejas Dhote, Department of Mechanical Engineering, Michigan Technological University, USA',
                'P. Punitha, Department of Artificial Intelligence and Data Science, Tagore Institute of Engineering & Technology, India',
                'Jawwad Sami Ur Rahman, Biomedical Engineering Department, Riphah International University, Pakistan',
                'S. Raghavendra, Department of Information and Communication, Manipal Institute of Technology, India',
                'Shaikh Muhammad Allayear, Department of Multimedia and Creative Technology, Daffodil International University, Bangladesh',
                'K. Kokilavani, Department of Computer Science and Engineering, Panimalar Engineering College, India',
                'Tariq Javid, Department of Biomedical Engineering,  Hamdard University, Pakistan',
                'V. Nagaraju, Department of  Electronics and communication Engineering, Anna University, India',
                'Sharmin Akter, Department of Computer Science and Engineering, Daffodil International University, Bangladesh',
                'Ravi Kant Avvari, Department of Biotechnology and Medical Engineering, National Institute of Technology Rourkela, India',
                'Sutikno, Department of Informatics, University of Diponegoro, Indonesia',
                'Pariza Kamboj, Department of Computer Science and Engineering, Sarvajanik College of Engineering & Technology, India',
                'Ayodeji Oludola Oluwatope, Department of Computer Science and Engineering, Obafemi Awolowo University, Nigeria',
                'Rajeev Kumar Singh, Department of Information Technology, Madhav Institute of Technology and Science, India',
                'Samuel Akpan Robinson, Department of Computer Science and Cyber Security, University of Uyo, Nigeria',
                'Tamizharasi, Department of Electrical and Electronics Engineering, Adhiparasakthi Engineering College, India',
                'Saman Almufti, Department of Computer Science, Nawroz University, Iraq',
                'A. Anbarasa Kumar, Department of Computer Science and Engineering, Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology, India',
                'Tehreem Qasim, Department of Robotics and AI, SZABIST University, Pakistan',
            ],
        }
    ]



    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-semibold text-white lg:mt-10 mt-15">Editorial Board</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[20px] poppins-medium  text-[#fcac45] ">Editorial Board</h2></div>
                    </div>
                </div>
            </div>

            <section className="max-w-[1300px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <h2 className="text-gray-800 poppins-semibold text-[34px]  text-center">Meet Our   <span className="text-[#fcac45] ">Editorial Board Members</span></h2>

                <div className="mt-4">
                    {committeeData.map((section, index) => (
                        <div key={index} className="text-center">

                            <div className="bg-white border border-[#fcac45] shadow-md rounded-md text-left inter-medium">
                                {section.members.map((member, i) => (
                                    <div
                                        key={i}
                                        className={`px-4 py-3 ${i !== section.members.length - 1 ? 'border-b border-gray-200' : ''
                                            }`}
                                    >
                                        Dr. {member}.
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </section>


        </div>
    )
}

export default Editorial