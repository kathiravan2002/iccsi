import React, { useState } from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiPhoneCall, FiUploadCloud } from 'react-icons/fi'
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Upload, FileText, Users, Mail, Building, CheckCircle, AlertCircle, Send } from 'lucide-react';
import { TbPointFilled } from 'react-icons/tb';
import { HiChevronDoubleRight } from 'react-icons/hi';

function Papersubmission() {

    const [fileName, setFileName] = useState('Choose Your File');

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    // const handleFileInputChange = (e) => {
    //     if (e.target.type === 'file') {
    //         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'iccsi';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://ic-csi.com/api/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('');
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }


    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/banner.png')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px]  poppins-medium text-white lg:mt-10 mt-15">Paper Submission</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[20px] poppins-medium text-white hover:text-[#fcac45] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[20px] poppins-medium  text-[#fcac45] ">Paper Submission</h2></div>
                    </div>
                </div>
            </div>

            <div className="  px-4 py-10 bg-gray-50">
                <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-[1400px] mx-auto">
                    <section className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-8 w-full lg:w-1/2">
                        <h3 className="text-2xl poppins-semibold text-center mb-6">Paper Submission</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block poppins-medium mb-1">Paper Title *</label>
                                <input
                                    type="text"
                                    name="Paper_Title"
                                    value={formData.Paper_Title}
                                    onChange={handleFileInputChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 shadow-sm text-base poppins-medium"
                                />
                            </div>

                            <div>
                                <label className="block poppins-medium mb-1">Author Full Name *</label>
                                <input
                                    type="text"
                                    name="Author_FUll_Name"
                                    value={formData.Author_FUll_Name}
                                    onChange={handleFileInputChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 shadow-sm text-base poppins-medium"
                                />
                            </div>



                            <div>
                                <label className="block poppins-medium mb-1">Author Email Address *</label>
                                <input
                                    type="email"
                                    name="Email_Address"
                                    value={formData.Email_Address}
                                    onChange={handleFileInputChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 shadow-sm text-base poppins-medium"
                                />
                            </div>

                            <div>
                                <label className="block poppins-medium mb-1">Author Institution Name *</label>
                                <input
                                    type="text"
                                    name="Institution_Name"
                                    value={formData.Institution_Name}
                                    onChange={handleFileInputChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md p-2 shadow-sm text-base poppins-medium"
                                />
                            </div>

                            <div>
                                <label className="block poppins-medium mb-1">Author Category *</label>
                                <select
                                    type="text"
                                    name="Paper_Track"
                                    value={formData.Paper_Track}
                                    onChange={handleFileInputChange}
                                    required
                                    className="w-full border poppins-medium border-gray-300 rounded-md p-2 shadow-sm text-base"
                                >
                                    <option value="">-- Select Category --</option>
                                    <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                                    <option value="Cybersecurity and Information Assurance">Cybersecurity and Information Assurance</option>
                                    <option value="Cloud Computing and Virtualization">Cloud Computing and Virtualization</option>
                                    <option value="Big Data Analytics and Data Science">Big Data Analytics and Data Science</option>
                                    <option value="Blockchain and Decentralized Technologies">Blockchain and Decentralized Technologies</option>
                                    <option value="Software Engineering and Agile Practices">Software Engineering and Agile Practices</option>
                                    <option value="Computer Vision and Image Processing">Computer Vision and Image Processing</option>
                                    <option value="Quantum Computing and Future Architectures">Quantum Computing and Future Architectures</option>
                                </select>
                            </div>

                            <div>
                                <label className="block poppins-medium mb-1">Upload Paper *</label>
                                <div className="relative">
                                    <div className="w-full border poppins-medium border-gray-300 rounded-md p-4  shadow-sm text-base text-center">
                                        <input
                                            id='Paper_File'
                                            name="Paper_File"
                                            accept=".pdf,.doc,.docx"
                                            type="file"
                                            onChange={handleFileInputChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                        <div className="space-y-4">
                                            <div className=" flex items-center justify-center ">
                                                <Upload className="w-8 h-8 text-gray-500" />
                                            </div>
                                            <div>
                                                <p className="text-lg poppins-semibold text-gray-700 mb-2">
                                                    {fileName || "Click to Upload Paper"}
                                                </p>
                                                <p className="text-sm poppins-medium  text-gray-500">
                                                    PDF, DOC, or DOCX files only (Max 5MB)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center ">
                                <button
                                    type="submit"
                                    className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white poppins-medium px-6 py-2 rounded-md shadow-md transition duration-200"
                                >
                                    {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}

                                </button>
                            </div>
                        </form>
                    </section>

                    <div className="space-y-6 w-full lg:w-1/2">
                        <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-6">
                            <p className="text-lg poppins-medium mb-4">
                                Follow these guidelines to submit your research paper
                            </p>
                            <h2 className="text-xl poppins-bold mb-3">Submission Guidelines</h2>

                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Papers must be written in English</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Maximum length: 8 pages including figures and references</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Use the IEEE conference format</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Submit in PDF, Docx, PPTX format</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Include abstract (max 250 words)</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Blind all author information for review</p></div>

                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-xl poppins-bold mb-3">Important Notes</h2>

                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">All papers undergo a double-blind peer review process</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">At least one author must register for the conference</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Plagiarism checks will be performed</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Multiple submissions are not allowed</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Authors must present accepted papers at the conference</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[32px] shrink-0 text-[#fcac45]' /> <p className="text-lg inter-regular leading-[30px] opacity-85 text-justify ">Papers will be published in the conference proceedings</p></div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Papersubmission