import React from 'react'

function Slider() {
  const menu = ['Editting', 'Camera', 'Sound Beats', 'Graphical','Experimental', 'Elements','Car','Gun']
  return (
    <div className="w-full h-14 mt-2 mb-2 grid grid-cols-8 gap-2 ml-2 mr-2">
      {
        menu.map((value, index) => {
          return (
            <div className="bg-[#070707] text-white font-montserrat text-sm flex justify-center items-center">
              <p>{value}</p>
            </div>
          )
        })
      }
      
     
    </div>
  )
}

export default Slider