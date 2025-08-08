import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FileText, Mail, Building, Phone } from 'lucide-react';
import { HiChevronDoubleRight } from 'react-icons/hi';


function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            const response = await fetch('https://ic-csi.com/api/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const result = await response.text();
            setStatus(result);
            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-semibold text-white lg:mt-10 mt-15">Contact Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[20px] poppins-medium  text-[#fcac45] ">Contact Us</h2></div>
                    </div>
                </div>
            </div>
            <div className="text-black max-w-[800px] mx-auto py-8 px-4">
                <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5 ">
                    <div className="">
                        <h3 className="text-2xl poppins-semibold text-center py-4">Contact Us</h3>

                    </div>

                    <div className="flex flex-col lg:flex-row justify-between gap-10  ">
                        {/* Contact Form */}
                        <div className="w-full  py-5 ">
                            <div className="">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* First Name */}
                                        <div>
                                            <label className="block poppins-semibold mb-1">First Name *</label>
                                            <input
                                                type="text"
                                                name="firstname"
                                                value={formData.firstname}
                                                onChange={handleFileInputChange}
                                                required
                                                className="w-full border-2 border-gray-300 rounded-md p-2 poppins-medium shadow-sm text-base"
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div>
                                            <label className="block poppins-semibold mb-1">Last Name *</label>
                                            <input
                                                type="text"
                                                name="secondname"
                                                value={formData.secondname}
                                                onChange={handleFileInputChange}
                                                required
                                                className="w-full border-2 border-gray-300 rounded-md p-2 poppins-medium shadow-sm text-base"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block poppins-semibold mb-1">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleFileInputChange}
                                                required
                                                className="w-full border-2 border-gray-300 rounded-md poppins-medium p-2 shadow-sm text-base"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label className="block poppins-semibold mb-1 ">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="number"
                                                value={formData.number}
                                                onChange={handleFileInputChange}
                                                required
                                                className="w-full border-2 border-gray-300 rounded-md p-2 poppins-medium shadow-sm text-base"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block poppins-semibold mb-1">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleFileInputChange}
                                            rows="3"
                                            required
                                            className="w-full border-2 border-gray-300 rounded-md poppins-medium p-2 shadow-sm text-base"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center ">
                                        <button
                                            type="submit"
                                            className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white poppins-medium px-6 py-2 rounded-md shadow-md transition duration-200"
                                        >
                                            {status === 'Sending...' ? 'Submitting...' : 'Send Message'}

                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contactus