import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from './NavItems';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenuFold3Line } from 'react-icons/ri';


function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [scroll, setScroll] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const location = useLocation();
    const [subDropdown, setSubDropdown] = useState(false);

    const isActive = (path, includeHash = false) => {
        const currentPath = includeHash
            ? `${location.pathname}${location.hash}`
            : location.pathname;
        return currentPath === path;
    };
    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }

            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!dropdown1) setSubDropdown(false);
    }, [dropdown1]);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            scrollToSection(id);
        }
    }, [location]);

    const toggleSubDropdown = (index) => {
        setSubDropdown((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        console.log();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const about = [
        { name: "About the Conference", path: "/about" },
        { name: "Scope of Conference", path: "/scope" },
        // { name: "Organizing Committee", path: "/organizing-committee" },
        {
            name: "Editorial Board",
            children: [
                { name: "Organizing Committee", id: "organizing-committee", path: "/editorial-board" },
                { name: "Technical Committee", id: "technical-committee", path: "/editorial-board" },
                { name: "Advisory Committee", id: "advisory-committee", path: "/editorial-board" },
            ]
        }
    ];
    const author = [
        { name: "Conference Tracks", path: "/conference-tracks" },
        { name: "Key Dates", path: "/key-dates" },
        { name: "Paper Submission", path: "/paper-submission" },

    ];
    return (
        <div className='flex justify-center'>
            <div className={` fixed   w-full    z-20   duration-300 bg-[#000] py-5 lg:py-4  ${scroll ? ' ' : ' '} `}>
                <div className={`flex justify-between   items-center  max-w-[1400px] mx-auto px-3 2xl:px-0 ${scroll ? '  ' : '  '} `}>
                    <Link to="/">
                        <div className="flex items-center justify-center  ">
                            <img src="/images/iccsilogo.png" alt="logo" className="md:w-35 w-30 z-20" loading='lazy' />
                        </div>
                    </Link>
                    <div className="hidden lg:block w-full  ">
                        <ul className={`flex justify-end  items-center gap-10 poppins-medium text-[18px] rounded-r-[15px]  text-white  ${scroll ? ' ' : ' '} `}>
                            <li className="">
                                <Link to='/' className={`px-2 py-1 rounded-lg cursor-pointer ${isActive ( '/') ? 'text-black  bg-white' : '  '}`}>Home</Link>
                            </li>
                            <li ref={dropdown1Ref} className="cursor-pointer relative">
                                <button
                                    onClick={() => setDropdown1(!dropdown1)}
                                    className={`flex justify-between items-center px-2 py-1 rounded-lg cursor-pointer gap-1 ${about.some(link =>
                                        link.children
                                            ? link.children.some(sub => isActive(`${sub.path}#${sub.id}`, true))
                                            : isActive(link.path)
                                    )
                                        ? 'text-black  bg-white'
                                        : ''
                                        }`}
                                >
                                    About Us
                                    <FaChevronDown
                                        className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`}
                                    />
                                </button>
                                {dropdown1 && (
                                    <div
                                        className={`absolute order border-black  mt-3 rounded-lg text-black bg-white  ${scroll ? '' : ''
                                            }`}
                                    >
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap">
                                            {about.map((link, index) => {
                                                const isParentActive = link.children
                                                    ? link.children.some(sub =>
                                                        isActive(`${sub.path}#${sub.id}`, true)
                                                    )
                                                    : isActive(link.path);

                                                return (
                                                    <li key={index} className="relative">
                                                        {link.children ? (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleSubDropdown(index)}
                                                                    className={`w-full flex justify-between items-center px-4 py-1.5 rounded-md cursor-pointer ${isParentActive ? 'bg-black  text-white' : ''
                                                                        }`}
                                                                >
                                                                    {link.name}
                                                                    <FaChevronDown
                                                                        className={`${subDropdown[index] ? 'rotate-180' : 'rotate-0'
                                                                            } text-xs`}
                                                                    />
                                                                </button>
                                                                {subDropdown[index] && (
                                                                    <ul className="ml-4 mt-1 rounded-lg border border-black pl-2 px-2 py-2">
                                                                        {link.children.map((sub, subIndex) => {
                                                                            const subPathWithHash = `${sub.path}#${sub.id}`;
                                                                            const isSubActive = isActive(subPathWithHash, true);

                                                                            return (
                                                                                <li key={subIndex}>
                                                                                    <Link
                                                                                        to={subPathWithHash}
                                                                                        onClick={() => {
                                                                                            scrollToSection(sub.id);
                                                                                            setDropdown1(false);
                                                                                            toggleSubDropdown(index);
                                                                                        }}
                                                                                        className={`block px-4 py-1.5 rounded-md cursor-pointer ${isSubActive ? 'bg-black  text-white' : ''
                                                                                            }`}
                                                                                    >
                                                                                        {sub.name}
                                                                                    </Link>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <Link
                                                                to={link.path}
                                                                onClick={() => {
                                                                    setDropdown1(false);
                                                                    setSubDropdown({});
                                                                }}
                                                                className={`block px-4 py-1.5 rounded-md cursor-pointer ${isActive(link.path) ? 'bg-black  text-white' : ''
                                                                    }`}
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className={`flex items-center gap-1 px-2 py-1 rounded-lg cursor-pointer ${author.some(link => location.pathname === link.path) ? 'text-black  bg-white' : '   '}`}>Author’s Desk<FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                                {dropdown2 &&
                                    <div className={`absolute  border border-black  mt-3 rounded-lg text-black bg-white    ${scroll ? ' ' : ' '}`}>
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                            {author.map((link, index) => {
                                                const isActive = location.pathname === link.path;
                                                return (
                                                    <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                                                        <li className={`px-4 py-2 rounded-md transition cursor-pointer ${isActive ? 'bg-black  text-white ' : ''}`} >{link.name} </li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    </div>}
                            </li>


                            <li >
                                <Link to='/contact-us ' className={`px-2 py-1 rounded-lg cursor-pointer ${isActive('/contact-us') ? 'text-black  bg-white ' : ' '}`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        onClick={ToggleMenu}
                        className={`absolute right-0 w-fit flex justify-end   rounded-r-[15px]  shadow-lg py-3 md:py-4 px-4 ${scroll ? "" : ""
                            } text-white inline-flex align-middle cursor-pointer items-center duration-300  select-none lg:hidden `}
                    >
                        {" "}

                        < RiMenuFold3Line
                            className={`${scroll ? " " : ""}   text-3xl  cursor-pointer duration-300   `}
                        />

                    </div>

                </div>
                <div className="lg:hidden">
                    <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} setDropdown1={setDropdown1} dropdown1={dropdown1} />
                    {MenuOpen && (
                        <div
                            onClick={() => setMenuOpen(false)}
                            className="h-screen w-full bg-black/40 absolute top-0 "
                        ></div>

                    )}
                </div>
            </div>

        </div>
    )
}

export default Header