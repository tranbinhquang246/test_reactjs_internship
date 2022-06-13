import React from 'react'
import { IconContext } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import LogoFooter from '../assets/logofooter.svg'

function Footer() {
  return (
    <div>
        <div className="bg-[#070707] h-10 flex text-white justify-between items-center text-xs font-montserrat" >
            <div className="flex ml-10">
                <strong>Contact</strong>
                <p className="ml-7">motiontrend@test.com</p>
            </div>
            <div className="flex text-slate-500 mr-10">
                <p>@ Motiontrend. All rights reserved.</p>
                <IconContext.Provider value={{ color: "white"}}>
                    <div>
                        <BsInstagram className="ml-10"></BsInstagram>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white"}}>
                    <div>
                        <BsFacebook className="ml-5"></BsFacebook>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white"}}>
                    <div>
                        <BsYoutube className="ml-5"></BsYoutube>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
        <div className="h-10 flex text-slate-800 justify-between items-center text-xs font-montserrat" >
            <div className="flex ml-10">
                <p>Introduction</p>
                <p className="ml-7">Terms of Service</p>
                <p className="ml-7">Language</p>
                <p className="ml-7">Customer Service</p>
            </div>
            <img src={LogoFooter} className="w-1/6 h-1/3 mr-10"></img>
        </div>
    </div>
    
  )
}

export default Footer