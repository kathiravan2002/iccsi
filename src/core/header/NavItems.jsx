import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaChevronDown, FaUpload } from "react-icons/fa";


const NavItems = ({ ToggleMenu, MenuOpen, isActive, }) => {

  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [subDropdown, setSubDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <>
      <nav className={`${MenuOpen ? 'translate-x-0' : '-translate-y-full'} duration-300 mx-auto  poppins-medium border border-black   rounded-b-lg text-white bg-black min-h-65 max-h-screen max-w-full w-full top-0 right-0 absolute z-50`}>

        <div className="p-5">

          <div className="w-44  p-2"></div>
          <div onClick={ToggleMenu} className="absolute right-5 top-5 cursor-pointer"><IoClose className="text-2xl" /></div>

          <ul className="flex flex-col items-start mt-5 *:my-2 *:px-2  overflow-y-auto max-h-[calc(100vh-150px)] ">
            <Link to="/" className={` ${isActive ('/') ? 'text-black bg-white  rounded-lg min-w-[75px] py-1  px-2' : ' '}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);
                }}
                className="duration-300 "
              >
                Home
              </li>
            </Link>



           <li ref={dropdown1Ref} >
              <button
                onClick={() => setDropdown1(!dropdown1)}
                className={`flex items-center gap-1 cursor-pointer ${about.some(link =>
                  link.children
                    ? link.children.some(sub => isActive(`${sub.path}#${sub.id}`, true))
                    : isActive(link.path)
                )
                  ? 'text-[#262341] bg-white   py-1 px-2 rounded-lg'
                  : ''
                  }`}
              >
                About Us
                <FaChevronDown
                  className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`}
                />
              </button>

              {dropdown1 && (
                <div className="border-1 border-gray-400 top-9 rounded-lg mt-1">
                  <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap">
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
                                className={`w-full flex justify-between items-center px-4 py-1.5 rounded-md cursor-pointer ${isParentActive ? 'text-[#262341] bg-white' : ''
                                  }`}
                              >
                                {link.name}
                                <FaChevronDown
                                  className={`${subDropdown[index] ? 'rotate-180' : 'rotate-0'
                                    } text-xs`}
                                />
                              </button>
                              {subDropdown[index] && (
                                <ul className="ml-4 mt-1 rounded-lg border-1 border-gray-400 pl-2 px-2 py-2">
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
                                          className={`block px-4 py-1.5 rounded-md cursor-pointer ${isSubActive ? 'text-[#262341] bg-white' : ''
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
                              className={`block px-4 py-1.5 rounded-md cursor-pointer ${isActive(link.path) ? 'text-[#262341] bg-white' : ''
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

            <li ref={dropdown2Ref} >
              <Link onClick={() => setDropdown2(!dropdown2)} className={`flex items-center gap-1  ${author.some(link => location.pathname === link.path)
                ? 'text-black bg-white  py-1 px-1 rounded-lg'
                : ''
                }`}>
                Author’s Desk
                <FaChevronDown
                  className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs`}
                />
              </Link>

              {dropdown2 && (
                <div className="border border-gray-400 top-9 rounded-lg mt-1">
                  <ul className="p-2 text-sm max-w-none w-full whitespace-nowrap">
                    {author.map((link, index) => {
                      const isActive = location.pathname === link.path;

                      return (
                        <Link
                          key={index}
                          to={link.path}
                          onClick={() => {
                            setDropdown1(false);
                            ToggleMenu(false);
                          }}
                          className="block"
                        >
                          <li
                            className={`px-4 py-2 rounded-md transition cursor-pointer ${isActive
                              ? 'text-black bg-white  '
                              : ''
                              }`}
                          >
                            {link.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>


            <Link to="/contact-us" className={` ${isActive ( '/contact-us') ? 'text-black bg-white  rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Contact Us
              </li>
            </Link>
          </ul>

        </div>

      </nav>
    </>
  );
};

export default NavItems;