import React from 'react'

const Flipcard = (props) => {
  return (
    <div>
         <div className="group [perspective:1000px]">
        <div className="relative w-64 h-40 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 bg-transparent shadow-lg text-white border flex flex-col justify-center items-center rounded-xl  [backface-visibility:hidden]">
            <h2 className="text-xl font-semibold">{props.front}</h2>
            <p className="text-sm">Hover to flip</p>
          </div>

          <div className="absolute inset-0 border text-white  flex flex-col justify-center items-center rounded-xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h2 className="text-xl font-semibold mx-3">{props.back}</h2>
            <p className="text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flipcard
