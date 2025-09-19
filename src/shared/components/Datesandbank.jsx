import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowRightLong, FaCalendarDays } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, CreditCard } from 'lucide-react';
import { HiChevronDoubleRight } from 'react-icons/hi';

function Datesandbank() {
    const dates = [
        {
            title: 'Abstract Submission Deadline',
            date: '12-12-2024',
        },
        {
            title: 'Full Paper Submission Deadline',
            date: '16-12-2024',
        },
        {
            title: 'Notification of Acceptance',
            date: '20-12-2024',
        },
        {
            title: 'Final Paper Submission',
            date: '27-12-2024',
        },
        {
            title: 'Registration Deadline',
            date: '02-01-2025',
        },
        {
            title: 'Conference Dates',
            date: '08-01-2025',
        },
    ];
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-semibold text-white lg:mt-10 mt-15">Important Dates</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[20px] poppins-medium  text-[#fcac45] ">Important Dates</h2></div>

                    </div>
                </div>
            </div>



            <section className="2xl:px-0 px-4 lg:py-15 py-10 max-w-[800px]  mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1e1b4b]">Important Dates</h2>
                <div className="space-y-4 ">
                    {dates.map((item, index) => (
                        <div
                            key={index}
                            className="flex group hover:-translate-y-1 duration-300 lg:justify-between flex-col lg:flex-row gap-5 lg:gap-0 items-center bg-gray-100 rounded-md p-4 md:px-20 shadow-sm"
                        >
                            <div className="text-base md:text-lg poppins-medium text-[#1e1b4b]">{item.title}</div>
                            <div className="text-base md:text-lg poppins-semibold text-[#1e1b4b]">{item.date}</div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default Datesandbank