import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Organizing() {

    const committeeData = [
        {
            title: 'Chairman',
            members: ['Name, M.E., Ph.D., Principal'],
        },
        {
            title: 'Convenors',
            members: [
                'Name 1, M.E., Ph.D., Professor / ECE',
                'Name 2, M.E., Ph.D., Professor & Head / MECH',
                'Name 3, M.Tech., Ph.D., Professor / CSE',
                'Name 4, M.E., Ph.D., Coordinator / S&H',
            ],
        },
        {
            title: 'Advisory Committee',
            members: [
                'Name 5, HOD / ECE',
                'Name 6, HOD / CSE',
                'Name 7, HOD / EEE',
                'Name 8, HOD / CIVIL',
            ],
        },
        {
            title: 'Coordinators',
            members: [
                'Name 9, Assistant Professor / CSE',
                'Name 10, Assistant Professor / ECE',
                'Name 11, Assistant Professor / MEC',
                'Name 12, Assistant Professor / EEE',
            ],
        },
        {
            title: 'Members',
            members: [
                'Name 13, Associate Professor / MECH',
                'Name 14, Assistant Professor / EEE',
                'Name 15, Assistant Professor / ECE',
                'Name 16, Assistant Professor / CSE',
                'Name 17, Assistant Professor / CIVIL',
            ],
        },
    ];



    const roles = [
        {
            title: "Conference Planning",
            content: "Plans the International Conference on Computer Science Innovations by defining its theme, scope, and objectives while organizing timelines, structure, and major events to ensure a purposeful and impactful academic experience."
        },
        {
            title: " Speaker and Session Coordination",
            content: "Coordinates keynote speakers, invites experts, and assigns session chairs to deliver diverse, cutting-edge presentations that reflect current innovations in computer science, AI, cybersecurity, and other relevant technical fields."
        },
        {
            title: "Paper Review Management",
            content: "Manages the call for papers, reviewer assignments, and peer-review process to ensure transparency, fairness, and academic quality in accepted research papers across all domains of computer science innovations."
        },
        {
            title: "Logistics and Scheduling",
            content: "Handles venue arrangements, session timelines, registration, technical equipment, and on-site logistics to ensure smooth, professional execution of the International Conference on Computer Science Innovations from start to finish."
        },
        {
            title: "Publication and Proceedings",
            content: "Compiles, formats, and edits accepted papers into official proceedings or journals, collaborating with publishers to ensure high academic standards and global accessibility of research presented at the conference."
        },
        // {
        //     title: "Finance and Sponsorship",
        //     content: "Manages the overall budget, allocates resources efficiently, and collaborates with academic, industry, and corporate partners to secure sponsorships and financial support for a successful and sustainable conference event."
        // },
        {
            title: " Publicity and Communications",
            content: "Promotes the conference through academic networks, websites, emails, and social media platforms to increase global visibility, attract diverse participants, and foster collaboration in computer science innovation fields."
        },
        // {
        //     title: "Participant Support and Hospitality",
        //     content: "Arranges accommodation, travel help, hospitality services, on-site guidance, and local transportation to ensure all attendees enjoy a seamless, welcoming, and comfortable experience throughout the entire conference duration."
        // },
    ]
    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-semibold text-white lg:mt-10 mt-15">Organizing Committee</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[20px] poppins-medium  text-[#fcac45] ">Organizing Committee</h2></div>
                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <div className="space-y-3">
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Computer Science Innovations is a premier event uniting researchers, professionals, and students to discuss advancements in computer science. It offers a global platform to exchange ideas, share innovations, and foster collaboration across domains, driving progress in technology and academic research.</p>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">ICCSI covers cutting-edge topics such as Artificial Intelligence, Machine Learning, IoT, Cybersecurity, Blockchain, and Cloud Computing. The conference includes keynote speeches, paper presentations, and expert-led workshops. It helps participants stay updated on technological trends while gaining insights from pioneers shaping the future of computer science.</p>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify">The conference promotes academic-industry synergy by bridging research with practical application. It offers networking opportunities, encourages interdisciplinary research, and supports publication in reputed journals. ICCSI is an inclusive space for innovation, providing growth and global exposure to both emerging scholars and experienced professionals in the computer science community.</p>
                </div>
            </section>


            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:pb-15 pb-10">

                <h2 className="text-gray-800 poppins-semibold text-[34px]  text-center">Organizing Committee  <span className="text-[#fcac45] ">Roles and Responsibilities</span></h2>
                <div className="space-y-5 mt-4">
                    {roles.map((item, index) => (
                        <div className="space-y-3">
                            <h2 className="text-[20px]  poppins-semibold ">{item.title}</h2>
                            <div className="flex gap-2 justify-center items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">{item.content}</p></div>
                        </div>
                    ))}
                </div>
            </section>


            {/* <section className="bg-gray-100 py-12 px-4 md:px-16">
                <div className="space-y-10 max-w-3xl mx-auto">
                    {committeeData.map((section, index) => (
                        <div key={index} className="text-center">
                            <h4 className="text-2xl font-extrabold text-black mb-4 uppercase tracking-wide">
                                {section.title}
                            </h4>

                            <div className="bg-white border border-[#fcac45] shadow-md rounded-md text-left">
                                {section.members.map((member, i) => (
                                    <div
                                        key={i}
                                        className={`px-4 py-3 ${i !== section.members.length - 1 ? 'border-b border-gray-200' : ''
                                            }`}
                                    >
                                        {member}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
        </div>
    )
}

export default Organizing