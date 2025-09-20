import React from 'react'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { MdPhoneInTalk } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Registerpage() {
  return (
    <div>
      <section className="bg-[#e2e2e2] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto 2xl:px-0 px-4 py-15">
          <div className="bg-white rounded-tr-[50px] rounded-bl-[50px] px-5 py-10 space-y-3 place-items-center group hover:-translate-y-2 duration-300  shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            <div className="text-[48px] text-[#fcac45] flex shrink-0"><FaLocationDot /></div>
            <h2 className="namdhinggo-bold text-2xl">Where</h2>
            <p className="inter-medium text-xl text-center">International Conference on Computer Science and Information Technology</p>
            <p className="inter-medium text-lg">Lagos, Nigeria</p>
          </div>
          <div className="bg-white rounded-tr-[50px] rounded-bl-[50px] px-5 py-10 space-y-3 place-items-center group hover:-translate-y-2 duration-300  shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            <div className="text-[48px] text-[#fcac45] flex shrink-0"><FaCalendarAlt /></div>
            <h2 className="namdhinggo-bold text-2xl">When</h2>
            <p className="inter-medium text-xl text-center"></p>
            <Link to="/key-dates">
              <div className="bg-[#fcac45] rounded-lg  w-fit mx-auto hover:text-white duration-300 mt-5">
                <button className='lg:text-lg text-base inter-bold py-2 px-4 cursor-pointer'>Read More </button>
              </div>
            </Link>
          </div>
          <div className="bg-white rounded-tr-[50px] rounded-bl-[50px] px-5 py-10 space-y-3 place-items-center group hover:-translate-y-2 duration-300  shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            <div className="text-[48px] text-[#fcac45] flex shrink-0"><BsFillPersonVcardFill /></div>
            <h2 className="namdhinggo-bold text-2xl">Contact</h2>
            <div className="space-y-3">
              <div className="flex gap-2 justify-center items-center "><IoIosMail className='flex text-[28px] shrink-0 text-[#fcac45]' /> <p className="inter-medium text-xl ">submit.iccsi@gmail.com</p></div>
              {/* <div className="flex gap-2 items-center text-[32px] shrink-0"> <MdPhoneInTalk /><p className="inter-medium text-lg"> 987</p></div> */}
              <div className="flex gap-2 justify-center items-center "> <FaLocationDot className='flex text-[28px] shrink-0 text-[#fcac45]' /><p className="inter-medium text-lg"> Lagos, Nigeria</p></div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Registerpage