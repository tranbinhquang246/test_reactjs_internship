import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import LogoItem from '../assets/logoitem.jpg'
import { BsHeartFill } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import DataJson from '../assets/data.json'


function Tab_motion_trend_pick() {
  const elements2 = [1,2,3,4,5]
  console.log(DataJson)
  
  return ( 
    <div className="flex flex-col">
      <div className="grid grid-cols-5 gap-2 mt-5">
          {
            DataJson.map((value, index) => {
              return (
                <div className="h-44 w-full flex flex-col">
                  <div className="flex items-end h-4/5 w-full" style ={{backgroundImage: 'url('+DataJson[index].medium_cover_image+')'}}>
                    <label className="font-montserrat text-white font-bold ml-2 mb-2 ">{DataJson[index].title}</label>
                  </div>
                  <div className="flex mt-2 justify-between">
                    <div className="flex items-center">
                      <img src={LogoItem} className="w-4 h-4 rounded-xl"></img>
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
      <div className=" grid grid-cols-3 gap-5 p-5 items-center mt-10">
          <div className="flex flex-col justify-around p-5">
            <p className="font-medium font-montserrat">TUTORIAL</p>
            <span className="text-xl font-bold font-montserrat">Let's look at 7 ways
                                to use motion trend
                                more effectively
                                in the first tutorial.</span>
            <button type="submit" className="bg-black w-1/2 text-white text-sm p-3">Watch Now</button>
          </div>
          <iframe width="400" height="250" src="https://www.youtube.com/embed/tFFy0yEYki0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="grid grid-rows-3 gap-5 text-[0.5rem]">
            <div className="flex">
              <img src={LogoItem} className="w-20 h-12"></img>
              <div className="flex flex-col ml-3 justify-between">
                <span className="font-montserrat font-medium">TUTORIAL</span>
                <span className="font-montserrat">A tutorial video with Motion Trend. Let's Learn
                    Motion Trends.</span>
                <div className="flex items-center">
                  <BsHeartFill className="w-2 h-2"></BsHeartFill>
                  <p className=" mr-1">18</p>
                  <GrFormView></GrFormView>
                  <p>18</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <img src={LogoItem} className="w-20 h-12"></img>
              <div className="flex flex-col ml-3 justify-between">
                <span className=" font-montserrat font-medium">TUTORIAL</span>
                <span className=" font-montserrat">A tutorial video with Motion Trend. Let's Learn
                    Motion Trends.</span>
                <div className="flex items-center">
                  <BsHeartFill className="w-2 h-2"></BsHeartFill>
                  <p className=" mr-1">18</p>
                  <GrFormView></GrFormView>
                  <p>18</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <img src={LogoItem} className="w-20 h-12"></img>
              <div className="flex flex-col ml-3 justify-between">
                <span className="font-montserrat font-medium">TUTORIAL</span>
                <span className=" font-montserrat">A tutorial video with Motion Trend. Let's Learn
                    Motion Trends.</span>
                <div className="flex items-center">
                  <BsHeartFill className="w-2 h-2"></BsHeartFill>
                  <p className="mr-1">18</p>
                  <GrFormView></GrFormView>
                  <p>18</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-10">
          {
            elements2.map((value, index) => {
              return (
                <div className="h-44 w-full flex flex-col">
                  <div className="flex items-end h-4/5 w-full bg-[url('https:\/\/yts.torrentbay.to\/assets\/images\/movies\/b_boy_blues_2021\/medium-cover.jpg?v=91')]">
                    <label className="font-montserrat text-white font-bold ml-2 mb-2 "> B-Boy Blues</label>
                  </div>
                  <div className="flex mt-2 justify-between">
                    <div className="flex items-center">
                      <img src={LogoItem} className="w-4 h-4 rounded-xl"></img>
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
    </div>
  )
}

export default Tab_motion_trend_pick