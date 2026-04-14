import React from 'react'

const Card = ({title, item}) => {
  return (
    <div>
      <div className='border p-2 rounded-xl'>
        <ul className='p-2'>
            <h1 className='font-bold underline text-slate-300'>{title}</h1>
           {
            item.map((item, index)=>(
            <li className='mt-2  list-disc mx-4' key={index}>
                <span>{item}</span>
            </li>
             
            ))
           }
        </ul>
      </div>
    </div>
  )
}

export default Card
