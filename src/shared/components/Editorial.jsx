import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong, FaCircleUser } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Editorial() {


    // const committeeData = [
    //     {
    //         members: [
    //             'K. Dhana shree, Department of Computer Science and Engineering, Sri Ramakrishna Engineering College, India',
    //             'Tejas Dhote, Department of Mechanical Engineering, Michigan Technological University, USA',
    //             'P. Punitha, Department of Artificial Intelligence and Data Science, Tagore Institute of Engineering & Technology, India',
    //             'Jawwad Sami Ur Rahman, Biomedical Engineering Department, Riphah International University, Pakistan',
    //             'S. Raghavendra, Department of Information and Communication, Manipal Institute of Technology, India',
    //             'Shaikh Muhammad Allayear, Department of Multimedia and Creative Technology, Daffodil International University, Bangladesh',
    //             'K. Kokilavani, Department of Computer Science and Engineering, Panimalar Engineering College, India',
    //             'Tariq Javid, Department of Biomedical Engineering,  Hamdard University, Pakistan',
    //             'V. Nagaraju, Department of  Electronics and communication Engineering, Anna University, India',
    //             'Sharmin Akter, Department of Computer Science and Engineering, Daffodil International University, Bangladesh',
    //             'Ravi Kant Avvari, Department of Biotechnology and Medical Engineering, National Institute of Technology Rourkela, India',
    //             'Sutikno, Department of Informatics, University of Diponegoro, Indonesia',
    //             'Pariza Kamboj, Department of Computer Science and Engineering, Sarvajanik College of Engineering & Technology, India',
    //             'Ayodeji Oludola Oluwatope, Department of Computer Science and Engineering, Obafemi Awolowo University, Nigeria',
    //             'Rajeev Kumar Singh, Department of Information Technology, Madhav Institute of Technology and Science, India',
    //             'Samuel Akpan Robinson, Department of Computer Science and Cyber Security, University of Uyo, Nigeria',
    //             'Tamizharasi, Department of Electrical and Electronics Engineering, Adhiparasakthi Engineering College, India',
    //             'Saman Almufti, Department of Computer Science, Nawroz University, Iraq',
    //             'A. Anbarasa Kumar, Department of Computer Science and Engineering, Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology, India',
    //             'Tehreem Qasim, Department of Robotics and AI, SZABIST University, Pakistan',
    //         ],
    //     }
    // ]

    const organizing = [
        {
            name: "Dr. Moses Adah Agana",
            university: "University of Calabar",
            expertise: "Department of Computer Science",
            country: "Nigeria"
        },
        {
            name: "Dr. Olaniyi S Maliki",
            university: "Michael Okpara Federal University",
            expertise: "Department of Mathematics",
            country: "Nigeria"
        },
        {
            name: "Dr. Folasade M. Dahunsi",
            university: "Federal University of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "Nigeria"
        },
        {
            name: "Dr. Adekunle Musibau Ibrahim",
            university: "Osun State University",
            expertise: "Department of Computer Science",
            country: "Nigeria"
        },
        {
            name: "Dr. Stanley Adiele Okolie",
            university: "Federal University of Technology Owerri",
            expertise: "Department of Information and Communication Technology",
            country: "Nigeria"
        },
    ]


    const technical = [
        {
            name: "Dr. Marcelo M S Souza",
            university: "Universidade Federal do Ceará",
            expertise: "Department of Computer Science and Engineering",
            country: "Brazil"
        },
        {
            name: "Dr. Meenakshi Gupta",
            university: "National University of Singapore",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Singapore"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            university: "Cavendish University",
            expertise: "Department of Computer Science and Engineering",
            country: "Uganda"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            university: "Metropolitan Autonomous University",
            expertise: "Department of Electronics Engineering",
            country: "Mexico"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            university: "International School of Information Processing Sciences",
            expertise: "Department of Computer Science and Engineering",
            country: "France"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            university: "Qatar University",
            expertise: "Research Scientist at Qatar Mobility Innovations Center",
            country: "Qatar"
        },
        {
            name: "Dr. Shakar Ahmed Aziz",
            university: "Duhok University",
            expertise: "Department of Mathematics",
            country: "Iraq"
        },
        {
            name: "Dr. Yonglin Chen",
            university: "The First Hospital of Lanzhou University",
            expertise: "Department of Computer Science",
            country: "China"
        },
        {
            name: "Dr. Qian Liu",
            university: "Krirk University",
            expertise: "Department of Information Technology",
            country: "Thailand"
        },
        {
            name: "Dr. Abdul Rehman Baloch",
            university: "Iqra University",
            expertise: "Department of Computer Science",
            country: "Pakistan"
        },
        {
            name: "Dr. Stephen Ekwe",
            university: "University of Cape Town",
            expertise: "Department of Electrical Engineering",
            country: "South Africa"
        },
        {
            name: "Dr.M. Rajalakshmi",
            university: "Jyothi Engineering College",
            expertise: "Department of Mechatronics Engineering",
            country: "India"
        },
        {   
            name: "Dr. Jhanghiz Syahrivar",
            university: "President University",
            expertise: "Department of Computer Science",
            country: "Indonesia"
        },
        {
            name: "Dr. Rahman Shafique",
            university: "Yeungnam University",
            expertise: "Department of Information and Communication Engineering",
            country: "South Korea"
        },
        {
            name: "Dr. Asma Sbeih",
            university: "Palestine Ahliya University",
            expertise: "Department of Information Technology",
            country: "Palestine"
        },
        {
            name: "Dr. Puneet Sharma",
            university: "UiT The Arctic University of Norway",
            expertise: "Department of Automation and Process Engineering",
            country: "Norway"
        },
        {
            name: "Dr. Brahim Issaoui",
            university: "Qassim University",
            expertise: "Department of Economics and Social Sciences",
            country: "Saudi Arabia"
        },
        {
            name: "Dr. Ammar Amjad",
            university: "National Yang Ming Chiao Tung University",
            expertise: "Department of Computer Science and Engineering",
            country: "Taiwan"
        },
        {
            name: "Dr. Leo John Baptist",
            university: "Botho University",
            expertise: "Department of Information Technology",
            country: "Botswana"
        },
        {
            name: "Dr. Maryam Anwer",
            university: "Majma university",
            expertise: "Department of Industrial Engineering",
            country: "Saudi Arabia"
        }
    ];



    const editorial = [
        {
            name: "Dr. Dongwann Kang",
            university: "Seoul National University of Science and Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "South Korea"
        },
        {
            name: "Dr. Abolfazl Gandomi",
            university: "Islamic Azad University",
            expertise: "Department of Computer Engineering",
            country: "Iran"
        },
        {
            name: "Dr. Wasan Alamro",
            university: "Auckland University of Technology",
            expertise: "Department of Electrical and Electronics Engineering",
            country: "New Zealand"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            university: "ESA Business School",
            expertise: "Department of Computer Science and Engineering",
            country: "Lebanon"
        },
        {
            name: "Dr. Leandro N. Balico",
            university: "Federal University of Roraima",
            expertise: "Department of Computer Science and Engineering",
            country: "Brazil"
        },
        {
            name: "Dr. Dongfeng Li",
            university: "Fuyang People's Hospital",
            expertise: "Department of Medical Science",
            country: "China"
        },
        {
            name: "Dr.S. Jayashree",
            university: "KGISL Institute of technology",
            expertise: "Department of Computer Science and Engineering",
            country: "India"
        },
        {
            name: "Dr. Nour Moustafa",
            university: "American University of the Middle East",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Kuwait"
        },
        {
            name: "Dr. Hung Nguyen",
            university: "Nha Trang university",
            expertise: "Department of Information Technology",
            country: "Vietnam"
        },
        
        {
            name: "Dr. Saputra Hijrah",
            university: "Universitas Airlangga",
            expertise: "Department of Information Technology",
            country: "Indonesia "
        },
        {
            name: "Dr. Argha Chandra Dhar",
            university: "Khulna University of Engineering & Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "Bangladesh"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            university: "Cyprus International University",
            expertise: "Department of Computer Science and Engineering",
            country: "Cyprus"
        },
        {
            name: "Dr. Twana A. Hamad",
            university: "Harran University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Turkiye"
        },
        {
            name: "Dr.D. Angeline Benitta",
            university: "Hindustan institute of technology and science",
            expertise: "Department of computer Applications",
            country: "India"
        },
        {
            name: "Dr. Qiushi Yang",
            university: "City University of Hong Kong",
            expertise: "Department of Electronic Engineering",
            country: "China"
        },
        {
            name: "Dr.M. Karthick",
            university: "Nandha college of Technology",
            expertise: "Department of Computer Science and Engineering",
            country: "India"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            university: "Cagayan State University",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Philippines"
        },
        {
            name: "Dr. Asghar Ali Shah",
            university: "Bahria University",
            expertise: "Department of computer science",
            country: "Pakistan"
        },
        {
            name: "Dr. BalaAnand Muthu",
            university: "Adhiyamaan College of Engineering",
            expertise: "Department of Computer Science and Engineering",
            country: "India"
        },
        {
            name: "Dr.R. Arun Kumar",
            university: "University of South Wales",
            expertise: "Department of Digital Forensics & Cyber Security",
            country: "United Kingdom"
        },
       
        {
            name: "Dr. Saminda Premaratne",
            university: "University of Moratuwa",
            expertise: "Department of Information Technology",
            country: "Sri Lanka"
        },
        {
            name: "Dr.A. Gabriel ",
            university: "Sharda University",
            expertise: "Department of Information Technology",
            country: "Uzbekistan"
        },
        {
            name: "Dr. Hea Choon Ngo",
            university: "Universiti Teknikal Malaysia Melaka",
            expertise: "Department of Electronics and Communication Engineering",
            country: "Malaysia"
        },
        {
            name: "Dr. Alven Ritonga",
            university: "Universitas Wijaya Putra",
            expertise: "Department of Computer Science",
            country: "Indonesia"
        }
    ];

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
                {/* <h2 className="text-gray-800 poppins-semibold text-[34px]  text-center">Meet Our   <span className="text-[#fcac45] ">Editorial Board Members</span></h2> */}

                {/* <div className="mt-4">
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
                </div> */}

                <div className="">
                    <h2 className="text-gray-800 poppins-semibold lg:text-[34px] text-[26px]  text-center mb-5 scroll-mt-[120px]" id="organizing-committee">Organizing <span className="text-[#fcac45] "> Committee</span></h2>
                    <div className="space-y-2">
                        {organizing.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#fcac45]' />
                                <p className="leading-relaxed "><span className=" text-[#fcac45] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-gray-800 poppins-semibold lg:text-[34px] text-[26px]  text-center mt-10 mb-5 scroll-mt-[120px]" id="technical-committee">Technical Program <span className="text-[#fcac45] "> Committee</span></h2>
                    <div className="space-y-2">
                        {technical.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#fcac45]' />
                                <p className="leading-relaxed "><span className=" text-[#fcac45] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-gray-800 poppins-semibold lg:text-[34px] text-[26px]  text-center mt-10 mb-5 scroll-mt-[120px]" id="advisory-committee">International Advisory Board <span className="text-[#fcac45] "> Committee Members</span></h2>
                    <div className="space-y-2">
                        {editorial.map((item, index) =>
                            <div key={index} className="flex gap-2 items-center">
                                <FaCircleUser className='text-[18px] flex shrink-0 text-[#fcac45]' />
                                <p className="leading-relaxed "><span className=" text-[#fcac45] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                            </div>
                        )}
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Editorial