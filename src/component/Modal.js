import React, { useState } from 'react'
import Logo from '../assets/logoitem.jpg'
import { BsHeart } from "react-icons/bs"; 
import { BiUser } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import Img1 from '../assets/modal_img.png'

function Modal({setIsOpen}) {
    const elements2 = [1,2,3,4]
  return (
    <div className="flex bg-slate-500 w-full h-full z-0 absolute overflow-auto justify-center" onClick={() => setIsOpen(false)}>
        <div className="flex flex-col bg-white w-4/5 h-full mt-5 overflow-auto">
        <div className="flex ml-10 mr-10 mt-10 items-center">
            <img src={Logo} className="rounded-3xl w-14 h-14"></img>
            <div className="flex flex-col ml-5">
                <strong className="text-lg">The first portfolio movement.</strong>
                <div className="flex flex-cols text-xs font-montserrat">
                    <p>Kim Aeyong</p>
                    <p>Design, Music Video, Advertising</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="border-black border-2 flex text-black justify-center items-center font-montserrat text-xs p-1">
                        <BsHeart></BsHeart>
                        <p className="ml-2">Like</p>
                    </div>
                    <div className="bg-black flex text-white justify-center items-center font-montserrat text-xs p-1">
                        <BiUser></BiUser>
                        <p className="ml-2">Follow</p>
                    </div>
                    <div className="bg-black flex text-white justify-center items-center font-montserrat text-xs p-1">
                        <BiAddToQueue></BiAddToQueue>
                        <p className="ml-2">Add</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-black m-10">
        <iframe width="100%" height="600" src="https://www.youtube.com/embed/7TUWheT2_qQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p className="text-black font-montserrat ml-10 mr-10 text-xs">
        Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is  my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much.
        </p>
        <img src={Img1} className="ml-32 mr-32 mt-10"></img>
        <img src={Img1} className="ml-32 mr-32 mt-10"></img>
        <img src={Img1} className="ml-32 mr-32 mt-10"></img>
        <div className="flex flex-col items-center mt-10 font-montserrat">
            <label>The first portfolio movement.</label>
            <div className="flex items-center">
                <BsHeartFill className="w-3 h-3"></BsHeartFill>
                <p className="text-xs mr-1">18</p>
                <GrFormView></GrFormView>
                <p className="text-xs">18</p>
                <BiUser className="ml-1"></BiUser>
                <p className="text-xs">18</p>
            </div>
            <p className="text-xs font-montserrat mt-5 mb-5">Publishing date : 2020.10.15</p>
            <div className="grid grid-cols-2 gap-2">
                <div className="border-black border-2 flex text-black justify-center items-center font-montserrat text-xs p-1">
                    <BsHeart></BsHeart>
                    <p className="ml-2">Like</p>
                </div>
                <div className="bg-black flex text-white justify-center items-center font-montserrat text-xs p-1">
                    <BiAddToQueue></BiAddToQueue>
                    <p className="ml-2">Add</p>
                </div>
            </div>
        </div>

        <div className="flex m-10 items-center">
        <img src={Logo} className="rounded-3xl  w-10 h-10"></img>
        <p className="font-montserrat text-sm ml-3 font-bold">Kim Aeyong</p>
        </div>

        <div className="grid grid-cols-4 gap-2 ml-10 mr-10">
          {
            elements2.map((value, index) => {
              return (
                <div className="h-44 w-full flex flex-col">
                  <div className="flex items-end h-4/5 w-full bg-[url('https:\/\/yts.torrentbay.to\/assets\/images\/movies\/b_boy_blues_2021\/medium-cover.jpg?v=91')]">
                    <label className="font-montserrat text-white font-bold ml-2 mb-2 "> B-Boy Blues</label>
                  </div>
                  <div className="flex mt-2 justify-between">
                    <div className="flex items-center">
                      <img src={Logo} className="w-4 h-4 rounded-xl"></img>
                      <p className="text-xs ml-1">Kim Aeyong</p>
                    </div>
                    <div className="flex items-center">
                        <BsHeartFill className="w-3 h-3"></BsHeartFill>
                        <p className="text-xs mr-1">18</p>
                        <GrFormView></GrFormView>
                        <p className="text-xs">18</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>

      <div className="flex">
        <div className="w-2/3 ml-10 mr-5 mt-5 font-montserrat">
            <p className="font-bold">Comments</p>
            <input type="search" className="w-full h-7 rounded-sm p-5 border-slate-700 border-2 mt-3" placeholder="Write a comment now......"></input>
                {
                elements2.map((value, index) => {
                    return (
                        <div className="flex flex-col">
                            <div className="flex mt-5 items-center">
                                <img src={Logo} className="rounded-3xl  w-10 h-10"></img>
                                <div className="flex flex-col">
                                    <p className="font-montserrat text-xs ml-3 font-bold">Kim Aeyong</p>
                                    <p className="font-montserrat text-xs ml-3">2020. 07. 26</p>
                                </div>
                            </div>
                        <p className="font-montserrat text-xs mt-3  ">Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much
                        saturation.. love it!</p>
                        </div>
                    )
                    })
                }
            <div className="flex justify-center border-black border-2 mb-10 mt-5"> 
                <p className="p-1 font-montserrat text-xs">More Comments</p>
            </div>
        </div>
        <div className="grid grid-rows-5 gap-2 w-1/3 mr-10 ml-5 mt-14">
            <div className="flex items-center">
                <img src={Logo} className="w-10 h-10 rounded-3xl"></img>
                <p className="text-xs ml-1">Kim Aeyong</p>
            </div>
            <div>
                <p className="font-montserrat font-bold">The first portfolio movement.</p>
                <div className="flex items-center mt-3 mb-3">
                    <BsHeartFill className="w-3 h-3"></BsHeartFill>
                    <p className="text-xs mr-1">18</p>
                    <GrFormView></GrFormView>
                    <p className="text-xs">18</p>
                    <BiUser className="ml-1"></BiUser>
                    <p className="text-xs">18</p>
                </div>
                <p className="text-xs text-slate-400">Publishing date : 2020.10.15</p>
            </div>
            <div>
                <p className="text-xs text-slate-400">Creative field: </p>
                <div className="flex">
                    <div className="bg-violet-900 m-1">
                        <p className="text-sm font-medium text-violet-300 p-2">Premiere</p>
                    </div>
                    <div className="bg-sky-800 m-1">
                        <p className="text-sm font-medium text-sky-300 p-2">Photoshop</p>
                    </div>
                    <div className="bg-orange-900 m-1">
                        <p className="text-sm font-medium text-orange-300 p-2">Illustrated</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex">
                    <div className="border-red-500 border-2 m-1">
                        <p className="text-sm font-medium text-red-500 p-2">Editting</p>
                    </div>
                    <div className="border-red-500 border-2 m-1">
                        <p className="text-sm font-medium text-red-500 p-2">Camera action, Angle</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="border-red-500 border-2 m-1">
                        <p className="text-sm font-medium text-red-500 p-2">Sound</p>
                    </div>
                    <div className="border-red-500 border-2 m-1">
                        <p className="text-sm font-medium text-red-500 p-2">Graphical</p>
                    </div>
                    <div className="border-red-500 border-2 m-1">
                        <p className="text-sm font-medium text-red-500 p-2">Experimental</p>
                    </div>
                </div>
            </div>

            <div className="flex  justify-center items-center border-slate-900 border-2 h-1/3 font-montserrat">
                <p className=" font-medium text-sm">Report</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal