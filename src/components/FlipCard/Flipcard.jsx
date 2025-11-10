import React from 'react'

const Flipcard = (props) => {
  return (
    <div>
         <div className="group [perspective:1000px]">
        <div className="relative w-64 h-40 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-gray-700 flex flex-col justify-center items-center rounded-xl shadow-xl [backface-visibility:hidden]">
            <h2 className="text-xl font-semibold">{props.front}</h2>
            <p className="text-sm">Hover to flip</p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-orange-400 to-red-600 text-gray-700 flex flex-col justify-center items-center rounded-xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h2 className="text-xl font-semibold mx-3">{props.back}</h2>
            <p className="text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flipcard
