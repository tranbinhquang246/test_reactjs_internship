import React from 'react'
import logo from '../assets/logo.png'
import { IconContext } from "react-icons";
import { ImSearch } from "react-icons/im";

function header() {
  return (
    <div className="bg-[#070707] w-full h-14 flex justify-between text-white">
        <div className="flex items-center ml-5 w-4/12 justify-start">
            <img src={logo} className="h-4 w-40" ></img>
            <p className="ml-4 text-sm font-medium font-montserrat text-txheader">Discover</p>
            <p className="ml-4 text-sm font-medium font-montserrat text-txheader">Jobs</p>
        </div>
        <div className="flex items-center ml-10 w-4/12">
            <input type="search" className="w-full h-1/2 rounded-lg p-5" placeholder="Search for motion trend......"></input>
        </div>
        <div className="flex items-center justify-end mr-5 w-4/12">
            <IconContext.Provider value={{ color: "white"}}>
                <div>
                    <ImSearch></ImSearch>
                </div>
            </IconContext.Provider>
            <p className="ml-4 text-sm font-medium font-montserrat text-[#8f8f8f]">Login</p>
            <p className="ml-4 text-sm font-medium font-montserrat text-[#8f8f8f]">Signup</p>
        </div>
    </div>
  )
}

export default header